
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import axios from "axios";
import { isAutheticated } from "./Auth/auth";
import { useRouter } from "next/router";
import styles from "./DisplayJobOpenings.module.css";

import { URLS } from "./Auth/const";
import { Button, Link } from "@mui/material";

const { accessToken,comapny_id } = isAutheticated();



export default function DisplayJobOpenings() {
  const router = useRouter();
  const [post, setPost] = useState([]);

  const [data , setData] = useState();

  const [coname,setConame] = useState();

  useEffect(()=>{
  
  axios.get(
    `${URLS}/getProfile`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  ).then((resp)=>{

    setData(resp.data);
    console.log(resp.data);
  })
  
  
  
    
  },[])

  const arr = [];
  data &&
    data.map((e) =>
      arr.push({
        "ID": e.id,
        "EMPLOYEE NAME": e.employeename,
        "PHONE NUMBER": e.phoneno,
        "WEBSITE": e.website,
        "CURRENCY LOCALE": e.currencyLocale,
        STATE: e.states,
        ID: e.id,
      })
    );
  if (!data) return "Loading";

  const columns = [
    { name: "ID", wid: "1200" },
    { name: "EMPLOYEE NAME"},
    { name: "PHONE NUMBER" },
    { name: "WEBSITE" },
    { name: "CURRENCY LOCALE" },
    
    {
      name: "ID",
      options: {
        display: false,
      },
    },
 
  ];  

  return (
    <>
            <head>
                <title>Profile Details</title>
            </head>
      <div className={styles.container}>
      
    
        <div style={{ display: "fixed" }} className={styles.tables}>
      
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"Employee Profile"}
              columns={columns.map((e) => e)}
              data={arr}
             
              // style={{zIndex:'-1',position:'absolute'}}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

