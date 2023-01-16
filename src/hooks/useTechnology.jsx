import { getFirestore } from "../utils/getFirestore";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { setDataUser } from "../utils/setDataUser";
import { getDocument } from "../utils/getDocument";
import { useNavigate } from "react-router-dom";

export function useTechnology() {
  const [technologies, setTechnologies] = useState([]);

  const [userData, handleUserData] = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getFirestore("Core").then((result) => {
      setTechnologies([...result, ...userData.created]);
    });
  }, [userData]);

  const handleLearn = (technology, createdBy, img, id) => {
    if (!userData.email) {
      navigate("/login");
    } else {
      const techToLearn = {
        technology,
        createdBy,
        img,
        id,
      };
      const newLearningArray = [...userData.learning, techToLearn];
      setDataUser(userData.email, {
        learning: newLearningArray,
        dominated: userData.dominated,
        created: userData.created,
      });
      getDocument("users", userData.email).then((data) => {
        handleUserData({
          email: userData.email,
          learning: data.learning,
          dominated: data.dominated,
          created: data.created,
        });
      });
    }
  };

  const handleDominated = (technology, createdBy, img, id) => {
    if (!userData.email) {
      navigate("/login");
    } else {
      const techToDominated = {
        technology,
        createdBy,
        img,
        id,
      };

      const newDominatedArray = [...userData.dominated, techToDominated];

      setDataUser(userData.email, {
        learning: userData.learning,
        dominated: newDominatedArray,
        created: userData.created,
      });
      getDocument("users", userData.email).then((data) => {
        handleUserData({
          email: userData.email,
          learning: data.learning,
          dominated: data.dominated,
          created: data.created,
        });
      });
    }
  };

  return {
    userData,
    technologies,
    handleLearn,
    handleDominated,
  };
}
