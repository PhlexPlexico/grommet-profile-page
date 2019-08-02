import { Box, Button, Heading, Image, Layer, Stack, Text } from "grommet";
import { FormClose, Share } from "grommet-icons";
import React, { useState } from "react";
import { Fade } from "react-reveal";

const Modal = props => {
  const [show, setShow] = useState();

  return (
    <Fade>
      <Box className="fadeContainer" overflow={{ horizontal: "hidden", vertical: "hidden" }}>
        <Stack fill anchor="center">
          <Image
            onClick={() => setShow(true)}
            src={props.imageURL}
            a11yTitle={props.imageDefinition}
            className="modalImage"
          />
          <Box
            onClick={() => setShow(true)}
            direction="row"
            className="modalFadeIn"
          >
            <Text>{props.shortText}</Text>
          </Box>
          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
              responsive={true}
              full="horizontal"
              
            >
              <Box
                as="header"
                justify="end"
                fill
                align="start"
                direction="row"
                style={{paddingBottom: props.curSize !== 'small' ? "50px" : "0px"}}
                background={{
                  image: "url(" + props.imageURL + "), linear-gradient(#333333, #999999);",
                  color: "dark-1",
                  position: "top"
                }}
              >
                <Button icon={<FormClose />} onClick={() => setShow(false)} />
                
              </Box>
              <Box fill background="dark-1" align="center" justify="center" overflow={{vertical: "scroll"}} className="hiddenScroll">
              <Heading color="light-1" level="2" textAlign="center" className="modalHeading" a11yTitle={props.modalHeading}>
                  {props.modalHeading}
                </Heading>
                <hr className="hrModal"/>
                {props.modalText}
                <Button color="accent-3" href={props.projectURL} target="_blank" icon={<Share />} label="View" primary margin={{"vertical": "small"}}/>
              </Box>
            </Layer>
          )}
        </Stack>
      </Box>
    </Fade>
  );
};
export default Modal;
