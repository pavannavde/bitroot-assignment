import React from "react";
import './styles.css'

const Card = ({item,handleClick}) => {

  return (
    <div className="card">
      <div className="topDiv">
        <img
          src={item.thumbnail.large}
          alt="Cardimg"
        />
        <div className="hoverDiv">
          <p onClick={()=>handleClick(item)}>Learn More</p>
        </div>
      </div>
      <div className="bottomDiv">
        <div className="colorDiv">
          <div className="blueDiv"></div>
          <div className="yellowDiv"></div>
        </div>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <div className="infoDiv">
          <p>{item.author.name} - {item.author.role}</p>
          <p>Nov 25, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
