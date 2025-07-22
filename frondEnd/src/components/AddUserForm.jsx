import { useState } from "react";
import axios from "axios";

const AddUserForm = ({ onClose, onUserAdded }) => {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !points) return;

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/add`, {
        name,
        totalPoints: Number(points),
      });
      alert("User Added!");
      setName("");
      setPoints("");
      onUserAdded();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Add New User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Enter total points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
