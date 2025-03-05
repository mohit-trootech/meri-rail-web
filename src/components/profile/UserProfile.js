import UpdateDetails from "./UpdateDetails";
const UserProfile = ({ details, updateUserDetails }) => {
  console.log(details);

  return (
    <section class="p-4 flex flex-col gap-y-14">
      <div class="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold text-xl uppercase">User Details</h1>
        <div
          className="tooltip tooltip-left"
          data-tip="Click to Update Details"
        >
          <button
            className={"btn btn-sm btn-info"}
            onClick={() =>
              document.getElementById("user_details_update").showModal()
            }
          >
            Update Details
          </button>
          <UpdateDetails
            details={details}
            updateUserDetails={updateUserDetails}
          />
        </div>
      </div>
      <div class="card bg-base-300 shadow-lg w-full rounded-lg hover:shadow-xl transition duration-500 ease-in-out p-2 gap-2 container w-1/2 mx-auto">
        <div className="flex flex-row justify-center items-center w-full">
          <div className="avatar">
            <div className="w-24  rounded-full">
              <img src={details.image} alt="profile" />
            </div>
          </div>
        </div>
        <table className="table table-zebra">
          <tbody>
            <tr>
              <th colSpan={2} className="text-center text-xl">
                User Details
              </th>
            </tr>
            <tr>
              <th>First Name</th>
              <td>{details.first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{details.last_name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{details.age}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{details.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserProfile;
