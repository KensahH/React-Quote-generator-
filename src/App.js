import React from "react";
import "./style.css";
import {useState, useEffect} from "react";const url ="https://api.quotable.io/random";

export default function App() {
  const [quotes, setQuotes] = useState("");


  const getQuote= async()=>{
    const res = await fetch(url);
    const data =  await res.json();
    setQuotes(data);

  }
  

  
useEffect(()=>{
getQuote();
},[])
  return (
<div>
    <div className="wrapper">
      <h1>Quote  Generator</h1>
      <p>{quotes.content} </p>
      <h4>{quotes.author}</h4>
      </div>
      <button onClick={getQuote} className="btn">get new quote</button>
      </div>
  )
  

}
