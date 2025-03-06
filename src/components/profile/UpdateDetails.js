import React from "react";

const UpdateDetails = ({ details, updateUserDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(new FormData(e.target));
    document.getElementById("user_details_update").close();
  };
  return (
    <dialog id="user_details_update" className="modal">
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
      <div className="modal-box py-0">
        <div className="flex flex-col items-start justify-center">
          <div className="modal-action w-full">
            <form
              method="dialog"
              className="flex flex-row items-center justify-between w-full"
            >
              <h3 className="font-bold text-lg">Update User Details</h3>
              <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
            </form>
          </div>
          <div className="p-4 w-full">
            {(details && (
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-3"
              >
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Upload Profile Picture</span>
                  </div>
                  <input
                    type="file"
                    name="image"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    defaultValue={details.first_name}
                    placeholder="Enter First Name"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    defaultValue={details.last_name}
                    placeholder="Enter Last Name"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="nummber"
                    min="10"
                    max="100"
                    name="age"
                    defaultValue={details.age}
                    placeholder="Enter Age"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Address</span>
                  </div>
                  <textarea
                    name="address"
                    className="textarea textarea-bordered h-24"
                    placeholder="Address"
                  >
                    {details.address}
                  </textarea>
                </label>
                <div className="modal-action w-full">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Details
                  </button>
                </div>
              </form>
            )) || (
              <span className="loading loading-dots loading-lg bg-primary"></span>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateDetails;
