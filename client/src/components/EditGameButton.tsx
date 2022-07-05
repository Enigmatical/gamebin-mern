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
    <button type="button" onClick={() => handleEdit()}>
      <BiEdit />
    </button>
  );
};

export default EditGameButton;
