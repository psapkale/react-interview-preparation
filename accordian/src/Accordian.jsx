import React from "react";

export default function Accordian({ title, content, isOpen, handleClick }) {
   return (
      <div
         style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            borderBottom: "1px solid black",
            justifyContent: "space-between",
            padding: "20px 0",
         }}
      >
         <div
            style={{
               width: "98vw",
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <h1>{title}</h1>
            <button
               onClick={handleClick}
               style={{
                  width: "100px",
                  border: "0.6px solid black",
                  borderRadius: "10px",
                  backgroundColor: "transparent",
                  height: "40px",
                  cursor: "pointer",
               }}
            >
               {isOpen ? "-" : "+"}
            </button>
         </div>
         <div style={{ display: isOpen ? "inline" : "none" }}>{content}</div>
      </div>
   );
}
