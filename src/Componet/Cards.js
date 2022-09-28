import React, {useState} from "react";
import CardText from "./CardText";

const Cards = () => {
  
  const [rowCard1,setRowCard1]=useState([{no:1},{no:2}]);
  const [rowCard2,setRowCard2]=useState([{no:3},{no:4}]);
  const [rowCard3,setRowCard3]=useState([{no:5},{no:6}]);
  const [rowCard4,setRowCard4]=useState([{no:7},{no:8}]);

  const handleDelete = (step, num) => {
    if(step === 1)
    {
      console.log("step2...");

      const filteredPeople = rowCard1.filter((item) => item.no !== num);
      setRowCard1(filteredPeople);

      // let tempObj=[...rowCard2,{no:num}];
      // setRowCard2(tempObj);      
    }
    if(step === 2)
    {
      console.log("step2...");

      const filteredPeople = rowCard2.filter((item) => item.no !== num);
      setRowCard2(filteredPeople);

      // let tempObj=[...rowCard2,{no:num}];
      // setRowCard2(tempObj);      
    }
    if(step === 3)
    {
      console.log("step2...");

      const filteredPeople = rowCard3.filter((item) => item.no !== num);
      setRowCard3(filteredPeople);

      // let tempObj=[...rowCard2,{no:num}];
      // setRowCard2(tempObj);      
    }
    if(step === 4)
    {
   

      const filteredPeople = rowCard4.filter((item) => item.no !== num);
      setRowCard4(filteredPeople);

      // let tempObj=[...rowCard2,{no:num}];
      // setRowCard2(tempObj);      
    }
  }


  const onLeftSwap=(step,num)=>{  
    if(step == 1)
    {
        // do nothing
    }
    if(step === 2)
    {
      console.log("step2...");

      const filteredPeople = rowCard2.filter((item) => item.no !== num);
      setRowCard2(filteredPeople);

      let tempObj=[...rowCard1,{no:num}];
      setRowCard1(tempObj);      
    }
    if(step === 3) 
    {
      console.log("step2...");

      const filteredPeople = rowCard3.filter((item) => item.no !== num);
      setRowCard3(filteredPeople);

      let tempObj=[...rowCard2,{no:num}];
      setRowCard2(tempObj);
    }
    if(step === 4) 
  {
    const filteredPeople = rowCard4.filter((item) => item.no !== num);
      setRowCard4(filteredPeople);

      let tempObj=[...rowCard3,{no:num}];
      setRowCard3(tempObj);
  }
  };
  

  const onRightSwap=(step,num)=>{  
    if(step == 1)
    {
      console.log("step2...");

      const filteredPeople = rowCard1.filter((item) => item.no !== num);
      setRowCard1(filteredPeople);

      let tempObj=[...rowCard2,{no:num}];
      setRowCard2(tempObj); 
    }
    if(step === 2)
    {
      console.log("step2...");

      const filteredPeople = rowCard2.filter((item) => item.no !== num);
      setRowCard2(filteredPeople);

      let tempObj=[...rowCard3,{no:num}];
      setRowCard3(tempObj);   
    }
    if(step === 3)
    {
      console.log("step2...");

      const filteredPeople = rowCard3.filter((item) => item.no !== num);
      setRowCard3(filteredPeople);

      let tempObj=[...rowCard4,{no:num}];
      setRowCard4(tempObj);   
    }
    if(step === 4)
    {

      // do nothing

      // console.log("step2...");

      // const filteredPeople = rowCard2.filter((item) => item.no !== num);
      // setRowCard2(filteredPeople);

      // let tempObj=[...rowCard3,{no:num}];
      // setRowCard3(tempObj);   
    }
  };

  return (<>
  <div className="container">
  <div className="row">
    <div className="col-md-3">
    <div
              className="p-4"
              style={{ backgroundColor: "#dde7f2", width: "95%", height:"73.5vh" }}
            >
              {" "}
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius:'7px' }}>Step 1</h1>
              {
                rowCard1.map((obj)=>(
                  <CardText step={1} num={obj.no} handleDelete={handleDelete}  onLeftSwap={onLeftSwap} onRightSwap={onRightSwap} />
                ))
              }
              </div>   
    </div>
    <div className="col-md-3">
    <div
              className="p-4"
              style={{ backgroundColor: "#dde7f2", width: "95%", height:"73.5vh" }}
            >
              {" "}
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius:'7px' }}>Step 2</h1>
              {
                rowCard2.map((obj)=>(
                  <CardText step={2} num={obj.no} onRightSwap={onRightSwap} handleDelete={handleDelete}  onLeftSwap={onLeftSwap}/>
                ))
              }
             
              </div>
    </div>
    <div className="col-md-3">
    <div
              className="p-4"
              style={{ backgroundColor: "#dde7f2", width: "95%", height:"73.5vh" }}
            >
              {" "}
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius:'7px' }}>Step 3</h1>
              {
                rowCard3.map((obj)=>(
                  <CardText step={3} num={obj.no} handleDelete={handleDelete} onRightSwap={onRightSwap} onLeftSwap={onLeftSwap}/>
                ))
              }
              </div>
    </div>
    <div className="col-md-3">
    <div
              className="p-4"
              style={{ backgroundColor: "#dde7f2", width: "95%", height:"73.5vh" }}
            >
              {" "}
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius:'7px' }}>Step 4</h1>
              {
                rowCard4.map((obj)=>(
                  <CardText step={4} num={obj.no} handleDelete={handleDelete} onRightSwap={onRightSwap} onLeftSwap={onLeftSwap}/>
                ))
              }
              </div>
    </div>
  </div>

              
  </div>
              
</>  );
};

export default Cards;

