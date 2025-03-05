const PassengerDrawer = ({ id, passDrawer, updatePassDrawer }) => {
  return (
    <>
      <div className="drawer static z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-sm btn-secondary drawer-button"
            onClick={() => updatePassDrawer(id)}
          >
            Details
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="p-4 w-96 min-h-full bg-base-300 text-base-content overflow-auto">
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-bold">Passenger Details</h1>
                <label
                  htmlFor="my-drawer"
                  className="btn btn-sm btn-circle bg-gray-400 hover:bg-gray-400 text-black transition duration-500 ease-in-out hover:rotate-180 absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
              {(passDrawer && (
                <table className="table table-zebra w-full overflow-auto">
                  <tbody>
                    <tr>
                      <th>Quota</th>
                      <td>{passDrawer.quota}</td>
                    </tr>
                    <tr>
                      <th>Nationality</th>
                      <td>{passDrawer.nationality}</td>
                    </tr>
                    <tr>
                      <th>Waitlist Type</th>
                      <td>{passDrawer.waitlist_type}</td>
                    </tr>
                    <tr>
                      <th>Booking Status</th>
                      <td>{passDrawer.booking_status}</td>
                    </tr>
                    <tr>
                      <th>Booking Coach</th>
                      <td>{passDrawer.booking_coach}</td>
                    </tr>
                    <tr>
                      <th>Booking Berth</th>
                      <td>{passDrawer.booking_berth}</td>
                    </tr>
                    <tr>
                      <th>Booking Details</th>
                      <td>{passDrawer.booking_details}</td>
                    </tr>
                    <tr>
                      <th>Current Status</th>
                      <td>{passDrawer.current_status}</td>
                    </tr>
                    <tr>
                      <th>Current Coach</th>
                      <td>{passDrawer.current_coach}</td>
                    </tr>
                    <tr>
                      <th>Current Berth</th>
                      <td>{passDrawer.current_berth}</td>
                    </tr>
                    <tr>
                      <th>Current Details</th>
                      <td>{passDrawer.current_details}</td>
                    </tr>
                  </tbody>
                </table>
              )) ||
                "No Details Available"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerDrawer;
