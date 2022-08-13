import React, { useState } from "react";

function Town(props) {
  return <li id={props.id}>{props.town.name}</li>;
}

export default Town;
