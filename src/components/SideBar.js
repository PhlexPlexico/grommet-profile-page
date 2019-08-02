import React from "react";
import { Box } from "grommet";
import SidebarButton from './SidebarButton';
const SideBar = (props) => {
  
  return (
    <Box fill>
      <Box fill direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex width="medium" background="dark-2" elevation="small">
          <Box fill direction="column" >
            {props.cols.map(label => (
                    
                      <SidebarButton key={label}
                        label={label}
                        active={label === props.active}
                        a11yTitle={label}
                        onClick={() => {props.setActive(label); props.openDrawer(false);}}
                        
                      />
                    ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
