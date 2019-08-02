import React from "react";
import { Button, Box } from "grommet";
import { Link } from "react-router-dom";

const SidebarButton = ({ label, ...rest }) => {
  return (
    <Button
      a11yTitle={label}
      to={label === "Home" ? "" : label.toLowerCase()}
      plain
      {...rest}
    >
      {({ hover }) => (
        <Link className="text-link" to={label === "Home" ? "" : label.toLowerCase()}>
          <Box
            background={hover ? "accent-1" : undefined}
            pad={{ horizontal: "large", vertical: "medium" }}
          >
            {label}
          </Box>
        </Link>
      )}
    </Button>
  );
};
export default SidebarButton;
