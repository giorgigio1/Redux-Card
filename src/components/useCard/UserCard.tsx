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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setUserInfo({ name, surname, picture, socialNetworks }));
    navigate("/user");
  };

  const handleSocialNetworkChange = (
    network: keyof typeof socialNetworks,
    value: string
  ) => {
    console.log("network", network);
    console.log("value", value);
    setSocialNetworks((prev) => ({ ...prev, [network]: value }));
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
          className="form-control m-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length < 0 && <p className="text-danger">Error!</p>}
        <input
          type="text"
          className="form-control m-2"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          placeholder="Picture URL"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          placeholder="Instagram"
          value={socialNetworks.instagram}
          onChange={(e) =>
            handleSocialNetworkChange("instagram", e.target.value)
          }
        />
        <input
          type="text"
          className="form-control m-2"
          placeholder="Facebook"
          value={socialNetworks.facebook}
          onChange={(e) =>
            handleSocialNetworkChange("facebook", e.target.value)
          }
        />
        <input
          type="text"
          className="form-control m-2"
          placeholder="Twitter"
          value={socialNetworks.twitter}
          onChange={(e) => handleSocialNetworkChange("twitter", e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          placeholder="Discord"
          value={socialNetworks.discord}
          onChange={(e) => handleSocialNetworkChange("discord", e.target.value)}
        />
        <button className="btn btn-primary m-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserCard;
