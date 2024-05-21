<div align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Poetsen+One&size=25&duration=5000&pause=1000&color=F5EBF0FF&background=00000000&center=true&vCenter=true&random=false&width=438&height=51&lines=THE+PRICE+IS+RIGHT" alt="Typing SVG">
</div> 

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=sopra-fs24-group-18_client&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=sopra-fs24-group-18_client)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=sopra-fs24-group-18_client&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=sopra-fs24-group-18_client)

## Introduction 🗒️
Welcome to our Price Guessing Game💰, an engaging and interactive experience where players put their pricing prowess to the test! In this game, participants need to guess the price of various items based on the displayed pictures within a set time limit, whoever gets the closest guess wins. Whether you're a solo player or enjoying the game with friends, our two primary play modes - Guessing and Budget - offer diverse challenges for all.

Our game also contains exciting tools designed to enhance the entertainment value and competitiveness. Drawing inspiration from real item images and prices sourced from eBay, our aim is not only to provide entertainment but also to offer players valuable insights into market trends 📈.

Join us in this thrilling adventure where fun meets learning! 🎉

## Contents 📂
- [Technologies](#technologies)
- [High-level Components](#high-levelcomponents)
- [Launch & Deployment](#launchanddeployment)
- [Roadmap](#roadmap)
- [Authors and Acknowledgment](#authorsandacknowledgment)
- [License](#license)

## Technologies 🔗
<a name="technologies"></a>
- [Node.js](https://nodejs.org/docs/latest/api/) - JavaScript runtime environment.
- [React](https://react.dev) - JavaScript library for building user interfaces.
- [npm](https://www.npmjs.com) - Package manger for the JavaScript programming language.
- [RESTful Web Service](https://spring.io/guides/gs/rest-service) - Principles for seamless communication between client and server components.
- [Ebay Developers Program](https://developer.ebay.com/) - The external API which enriches our application with real-time market data.
- [Github Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) - Project management, facilitating task tracking and team coordination.
- [Google Cloud](https://cloud.google.com/) - Deployment platform.
- [SonarCloud](https://sonarcloud.io/) - Ensuring the quality of our code and the coverage of tests.

## High-level components 📌
<a name="high-levelcomponents"></a>
### 1. Lobby
- [Instruction](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Instruction.tsx)
By pressing on the Instruction button, the user can come to the Instruction page, which would introduce the game.
- [Profile](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Profile.tsx)
The user can view the profile, which shows the user information. He/she can also edit the profile.
- [Create Room](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Roomcreation.tsx)
The user can create a game room by setting the player amount, game mode and room name. The amount of players can be 1/2/3. There are two game modes to choose from --- guessing and budget.
- [Join Room](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Lobby.tsx)
The user can join an existed room by entering the game code from the owner of the room, as long as the room is not full.

### 2. Game Room

- [Prepare](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Prepare.tsx)
Before the start of the first round, the player would enter the prepare page first, after all players enter, the first round would start automatically. In this page the player can see the player lists in this room and Game Code, which he/she can share with others. There is an exit button throughout the game, and the player can exit the game at any time.
- [Guessing Game Room](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Gameroom.tsx)
In Guessing game mode, the players would be given one single image of the item, and they can use the slider bar under it to choose a price. Then the player can press on the confirm button to submit the answer. Each round is 30 seconds, answers would be submitted automatically when time goes out. At the bottom of the page players can see the tools that have been used for this round.
- [Budget Game Room](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/GameroomBudget.tsx)
In Budget game mode, the players would be given six images of the item and a budget number, and they can press on the images to choose the group of items that matches the budget. Then the player can press on the confirm button to submit the answer. Each round is 30 seconds, answers would be submitted automatically when time goes out. At the bottom of the page players can see the tools that have been used for this round.
- [Answer loading page](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/WaitingAnswer.tsx)
After submitting the answer, the player would come to answer loading page. After all players have submitted their answers, the points for this round would be calculated and appear in this page. The player will also see the right answer of this round.
- [Game Shop page](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Shop.tsx)
After answer loading page. The player will come to the shop page. Here they can see 5 different tools and they usage. They can buy the tools with their points, and the tools will be used automatically to the next round after they buy them. The tools will exist within only one round.
To be details, the tools are as follows:
  - Hints: the player can get some hints in the next round.
  - Blur: other players' images of items would be blurred in the next round.
  - Defense: if other players bought blur, using this tool can prevent them from blurring your images of items.
  - Bonus: the player can use this tool to earn an extra 60 points by winning 1st prize in the next round.
  - Gamble: You can use this tool to gamble. If you win 1st prize next round, your points double; if not, you will get 0.
- [Game Rank page](https://github.com/sopra-fs24-group-18/sopra-fs24-group-18-client/blob/main/src/components/views/Rank.tsx)
After 3 rounds, the player come to the rank page. Here they can see the rank of game.

## Launch & Deployment :technologist:
<a name="launchanddeployment"></a>
### 1. Prerequisites and Installation
For your local development environment, you will need Node.js.\
We urge you to install the exact version **v20.11.0** which comes with the npm package manager. You can download it [here](https://nodejs.org/download/release/v20.11.0/).\
If you are confused about which download to choose, feel free to use these direct links:

- **MacOS:** [node-v20.11.0.pkg](https://nodejs.org/download/release/v20.11.0/node-v20.11.0.pkg)
- **Windows 32-bit:** [node-v20.11.0-x86.msi](https://nodejs.org/download/release/v20.11.0/node-v20.11.0-x86.msi)
- **Windows 64-bit:** [node-v20.11.0-x64.msi](https://nodejs.org/download/release/v20.11.0/node-v20.11.0-x64.msi)
- **Linux:** [node-v20.11.0.tar.xz](https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz) (use this [installation guide](https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-linux) if you are new to Linux)

If you happen to have a package manager the following commands can be used:

- **Homebrew:** `brew install node@20.11.0`
- **Chocolatey:** `choco install nodejs-lts --version=20.11.0`

After the installation, update the npm package manager to **10.4.0** by running ```npm install -g npm@10.4.0```\
You can ensure the correct version of node and npm by running ```node -v``` and ```npm --version```, which should give you **v20.11.0** and **10.4.0** respectively.\
Before you start your application for the first time, run this command to install all other dependencies, including React:

```npm install```

Next, you can start the app with:

```npm run dev```

Now you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Notice that the page will reload if you make any edits. You will also see any lint errors in the console (use a Chrome-based browser).\
The client will send HTTP requests to the server which can be found [here](https://github.com/HASEL-UZH/sopra-fs24-template-server).\
In order for these requests to work, you need to install and start the server as well.

### 2. Testing
Testing is optional, and you can run the tests with `npm run test`\
This launches the test runner in an interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> For macOS user running into a 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

### 3. Build
Finally, `npm run build` builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance:\
The build is minified, and the filenames include hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 4. Deployment on Google Cloud
The application is hosted on [The Price Is Right](https://sopra-fs24-group-18-client.oa.r.appspot.com/)

The Google Cloud Projects are as following:

[Server Project](https://console.cloud.google.com/appengine/services?serviceId=default&project=sopra-fs24-group-18-server)
[Client Project](https://console.cloud.google.com/appengine/services?serviceId=default&project=sopra-fs24-group-18-client)

To join the projects, please contact lu.li@uzh.ch.

## Roadmap :bulb:
<a name="roadmap"></a>
### 1. Expand User Tools :placard:
Our current set of user tools is limited, but there's significant potential for enhancement. For instance, tools to extend the guessing time, or tools allow collaboration among players.

### 2. More Game Modes :roller_coaster:
While our project currently offers two game modes, there's room for expansion to enrich the gaming experience. For example, modes that allow players to choose specific item categories for guessing, or modes that contain more competitive challenges.

### 3. Enhance Features :star2:
Although our project primarily focuses on the core gameplay experience, there's potential to incorporate additional features to further elevate user engagement. Such as background music (BGM) to enhance the atmosphere, customizable game room backgrounds to personalize the experience, and built-in communication tools to facilitate interaction among players during gameplay sessions.


## Authors and acknowledgment 💪
<a name="authorsandacknowledgment"></a>
### Contributors

- **Bingjie Xue** - [Github](https://github.com/binxxxxx)   && [Github](https://github.com/Xuexue1111)
- **Yanyang Gong** - [Github](https://github.com/YanYang-G0001)
- **Yunfan Zhou** - [Github](https://github.com/saluttolove)
- **Lu Li** - [Github](https://github.com/luliuzh)
- **Zien Zeng** - [Github](https://github.com/Unusz)

### Supervision

- **Nils Grob** - [Github](https://github.com/homo-iocus)

## License
<a name="license"></a>
[MIT License](LICENSE)

❗
The developers should also pay attention to the [API License Agreement of Ebay](https://developer.ebay.com/join/api-license-agreement) .
