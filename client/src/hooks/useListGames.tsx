import { useState, useEffect } from "react";
import type { Game } from "../types";

const useListGames = () => {
  const [refresh, setRefresh] = useState<boolean>(true);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:5000/games");
      const games = (await response.json()) as Game[];
      setGames(games);
      setRefresh(false);
    };

    if (refresh) {
      fetchGames();
    }
  }, [refresh]);

  return { games, setRefresh };
};

export default useListGames;
