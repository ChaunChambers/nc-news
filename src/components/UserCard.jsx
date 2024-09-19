const UserCard = ({ user }) => {
  return (
    <div className="">
      <h2 className="">Name: {user.name} </h2>
      <h2 className="">{user.username} </h2>
      <img className="user-img" src={user.avatar_url} />
      <br />
    </div>
  );
};

export default UserCard;
