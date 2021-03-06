import React from "react";
import toast from "react-hot-toast";

const DeleteConfirmModal = ({ refetch, setDocForDelete, docForDelete }) => {
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Doctor deleted successfully");
          refetch();
          setDocForDelete(null);
        }
        console.log(data);
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            You wanna delete DR. {docForDelete.name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              onClick={() => setDocForDelete(null)}
              // for="delete-confirm-modal"
              className="btn"
            >
              Cancel
            </label>
            <button
              onClick={() => handleDelete(docForDelete.email)}
              className="btn  btn-error"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
