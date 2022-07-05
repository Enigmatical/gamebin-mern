import { MdDeleteForever } from "react-icons/md";

const DeleteGameButton = ({
  id,
  onSuccess,
}: {
  id: string;
  onSuccess: Function;
}) => {
  const handleDelete = async () => {
    await fetch(`http://localhost:5000/games/${id}`, {
      method: "DELETE",
    });
    onSuccess();
  };

  return (
    <button type="button" onClick={() => handleDelete()}>
      <MdDeleteForever />
    </button>
  );
};

export default DeleteGameButton;
