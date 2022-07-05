import { useState } from "react";
import CreateGameForm from "./components/CreateGameForm";
import ListGames from "./components/ListGames";

const App = () => {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="m-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Games</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <CreateGameForm onSuccess={() => setRefresh(true)} />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <ListGames refresh={refresh} setRefresh={setRefresh} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
