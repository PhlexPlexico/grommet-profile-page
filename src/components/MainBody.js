import AppBar from "../components/AppBar";
import config from "../config/config.json";
//import FAIcon from './components/FAIcon';
import { Box, Collapsible, Grommet, ResponsiveContext } from "grommet";
import React, { useState } from "react";
import SideBar from "../components/SideBar";

const MainBody = props => {
  const [drawer, openDrawer] = useState(false);
  const [active, setActive] = useState(props.heading);

  return (
    <Grommet theme={config.theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar
              drawer={drawer}
              openDrawer={openDrawer}
              title={props.heading}
              size={size}
            />
            <Box
              direction="row"
              background="dark-1"
              flex
              overflow={{ horizontal: "hidden" }}
            >
              {size === "small" && (
                <Collapsible direction="horizontal" open={drawer}>
                  <SideBar
                    cols={config.pages.map(pageInfo => {return pageInfo[2]})}
                    links={config.pages.map(pageInfo => {return pageInfo[1]})}
                    openDrawer={openDrawer}
                    active={active}
                    setActive={setActive}
                    
                  />
                </Collapsible>
              )}
              <Box
                flex
                align="center"
                pad="small"
                overflow={{ horizontal: "hidden" }}
                {...props}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
export default MainBody;
