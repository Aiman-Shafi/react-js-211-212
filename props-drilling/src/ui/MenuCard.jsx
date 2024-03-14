import React from "react";
import "../App.css";

export default function MenuCard({ data }) {
  return (
    <div className="menu">
      <h2>Item Name: {data.name}</h2>
      <h3>Item Price: {data.price}</h3>
      <p>Item No: {data.id} </p>
    </div>
  );
}
