import { useEffect, useState } from 'react'
import IplData from './Component/IplData';
import "./App.css"
const API="https://my-json-server.typicode.com/FreSauce/json-ipl/data"

function App() {
  const [ipl, setipl] = useState([]);
    // defined the function
  const fetchIpl= async(URL)=>{
       try {
           const res=await fetch(URL);
           //convert into json
           const data = await res.json();
           setipl(data);
       } catch (error) {
        console.error(error)
       }
  }
    
   useEffect(()=>{
    fetchIpl(API);}
    ,[]);
  return (
    <>
    <center><h1>IPL Season 2022 Point Table </h1></center>

    <table>
      <thead>
        <tr>
        <th>NO.</th>
        <th>Team</th>
        <th>Match</th>
        <th>Won</th>
        <th>Loss</th>
        <th>Tied</th>
        <th>NRR</th>
        <th>POINTs</th>
        </tr>
      </thead>
      <tbody>
        <IplData ipl={ipl}/>
      </tbody>
    </table>
    </>
  )
}

export default App
