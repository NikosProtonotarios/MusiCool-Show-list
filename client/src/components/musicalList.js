

function MusicalList({musicals, deleteMusical}) {

    return (
        <div>
            <h1 className="musicalTitle">Musicals List</h1>
            <div>
                {musicals.map((musical) => {
                    return (
                        <div key={musical._id} className="musicalText">
                            <div className="musicalTitle">
                                <h4>{musical.name}</h4>
                            </div>
                            <p>{musical.country}</p>
                            <p>{musical.city}</p>
                            <p>{musical.date}</p>
                            <br/>
                            <button onClick={() => deleteMusical(musical._id)}>Delete This Musical From The List</button>
                        </div>        
                    );
                })}
            </div>
        </div>
    )
}

export default MusicalList;