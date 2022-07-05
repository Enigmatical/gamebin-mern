import { BiEdit } from "react-icons/bi";
import type { Game } from "../types";

const EditGameButton = ({
  id,
  onSuccess,
}: {
  id: string;
  onSuccess: Function;
}) => {
  const handleEdit = async () => {
    const response = await fetch(`http://localhost:5000/games/${id}`);
    const game = (await response.json()) as Game;
    const updatedName = prompt(`Rename "${game.name}"?`);
    if (updatedName) {
      await fetch(`http://localhost:5000/games/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: updatedName }),
      });
      onSuccess();
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleEdit()}
      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    >
      <BiEdit className="text-2xl" />
    </button>
  );
};

export default EditGameButton;
