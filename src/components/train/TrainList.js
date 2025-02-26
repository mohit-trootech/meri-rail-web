import { useContext } from "react";
import { UtilsContext } from "../../context/Context";
const TrainList = ({ trains, handleSubmit, fetchTrains }) => {
  const { previous, next } = useContext(UtilsContext);
  const handleClick = (e) => {
    e.preventDefault();
    fetchTrains(new URL(e.target.dataset.page).search);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <table className="table table-zebra border border-gray-500 rounded shadow-xl">
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trains &&
              trains.map((train) => (
                <tr key={train.number}>
                  <td>{train.number}</td>
                  <td>{train.name}</td>
                  <td>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="number" value={train.number} />
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
              onClick={previous && handleClick}
              data-page={previous}
              disabled={!previous}
              className="join-item btn btn-outline btn-primary"
            >
              Previous
            </button>
            <button
              onClick={next && handleClick}
              disabled={!next}
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

export default TrainList;
