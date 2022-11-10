import React, { useState } from "react";

import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDecriprionHandler = () => {
    // description = "New coast"
    setDescription("New cost"); // description = "New coast"; & CostItem(props )
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price ">${props.amount}</div>
      </div>
      <button onClick={changeDecriprionHandler}>Изменить описание</button>
    </Card>
  );
};

export default CostItem;
