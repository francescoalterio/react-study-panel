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

  const setData = async (
    property,
    technologyData,
    options = { deleteDominated: false }
  ) => {
    const newPropertyData = options.deleteDominated
      ? userData[property].filter((item) => item.id !== technologyData.id)
      : [...userData[property], technologyData];
    const userDataCopy = { ...userData };
    delete userDataCopy.userData;
    userDataCopy[property] = newPropertyData;
    await setDataUser(userData.userData.uid, userDataCopy);
    const data = await getDocument("users", userData.userData.uid);
    console.log("DATA: ", data);
    handleUserData({
      userData: userData.userData,
      learning: data.learning,
      dominated: data.dominated,
      created: data.created,
    });
  };

  const learningHandler = (technologyData) => {
    if (!userData.userData) navigate("/");
    else setData("learning", technologyData);
  };

  const dominatedHandler = (technologyData) => {
    if (!userData.userData) navigate("/");
    else setData("dominated", technologyData);
  };

  const addTechnologyHandler = (e, technologyData) => {
    e.preventDefault();
    const addingID = { ...technologyData, id: Date.now() };
    setData("created", addingID);
    navigate("/technologies");
  };

  const deleteHandler = (property, id) => {
    setData(property, { id }, { deleteDominated: true });
  };
  return {
    userData,
    technologies,
    learningHandler,
    dominatedHandler,
    addTechnologyHandler,
    deleteHandler,
  };
}
