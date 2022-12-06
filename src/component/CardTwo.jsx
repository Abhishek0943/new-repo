import React from 'react'
import './cardtwo.css'
function CardTwo() {
    const cardcon = {
        width: "150px",
        height: "150px",
        backgroundColor: "white"
    }
    return (
        <>
            <div style={{
                display: "flex",
                width: "auto",
                                
            }}>
                <div style={cardcon}>
                    <h1>1</h1>
                    <span>NIRF'22</span>
                </div>
                <div>
                    <div>
                        <h6>IIM Bangalore - India Institute of Management</h6>
                        <p>Fees:₹24.50 Lack</p>
                        <p>Salary:₹25.00 Lack</p>
                    </div>
                    <div>

                    </div>
                    <div>Admition courses plasements</div>
                </div>
            </div>
            <div>
                <button>compare</button>
                <button>brochure</button>
            </div>
        </>
    )
}

export default CardTwo
