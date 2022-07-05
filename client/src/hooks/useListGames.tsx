import React, { useState, useEffect } from "react";
import type { Game } from "../types";

const useListGames = (
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
  }, [refresh, setRefresh]);

  return games;
};

export default useListGames;
