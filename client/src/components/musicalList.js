import React, {useEffect, useState} from "react";
import axios from "axios";

function MusicalList() {
    const [musicals, setMusicals] = useState([]);

    async function getAllMusicals() {
        try {
            let response = await axios.get('http://localhost:8080/musicals');
            console.log(response.data);
            setMusicals(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllMusicals();
    }, []);

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
                        </div>        
                    );
                })}
            </div>
        </div>
    )
}

export default MusicalList;