import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Leaderboard from "./components/Leaderboard";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showForm, setShowForm] = useState(false); // new state

  const fetchData = async () => {
    const res1 = await axios.get("http://localhost:5000/api/users");
    const res2 = await axios.get("http://localhost:5000/api/users/leaderboard");
    setUsers(res1.data);
    setLeaderboard(res2.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-purple-950 w-full min-h-screen flex flex-col justify-start items-center">
      <div className="border-5 border-amber-300 rounded p-4 shadow shadow-amber-50 bg-purple-100 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard App</h1>

        {/* Add User Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add User
          </button>
        </div>

        {/* Add User Form */}
        {showForm && (
          <AddUserForm
            onClose={() => setShowForm(false)}
            onUserAdded={fetchData}
          />
        )}

        <Leaderboard leaderboard={leaderboard} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {users.map((user) => (
            <UserCard key={user._id} user={user} onClaim={fetchData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
