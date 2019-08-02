import BannerOne from "../img/project-banner-1.jpg";
import BannerTwo from "../img/project-banner-2.jpg";
import BannerThree from "../img/project-banner-3.jpg";
import config from "../config/config.json";
import {
  Box,
  Grid,
  Grommet,
  Heading,
  Paragraph,
  ResponsiveContext,
  Text
} from "grommet";
import IndButton from "../components/IndButton";
import MainBody from "../components/MainBody";
import Modal from "../components/Modal";
import React from "react";


const Projects = () => {
  return (
    <Grommet theme={config.theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <MainBody heading="Projects">
            <Box align="center" pad="small">
              <Box direction="row" justify="center">
                <Heading level="2" margin="none" a11yTitle="Projects">
                  Projects
                </Heading>
              </Box>
              {/* Individual buttons based on size. Rendered from the config that will allow multiple pages without having to redefine and add to ButtonLinks. */}
              {size !== "small" && (
                <Box direction="row" justify="center">
                  {config.pages.map((pageInfo, i) => {
                    return pageInfo[1] === "/projects" ? (
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
              <Box animation="fadeIn" direction="row" margin="small">
                <Text
                  a11yTitle="What I do in my spare time."
                  textAlign="center"
                >
                  Here's some examples of what I do in my spare time.
                </Text>
              </Box>
              <Box flex>
                <Grid
                  columns={{
                    count: size !== "small" ? 3 : 1,
                    size: "auto"
                  }}
                  gap="small"
                >
                  <Modal
                    curSize={size}
                    imageURL={BannerOne}
                    imageDefinition="Img Def For First Guy"
                    shortText="First Project"
                    modalHeading="First React Project"
                    modalText={
                      <Paragraph>
                        Here's an example of a cool project I made!
                      </Paragraph>
                    }
                    projectURL="https://github.com/phlexplexico/grommet-profile-page"
                  />
                  <Modal
                    curSize={size}
                    imageURL={BannerTwo}
                    imageDefinition="Img def For Second Banner"
                    shortText="Second Proj."
                    modalHeading="My Second Project!"
                    modalText={
                      <Paragraph>
                       Wow I was so creative with these.
                      </Paragraph>
                    }
                    projectURL="https://www.pexels.com/photo/black-and-white-ceramic-mug-1813466/"
                  />
                  <Modal
                    curSize={size}
                    imageURL={BannerThree}
                    imageDefinition="Img Def For Third Banner"
                    shortText="Third!"
                    modalHeading="Thid Project?!"
                    modalText={
                      <Paragraph>
                        Obviously I don't have enough projects.
                      </Paragraph>
                    }
                    projectURL="https://phlexplexi.co"
                  />
                </Grid>
              </Box>
            </Box>
          </MainBody>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
export default Projects;
