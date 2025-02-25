const TrainList = ({ trains, handleSubmit }) => {
  return (
    <>
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
    </>
  );
};

export default TrainList;
