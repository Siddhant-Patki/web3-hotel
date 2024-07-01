import React, { useState } from 'react'
import { useState } from 'react';

function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(false);
    const loadCars = () => {
        getAllRooms().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setRooms(data.cars);
            }
        });
    };
    return (
        <div>

        </div>
    )
}

export default Rooms
