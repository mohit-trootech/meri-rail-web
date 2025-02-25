import { useContext } from "react";
import { UtilsContext } from "../../context/Context";
const StationList = ({ stations, handleSubmit }) => {
  const { previous, next } = useContext(UtilsContext);
  console.log(previous, next);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <table className="table table-zebra shadow-xl">
          <thead>
            <tr>
              <th>Station Name</th>
              <th>Station Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stations &&
              stations.map((station) => (
                <tr key={station.code} className="hover">
                  <td>
                    {station.name} | {station.name_hi}
                  </td>
                  <td>{station.code}</td>
                  <td>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="code" value={station.code} />
                      <button type="submit" className="btn btn-xs btn-primary">
                        View Details
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="join flex flex-row items-center justify-end">
          <div className="join grid grid-cols-2">
            <button
              onClick={handleClick}
              data-page={previous}
              className="join-item btn btn-outline btn-primary"
            >
              Previous page
            </button>
            <button
              onClick={handleClick}
              data-page={next}
              className="join-item btn btn-outline btn-info"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StationList;
