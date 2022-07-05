import useListGames from "./hooks/useListGames";
import CreateGameForm from "./components/CreateGameForm";
import EditGameButton from "./components/EditGameButton";
import DeleteGameButton from "./components/DeleteGameButton";

const App = () => {
  const { games, setRefresh } = useListGames();

  return (
    <div className="p-8">
      <div>
        <CreateGameForm onSuccess={() => setRefresh(true)} />
      </div>
      <div>
        {games.map((game) => {
          return (
            <div key={game._id}>
              <span className="text-slate-400 hover:text-sky-400">
                {game.name}
              </span>
              <EditGameButton
                id={game._id}
                onSuccess={() => setRefresh(true)}
              />
              <DeleteGameButton
                id={game._id}
                onSuccess={() => setRefresh(true)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
