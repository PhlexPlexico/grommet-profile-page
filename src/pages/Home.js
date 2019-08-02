import IndButton from "../components/IndButton";
import config from "../config/config.json";
import { Box, Grommet, Heading, Image, ResponsiveContext, Text } from "grommet";
import React from "react";
import MainBody from "../components/MainBody";
import Profile from "../img/profile.png";

const Home = () => {
  return (
    <Grommet theme={config.theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <MainBody heading="Home">
            <Box
              flex
              align="center"
              pad="small"
              overflow={{ horizontal: "hidden" }}
            >
              <Image className="profile" src={Profile} />
              <Heading
                level="2"
                pad="small"
                margin="none"
                a11yTitle="My Name!"
              >
                My Name in Home.js!
              </Heading>
              <Heading
                level="4"
                margin="none"
                justify="center"
                a11yTitle="Accessbility Title Here"
              >
                My | About | Short Text
              </Heading>
              {size !== "small" && (
                <Box direction="row" justify="center">
                  {config.pages.map((pageInfo, i) => {
                    return pageInfo[1] === "/" ? (
                      ""
                    ) : (
                      <IndButton
                        key={i}
                        icon={pageInfo[0]}
                        link={pageInfo[1]}
                        title={pageInfo[2]}
                      />
                    );
                  })}
                </Box>
              )}
              <hr />
              <Box
                direction="row"
                justify="center"
                overflow={{ horizontal: "hidden" }}
                animation="fadeIn"
              >
                <Text a11yTitle="small info" textAlign="center">
                  Hi there! Here is a small about that can be found on line 60
                  in Home.js <br />
                  If you'd like to know more about me{" "}
                  {size !== "small"
                    ? "please click the buttons and read on!"
                    : "please click the menu button and read on!"}
                </Text>
              </Box>
            </Box>
          </MainBody>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
export default Home;
