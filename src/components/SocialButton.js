import { Anchor, Box, Button } from "grommet";
import FAIcon from "./FAIcon";
import React from "react";
const SocialButton = props => {
  return (
    <Box direction="row" justify="center">
        <Anchor target="_blank" href={props.link} className={"faa-parent animated-hover"} title={props.title}>
          <Box direction="row" pad="small" className={"faa-shake"}>
            <Button>
              <FAIcon icon={["fab", props.icon]} />
            </Button>
          </Box>
        </Anchor>
      
    </Box>
  );
};
export default SocialButton;
