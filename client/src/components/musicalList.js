import React, {useState} from "react";
import axios from "axios";

function MusicalList() {
    const [musicals, setMusicals] = useState([]);

    async function getAllMusicals() {
        try {
            let response = await axios.get('http://localhost:8080/musicals');
            console.log(response.data);
            setMusicals(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 className="musicalTitle">Musicals List</h1>
            <button onClick={getAllMusicals}>Fetch Musicals</button>
            <div>
                {musicals.map((musical) => {
                    return 
                })}
            </div>
        </div>
    )
}

export default MusicalList;