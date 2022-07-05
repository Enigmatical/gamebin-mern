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
    <button
      type="button"
      onClick={() => handleDelete()}
      className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    >
      <MdDeleteForever className="text-2xl" />
    </button>
  );
};

export default DeleteGameButton;
