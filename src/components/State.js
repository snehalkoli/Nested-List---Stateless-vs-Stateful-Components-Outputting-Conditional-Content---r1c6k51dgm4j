import React, { useState } from "react";
import Cities from "./Cities";

function State(props) {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <li id={props.id} onClick={clickHandler}>
      {props.state.name}

      {isVisible && (
        <ul>
          {props.state.cities.map((item, index) => {
            return (
              <Town
                id={`city${index + 1}`}
                key={`city${index + 1}`}
                city={item}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default State;
