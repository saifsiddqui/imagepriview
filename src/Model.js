import React from 'react'

export const Model = ({ img, hide }) => {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
       
    }

    return (
        <div className="modal show fade" style={modelStyle} >
            <div className="modal-dialog " >
                <div className="modal-content"  >
                    <div className="modal-header" >

                        <div className="modal-body">
                            <button type="button" className="btn-close" style={{
                                position: "relative", top: "25px",
                                backgroundColor: "white", borderRadius: "50px", left: "5px"
                            }} onClick={hide} />
                            <img src={img} alt="" className="img-fluid" style={{width:"100%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
