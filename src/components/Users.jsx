import { useContext, useState, useEffect } from "react";
import { getAllUsers } from "../assets/Utils/apiCalls";
import UserCard from "./UserCard";
import { UserContext } from "../contexts/UserContext";

const Users = () => {
  const { userLoggedIn, setUserLoggedIn, handleLogOut } =
    useContext(UserContext);
  const [users, setUsers] = useState([]);

  function handleSetUser(user) {
    setUserLoggedIn(user);
  }

  function handleLogIn() {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    getAllUsers().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);
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
                // handleLogIn();
                handleSetUser(user);
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
