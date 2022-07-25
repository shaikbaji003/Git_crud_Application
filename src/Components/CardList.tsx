import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardData from "./CardData";
import Viewcard from "./Viewcard";
import "./Cardlist.css";

const CardList: React.FunctionComponent<{ search: any }> = ({ search }) => {
  const [data, setData] = useState([]);
  const [filtedData, setFilteredData] = useState([]);
  const [moreDetails, setMoreDeatils] = React.useState(false);
  const[personData,setPersonData]=useState({})
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    setFilteredData(
      data.filter((e: any) => {
        return e.login.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [data, search]);
  const handleDelete = (id: any) => {
    alert("are you sure want to delete");
    setFilteredData(filtedData.filter((e) => e["id"] !== id));
  };
  if (data.length === 0 || Array.isArray(data) === false) {
    return (
      <div className="cardlist">
        <Typography variant="h5">Loading...</Typography>
      </div>
    );
  }
  if (filtedData.length === 0) {
    return (
      <div className="cardlist">
        <Typography variant="h5">No users available</Typography>
      </div>
    );
  }
  return (
    <div className="cardlist">
      { moreDetails===false &&
         filtedData.map((userData: any) => {
          return (
            <CardData
              data={data}
              handleDelete={handleDelete}
              userData={userData}
              
              setMoreDeatils={setMoreDeatils}
              setPersonData={setPersonData}
              
            />
          );
        })}
        {moreDetails && <Viewcard personData={personData} setMoreDeatils={setMoreDeatils}/>}
    </div>
  );
};

export default CardList;
