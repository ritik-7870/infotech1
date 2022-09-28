import React from 'react'
import delete1 from "./Image/delete.png";
import left from "./Image/left-arrow.png";
import right from "./Image/right-arrow.png";

const CardText = ({step,num,onLeftSwap,onRightSwap,handleDelete}) => {

  return (
    <>
    
              <div className="bg-white my-4" style={{ padding: "0.5rem" }}>
                <div className="d-flex ">
                  <p className="me-auto">{num}</p>
                  <p
                    style={{
                      color: "red",
                      letterSpacing: "1px",
                      fontFamily: "serif",
                    }}
                    role="button"
                    onClick={()=> {handleDelete(step,num)}} 
                  >
                    {" "}
                    <img  style={{ height: "16px" }} src={delete1} alt="" />{" "}
                    Delete
                  </p>
                  
                </div>
                <div className="mt-5 d-flex justify-content-between">
                    <img role="button"  style={{height:'23px',width:'23px', borderRadius:'50px', border:'0.1px solid #a29a9a', padding:'4px'}} src={left} onClick={()=> {onLeftSwap(step,num)}} alt="" />
                    <img role="button" style={{height:'23px',width:'23px', borderRadius:'50px', border:'0.1px solid #a29a9a', padding:'4px', transform:'rotate(180deg)'}} src={left}
                    onClick={()=>{ onRightSwap(step,num) }}
                    alt="" />
                  </div>
              </div>
            
    </>
  )
}

export default CardText