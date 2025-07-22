import axios from "axios";

const UserCard = ({ user, onClaim }) => {
  const handleClaim = async () => {
    const res =  await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/claim/${user._id}`);
    onClaim();
    alert(`${user.name} got ${res.data.claimedPoints} points!`);
  };

  return (
    <div className="border rounded p-2 shadow text-center bg-white">
      <h3 className="font-bold text-[1.2rem]">{user.name}</h3>
      <p>Total: {user.totalPoints} pts</p>
      <button
        onClick={handleClaim}
        className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 cursor-pointer"
      >
        Claim
      </button>
    </div>
  );
};

export default UserCard;
