import React, { useEffect, useState } from "react";
import { api, handleError } from "helpers/api";
//import User from "models/User";
import { useNavigate, useParams } from "react-router-dom";
import BaseContainer from "components/ui/BaseContainer";
//import PropTypes from "prop-types";
import "styles/views/Profile.scss";
import {Button} from "components/ui/Button";
//import axios from 'axios';

const Profile = () => {
  const userId= localStorage.getItem("userId");
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  // const currentIdString = localStorage.getItem("userId");
  // const currentId = parseInt(currentIdString);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  console.log("shi", userId);
  const fetchUserData = async () => {
    try {
      const response = await api.get(`/users/${userId}`);
      // console.log("response data", response.data)
      setUserData(response.data);
      // Check if userData is not null or undefined
      // console.log("userData", userData);
      // console.log("token", token);
      // Store the token into the local storage.
      //localStorage.setItem("token", userData.token);
      localStorage.setItem("userId", userId);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const saveUserData = async () => {
    try {
      const requestBody = {
        id: userId,
        username: newUsername,
        password: newPassword,
        token: token,
      };

      console.log("request body", requestBody)
      console.log("userId:", userId);
      await api.put(`/users/${userId}`, requestBody);

      setNewUsername("");
      setNewPassword("");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      fetchUserData(); // Refresh user data after saving
      setEditing(false); // Exit edit mode
    } catch (error) {console.error("Error saving user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on component mount
  }, [userId]); // Re-fetch data when ID changes

  const handleEditClick = () => {
    setEditing(false);
  };
  console.log(localStorage);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("creation_date");
    navigate("/login");
  };

  const back = () => {
    navigate(`/lobby/${userId}`);
  };

  return (
    <BaseContainer className="profile-container">
      <div className="left-section">
        {userData ? (
          <div className="profile-info">
            <p>ID: {userData.id}</p>
            <p>Online Status: {userData.status}</p>
            <p>Username: {userData.username}</p>
            {/* Display password as asterisks or provide a mechanism to edit it */}
            <p>Password: **********</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {editing && (
          <div>
            <div className="form-group">
              <label>Set Username:</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Set Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            {showSuccessMessage && (
              <p className="success-message">Changes saved successfully!</p>
            )}
          </div>
        )
        }
        {
          userData && (
            <div className="left-button-container">
              <div>
                {editing && <Button
                  disabled={!newUsername || !newPassword}
                  width="100%"
                  onClick={() => {
                    saveUserData(); // save user data
                    setEditing(false); // set editing state as false
                  }}>
                  Save
                </Button>}
              </div>
              <div>
                {/* enable editing button or not */}
                {!editing && (
                  <Button width="100%" onClick={() => setEditing(true)}>
                      Edit
                  </Button>
                )}
              </div>
              <div>
              <Button width="100%" onClick={back}>Back</Button>
              {!editing && <Button width="100%" onClick={handleLogout}>Logout</Button>}
            </div>
            </div>
          )
        }

      </div>
    </BaseContainer>
  );
};

export default Profile;
