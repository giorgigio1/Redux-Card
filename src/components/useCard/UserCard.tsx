import "../../App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import styles from "./userCard.module.css";

const UserCard: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [picture, setPicture] = useState("");
  const [socialNetworks, setSocialNetworks] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    discord: "",
  });

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [pictureError, setPictureError] = useState("");
  const [socialNetworksError, setSocialNetworksError] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    discord: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let hasError = false;

    if (!name.trim()) {
      setNameError("Name cannot be empty");
      hasError = true;
    }

    if (!surname.trim()) {
      setSurnameError("Surname cannot be empty");
      hasError = true;
    }

    if (!picture.trim()) {
      setPictureError("Picture URL cannot be empty");
      hasError = true;
    }

    const socialErrors = {
      instagram: validateSocialNetwork("instagram", socialNetworks.instagram),
      facebook: validateSocialNetwork("facebook", socialNetworks.facebook),
      twitter: validateSocialNetwork("twitter", socialNetworks.twitter),
      discord: validateSocialNetwork("discord", socialNetworks.discord),
    };

    setSocialNetworksError(socialErrors);

    if (Object.values(socialErrors).some((error) => !!error)) {
      hasError = true;
    }

    if (hasError) {
      return;
    }

    dispatch(setUserInfo({ name, surname, picture, socialNetworks }));
    navigate("/user");
  };

  const validateSocialNetwork = (
    network: keyof typeof socialNetworks,
    value: string
  ) => {
    if (value.trim() === "") {
      return `${
        network.charAt(0).toUpperCase() + network.slice(1)
      } cannot be empty`;
    }
    return "";
  };

  const handleSocialNetworkChange = (
    network: keyof typeof socialNetworks,
    value: string
  ) => {
    setSocialNetworks((prev) => ({ ...prev, [network]: value }));
    setSocialNetworksError((prev) => ({ ...prev, [network]: "" }));
  };

  return (
    <div className={`card bg-dark ${styles.userCard}`}>
      <img
        src={picture}
        className={`card-img-top m-4 mx-auto ${styles.fixedImage}`}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title m-2 text-white">User Info</h5>
        <input
          type="text"
          className={`form-control m-2 ${nameError ? "is-invalid" : ""}`}
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
        />
        {nameError && <p className="text-danger m-2">{nameError}</p>}
        <input
          type="text"
          className={`form-control m-2 ${surnameError ? "is-invalid" : ""}`}
          placeholder="Surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
            setSurnameError("");
          }}
        />
        {surnameError && <p className="text-danger m-2">{surnameError}</p>}
        <input
          type="text"
          className={`form-control m-2 ${pictureError ? "is-invalid" : ""}`}
          placeholder="Picture URL"
          value={picture}
          onChange={(e) => {
            setPicture(e.target.value);
            setPictureError("");
          }}
        />
        {pictureError && <p className="text-danger m-2">{pictureError}</p>}
        <input
          type="text"
          className={`form-control m-2 ${
            socialNetworksError.instagram ? "is-invalid" : ""
          }`}
          placeholder="Instagram"
          value={socialNetworks.instagram}
          onChange={(e) =>
            handleSocialNetworkChange("instagram", e.target.value)
          }
        />
        {socialNetworksError.instagram && (
          <p className="text-danger m-2">{socialNetworksError.instagram}</p>
        )}
        <input
          type="text"
          className={`form-control m-2 ${
            socialNetworksError.facebook ? "is-invalid" : ""
          }`}
          placeholder="Facebook"
          value={socialNetworks.facebook}
          onChange={(e) =>
            handleSocialNetworkChange("facebook", e.target.value)
          }
        />
        {socialNetworksError.facebook && (
          <p className="text-danger m-2">{socialNetworksError.facebook}</p>
        )}
        <input
          type="text"
          className={`form-control m-2 ${
            socialNetworksError.twitter ? "is-invalid" : ""
          }`}
          placeholder="Twitter"
          value={socialNetworks.twitter}
          onChange={(e) => handleSocialNetworkChange("twitter", e.target.value)}
        />
        {socialNetworksError.twitter && (
          <p className="text-danger">{socialNetworksError.twitter}</p>
        )}

        <input
          type="text"
          className={`form-control m-2 ${
            socialNetworksError.discord ? "is-invalid" : ""
          }`}
          placeholder="Discord"
          value={socialNetworks.discord}
          onChange={(e) => handleSocialNetworkChange("discord", e.target.value)}
        />
        {socialNetworksError.discord && (
          <p className="text-danger">{socialNetworksError.discord}</p>
        )}

        <button className="btn btn-primary m-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserCard;
