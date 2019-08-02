import { Box, Button } from "grommet";
import FAIcon from "./FAIcon";
import React from "react";
import { Link } from "react-router-dom";
const ButtonLinks = props => {
  return (
    <Box direction="row" justify="center">
        <Link to={props.link} className={"faa-parent animated-hover"} title={props.title}>
          <Box direction="row" pad="small" className={"faa-shake"}>
            <Button>
              <FAIcon icon={["fas", props.icon]} />
            </Button>
          </Box>
        </Link>
      
    </Box>
  );
};
export default ButtonLinks;
