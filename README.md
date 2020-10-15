# Rainbow Parrot

Bhavisha, Tatiana, Nimesh, Marika -- Week 4 project

Is a Pixel Art website based on mouse actions. 

* Single Left Click = Green 
* Click & Drag = Purple 
* Right Click = Red
* Double Click (to delete) = White

# Set up

Clone repo to local drive

Install project dependencies
``
npm i
``

Run server
``
npm run dev 
``

Open local host page http://localhost:3000/

# Files we need

Server file with index.js and server.js public file with index.html and main.css
app.jsx index.js

# Initial Basic Steps

Create a component that has one job: return a <div> using JSX.

Place your < Pixel /> component in the render method of < App / so that it'll
make it into the DOM.

Corresponds to the style attribute: height, width, background colour

Add lots of pixels

(call super)

Set the initial value of this.state

change your component JSX to refer to this.state.style

Add in randomHexColor

Add our clickHandlers

Return an array of pixels
