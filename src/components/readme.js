import React, { useRef } from 'react';

const Readme = (props) => {
    return (
        <div>
            <h3>Please read me</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">useState: It is used to store emp data into state</li>
                <li className="list-group-item">useRef: It is used to access input value of a form</li>
                <li className="list-group-item">useEffect: It is used to get total Emp</li>
                <li className="list-group-item">useContext: It is used to set the theme</li>
            </ul>
        </div>
    );
}

export default Readme;