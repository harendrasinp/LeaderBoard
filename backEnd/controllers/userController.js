import User from '../models/User.js';
import ClaimHistory from '../models/ClaimHistory.js';

// Get all users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Add new user
export const addUser = async (req, res) => {
  const { name, totalPoints } = req.body;

  const newUser = new User({
    name,
    totalPoints: totalPoints || 0,
  });

  await newUser.save();
  res.json(newUser);
};

// Claim random points
export const claimPoints = async (req, res) => {
  const { id } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(id);
  user.totalPoints += randomPoints;
  await user.save();

  const history = new ClaimHistory({ userId: id, points: randomPoints });
  await history.save();

  res.json({ user, claimedPoints: randomPoints });
};

// Get leaderboard
export const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((user, index) => ({
    rank: index + 1,
    name: user.name,
    totalPoints: user.totalPoints
  }));

  res.json(leaderboard);
};
