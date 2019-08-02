import React from "react";
import { Box, Button, Heading } from "grommet";
import { Menu } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
  >
    <Heading level="3" margin="none">
      {props.title}
    </Heading>
    {props.size === "small" && (
      <Button
        icon={<Menu />}
        onClick={() => {
          props.openDrawer(!props.drawer);
        }}
      />
    )}
  </Box>
);
export default AppBar;
