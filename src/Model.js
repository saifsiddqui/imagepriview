import React from 'react';
import { GrClose } from "react-icons/gr";

export const Model = ({ img, hide }) => {
    

    return (
        <div className="parent container-fluid" style={{ width: "100%" }}>
            <div className="child">
                <GrClose className="cancle" onClick={hide} style={{position:"absolute", right:"130px", top:"5px",backgroundColor:"red",
                borderRadius:"50%", }} />
                <img src={img} className="image" alt="..." />
            </div>
        </div>
    )
}

