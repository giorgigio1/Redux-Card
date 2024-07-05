import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";
import styles from "./useProfile.module.css";

const UserProfile2: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log("user", user);
  return (
    <Card className={`bg-secondary mx-auto ${styles.profileCard}`}>
      <Card.Img
        variant="top"
        src={user.picture}
        className={`rounded-circle ${styles.fixedImage}`}
      />
      <Card.Body>
        <Card.Title className="text-center text-white">
          {user.name} {user.surname}
          <BsFillCheckCircleFill color="aqua" style={{ marginLeft: 10 }} />
        </Card.Title>
        <Card.Text className="text-center text-white">Day Trader</Card.Text>
        <div className="d-flex flex-column my-5">
          <Button variant="light m-1" className="mr-2">
            ONLINE TRADING COURSES
          </Button>
          <Button variant="light m-1" className="mr-2">
            COPY MY TRADINGS
          </Button>
          <Button variant="light m-1" className="mr-2">
            BUY SIGNALS
          </Button>
          <Button variant="light m-1">MERCHANT</Button>
        </div>
        <div
          className="mx-auto mt-5 d-flex justify-content-around w-75"
          style={{ borderBottom: "2px solid white", height: "50px" }}
        >
          <FaInstagram color="white" size={30} className="ml-2" />
          <FaFacebook color="white" size={30} className="ml-2" />
          <FaTwitter color="white" size={30} className="ml-2" />
          <FaDiscord color="white" size={30} className="ml-2" />
        </div>
        <Card.Title className="text-center text-white mt-2 ">
          <h6>
            @{user.name.toLowerCase()}
            {user.surname.toLowerCase()}
          </h6>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserProfile2;
