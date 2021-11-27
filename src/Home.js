import React from 'react';
import { useState } from 'react';
import { data } from "./data";
import { Model } from "./Model";


export const Home = () => {
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
    const getData =(img)=>{
        let tempData = [img];
        setTempdata(item => [1, ...tempData]);
        return setModel(true);
    }
    return (
        <>
        <div className="main">
        <p style={{fontSize:"30px",textAlign:"center", marginBottom:"-20px",fontWeight:"bolder"}}>Photo grapher's Showcase</p>
        <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center alighn-item-center">
                    {data.map((item, indx) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" >
                                <div className="card card1" style={{ width: "18rem" }}>
                                    <img src={item.image} className="card-img-top" alt="..."
                                        onClick={() => getData(item.image)} />
                                    <div className="card-body mx-auto">
                                        <p className="card-text">Some quick example text.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
            
            {
                model === true ? <Model img={tempdata[1]} hide={()=> setModel(false)} />: ''
            }
            </div>
            
        
            
            
        </>
    )
}
