import axios from "axios";
import React, { useEffect, useState}  from "react";

const Container_page = ({ item, id, isPurchased, fetch_data }) => {
  const[cutLine, setCutLine] = useState(isPurchased)
  


const delete_Data = async (e) => {
  e.preventDefault();
  await axios.delete( `http://localhost:3001/${id}`)
  fetch_data()
}

const update_data = async (e) => {
  e.preventDefault();
  setCutLine(true)
  await axios.put(`http://localhost:3001/${id}`)
  fetch_data()
}
useEffect(() => {
  
}, [ delete_Data,update_data ])


  return (
    <div>
      <div
          className=" shadow  bg-body rounded " 
          style={{ width: "500px" }}
        >
          <div>
            <div className="p-2 mb-2" >
            <h4 className={cutLine  ? "text-decoration-line-through" : "text-decoration-none"  } >
          {item}
          </h4>
            </div>
          
            <i onClick={delete_Data} 
            className="fas fa-trash  position-absolute cursor-pointer " 
              style={{marginLeft: "470px", marginTop: "-46px", fontSize: "23px", cursor: "pointer"}}
              ></i>
          
            <button
                className="btn btn-dark position-absolute  " 
                style={{marginLeft: "350px", marginTop: "-54px", }}
                onClick={update_data}
            >
                Purchased
              </button>
              
          </div>
        </div>
    </div>
  );
};

export default Container_page;






