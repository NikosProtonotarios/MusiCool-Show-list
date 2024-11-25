function MusicalList({ musicals, deleteMusical }) {
  return (
    <div>
      <h1 className="musicalTitle">Musicals List</h1>
      <div className="musicalListContainer">
        {musicals.map((musical) => {
          return (
            <div key={musical._id} className="musicalText">
              <div className="musicalTitle">
                <h4>{musical.name}</h4>
              </div>
              <p className="caligraf">{musical.country}</p>
              <p className="caligraf">{musical.city}</p>
              <p className="caligraf">{musical.date}</p>
              <br />
              <button className="hue deleteM" onClick={() => deleteMusical(musical._id)}>
                Delete This Musical From The List
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MusicalList;
