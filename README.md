# Grommet Profile Page
React SPA that utilizes the Grommet library to create a responsive profile page.
This project was created using [`create-react-app`](https://github.com/facebook/create-react-app) and [Grommet](https://v2.grommet.io/). It very well could have been made using Gatsby, but I wanted to try something I was vaguley familiar with, since this is my first React project, and a good starter one at that.

## Why?
I needed a new portfolio/about me website since mine was rather dated, and instead of just nabbing yet another bootstrap template, I chose to learn something new and see if anyone else may find it useful!

# Setup
Setup is simple, and you can host it locally by simply running `yarn start` to get it running on a local server. Since this is a static page, you can build it for production by calling `yarn build` and copying everything from the build directory to any other server (Tomcat, Apache, Nginx, etc.)!

## Configuration
In order to make changes to some of the text, appearance, etc. there is a useful `config.js` located in the `config` folder. I only did this because I was sick and tired of copying the same component three times in a page, so I created a list of lists for pages, social buttons, and text. 

### Theme
On the first block you will find the theme. This matches along to Grommet's [themeing](https://v2.grommet.io/theme) which can either be downloaded, or just edited to your hearts content. I just scratched the surface with it, changing accent and brands to better suit me. Read Grommet's [docs](https://v2.grommet.io/color) if you would like to edit more!

### Pages
Instead of copy pasting the same thing, I just mapped out the pages within a list of lists. The format follows the convention of a Solid Style [FontAwesome](https://fontawesome.com) Icon, the route which the page leads to, followed by the text/a11yTitle. If you wish to add pages to your routes, you will also have to go edit the [App.js](https://github.com/phlexplexico/grommet-profile-page/blob/master/src/App.js) to include the route, because I couldn't figure out dynamic imports. After that, the link to the new page will appear in the mobile side menu, or the buttons on desktop view!

### Socials
The Socials portion is the same setup as the routes, `[Icon, Link, Text]` and the icons can be found under the "Brands Style (`fab`)" on FontAwesome if you are having troubles to find what you're looking for.

### About
About is a section that gives an a11yTitle and text to the About Page. Leave all your text you wish to have in a paragraph on a single line, and the About page will grab what's in there, and read from it.

### Projects
Projects was a very quickly thrown together page, which is why it doesn't have the same config options as About. If you wish to keep the same page, please make the required changes in the Modal text to suit your needs, and replace the banner images!

All these pages are simply examples, you can adjust, add and remove as seen fit, but it's a good start to see how exactly the Grommet design framework is used.

# Contributing and Usage
This project is free to use, so go crazy and use it to your hearts content! I do ask though to link back to this repository, or give a star or something, I don't know. Just don't claim it as your own.

## X/Y/Z is Wrong!
It's my first project, so what can you do. If there is anything blaringly obvious that could be improved (such as CSS), please create a PR, or create an issue with possible fixes to the application, it would be appreciated! 

## Where Are The Tests?
Yeah about that, that's something I'm still learning and will eventually ~~maybe~~ get to.