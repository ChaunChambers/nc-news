import { useState, useEffect, useContext } from "react";
import { getAllUsers } from "../assets/Utils/apiCalls";
import UserCard from "./UserCard";
import { UserContext } from "../contexts/UserContext";

const Users = ({ userLoggedIn, handleLogOut, handleSetUser }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function handleLogIn() {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    getAllUsers().then((allUsers) => {
      setUsers(allUsers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else
    return (
      <div>
        {userLoggedIn === null && (
          <h4 className="click-avatar">Click avatar to log in</h4>
        )}

        {userLoggedIn && (
          <div className="">
            <h4 className="pink">Logged In: {userLoggedIn.username} </h4>
            <button onClick={handleLogOut}>
              {userLoggedIn ? `Log Out` : `Log In`}
            </button>
          </div>
        )}
        <hr />
        <ul className="container">
          {users.map((user, index) => {
            return (
              <li
                className="user-card"
                key={index}
                onClick={() => {
                  handleSetUser(user);
                  handleLogIn;
                }}
              >
                <UserCard user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Users;
