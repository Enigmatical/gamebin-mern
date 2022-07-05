import type { Game } from "../types";
import useListGames from "../hooks/useListGames";
import EditGameButton from "./EditGameButton";
import DeleteGameButton from "./DeleteGameButton";
import React from "react";

const ListGames = ({
  refresh,
  setRefresh,
}: {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const games: Game[] = useListGames(refresh, setRefresh);

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Name
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {games.map((game) => {
          return (
            <tr key={game._id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {game.name}
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  <EditGameButton
                    id={game._id}
                    onSuccess={() => setRefresh(true)}
                  />
                  <DeleteGameButton
                    id={game._id}
                    onSuccess={() => setRefresh(true)}
                  />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListGames;
