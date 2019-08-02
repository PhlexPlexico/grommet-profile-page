import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, fas);

const FAIcon = props => {
  return (
    <FontAwesomeIcon
      size={"2x"}
      icon={props.icon}
      style={{ color: "#ffffff" }}
    />
  );
};
export default FAIcon;
