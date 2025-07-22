const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <ul>
        {leaderboard.map((user) => (
          <li key={user.name} className="bg-pink-600 w-full md:w-[25rem] mb-2 rounded-2xl text-start p-1 px-2 text-amber-50 font-extrabold">
            {user.rank} - {user.name} ({user.totalPoints} pts)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
