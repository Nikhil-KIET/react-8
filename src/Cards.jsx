import React from "react"; 
import Card from "./Card";

function Cards({ data }) {
    return (
        <div className="flex flex-col items-center gap-5  ">
           { data.map((item) => (
            
                <Card item={item} />
            
            ))}
        </div>
    );
}

export default Cards;
