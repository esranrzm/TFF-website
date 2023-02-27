# TTF NATIONAL TEAM SELECTOR
Project contributors:
 * Esra Nur Özüm
 * Bengisu Özdemir
 * Sarp Bora Polat
 * Mustafa Ata Onbaş

## Server URL
https://tffnationalteamselector-v2.herokuapp.com/

## Project Description
The motivation is to develop a website that ensures TFF chooses players who are at the peak of their performances. The goal is to sort Turkish football players in terms of their specific attributes and rank them with respect to certain parameters that will be included in the total rating. The app plans to solve the difficulties of choosing a suitable football player for the national team. The app will encapsulate the data of Turkish players into a database that we will create and rank them according to their statistics.Sorting Turkish football players in terms of their positions, showing overall ratings of all players, and recommending the best choices for the specific position. The selling points of the web app are to help TFF to create an almost statistically perfect national football team and give a reasoning for what parameters the head coach and their technical staff take into consideration while forming that year’s national football team. The interesting part of this project is keeping track of the players’ performances while observing their pros and cons, sorting, and filtering the players according to dedicated parameters.

## User Documentation

### How to install & run the software
1. Clone the repository from github 
2. To use full functionality checkout to dev branch
3. Open the terminal
  - Type "npm i" from the main directory
  - Type "cd frontend"
    - Type "npm i" again
4. In order to run software you need to go to main directory by typing "cd .."
5. In the main directory type "npm run dev" to start the app

### How to report a bug
To report a bug related to website, click [issues](https://github.com/SU-CS308-22FA/TFF-NationalTeamSelector-Team07/issues) from the github TFF-NationalTeamSelector-Team07 menu dock. 

### Known bugs
1. Navigation between pages is the first and most commmon bug of the app
2. Search bar is not displaying on top of the items.


## Developer Documentation

### How to obtain source code
To obtain source code you need to clone the repo or you can manually download the "dev" branch to access all functionality of the app.

### The layout of the directory structure
The project is composed of two main folders named frontend and backend. 
1. Frontend
  - public: auto created, not much to think of
  - src
    - components: component based structure comes from this folder
    - pages: all pages resides here. Some components based implementation comes from the components folder
    - other folders: related to backend services.
  
2. Backend
  - controllers: put,delete,get,create operations are handled
  - models: identify the table structure of the MongoDB collections individually
  - routes: frontend and backend are connected here
  
### How to build & deploy the software
After the clone operation the project can be built by writing "npm run dev" command into terminal.
At the same time, app is currently build by Heroku live deployment services.
If you don't want to use the app from your local files, you can access the app by [live](https://tffnationalteamselector-v2.herokuapp.com/) deployed version.



