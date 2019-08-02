import config from "../config/config.json";
import { Fade } from "react-reveal";
import {
  Box,
  Grommet,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext
} from "grommet";
import IndButton from "../components/IndButton";
import React from "react";
import MainBody from "../components/MainBody";
import Profile from '../img/profile.png';
import SocialButton from "../components/SocialButton";

const About = () => {
  return (
    <Grommet theme={config.theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <MainBody heading="About">
            <Box
              fill
              flex
              align="center"
              pad="small"
              overflow={{ horizontal: "hidden" }}
              className="hiddenScroll"
            >
              <Image className="profile" src={Profile} />
              <Heading level="2" pad="small" margin="none" a11yTitle="About Me">
                About Me
              </Heading>
              <Heading
                level="4"
                margin="none"
                justify="center"
                a11yTitle="Read on to Find Out What I'm About!"
              >
                Read on to Find Out What I'm About!
              </Heading>
              {size !== "small" && (
                <Box direction="row" justify="center">
                  {config.pages.map((pageInfo, i) => {
                    return pageInfo[1] === "/about" ? (
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
              <Box flex align="center" pad="small">
                <Fade left cascade big fraction={0.3}>
                  <Heading level="2">Who I am</Heading>
                  {config.about.map((pageInfo, i) => {
                    return (
                      <Paragraph
                        a11yTitle={pageInfo[0]}
                        textAlign="center"
                        key={i}
                      >
                        {pageInfo[1]}
                      </Paragraph>
                    );
                  })}
                  <Heading level="2">Around The Web</Heading>
                  <Paragraph
                    a11yTitle="fifth about me paragraph"
                    textAlign="center"
                  >
                    I can be found in different places around the web!
                  </Paragraph>
                  <Box direction="row" justify="center">
                    {config.socials.map((pageInfo, i) => {
                      return (
                        <SocialButton
                          key={i}
                          icon={pageInfo[0]}
                          link={pageInfo[1]}
                          title={pageInfo[2]}
                        />
                      );
                    })}
                  </Box>
                </Fade>
              </Box>
            </Box>
          </MainBody>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
export default About;
