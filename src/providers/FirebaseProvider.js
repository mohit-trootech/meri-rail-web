import React from "react";
import { useState } from "react";
import { GetRequest } from "../utils/AxiosRequest";
import { FirebaseContext } from "../context/Context";
import { BaseUrlPath } from "../utils/contants";
import { initializeApp } from "firebase/app";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
const FIRESTORE_SECRET_PATH = "api/secrets/firestore/";

const FirebaseProvider = ({ children }) => {
  const [app, setApp] = useState();
  const [db, setDb] = useState();
  const [data, setData] = useState([]);
  const getFirestoreConfiguration = async () => {
    let response = await GetRequest(BaseUrlPath + FIRESTORE_SECRET_PATH);
    response && setApp(initializeApp(response.data));
  };

  const createCollectionDocument = async (key, data) => {
    if (db) {
      try {
        await addDoc(collection(db, key), data);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const collectionSnapshot = async (key) => {
    if (db) {
      try {
        await onSnapshot(collection(db, key), (snapshot) => {
          snapshot.forEach((doc) => {
            setData((prevData) => [...prevData, doc.data()]);
          });
        });
      } catch (e) {
        console.error("Error fetching document: ", e);
      }
    }
  };

  const providerData = {
    app,
    db,
    data,
    setDb,
    setApp,
    getFirestoreConfiguration,
    createCollectionDocument,
    collectionSnapshot,
  };
  return (
    <FirebaseContext.Provider value={providerData}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
