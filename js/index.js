// Your code goes here

/*Task 2: Create Unique Event Listeners
 Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:

 mouseover
 keydown 
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick

 Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

 Nest two similar events somewhere in the site and prevent the event propagation properly
 Stop the navigation items from refreshing the page by using preventDefault()*/

//---------------------------->>mousemove<<------------------------------------------- 01

const colorFul = document.querySelector("header");

colorFul.addEventListener("mousemove", () => {
  colorFul.style.backgroundColor = "yellow";
});

//----------------------------->mouseout 1<<-------------------------------------------- 02
const colorFulTwo = document.querySelector("header");

colorFulTwo.addEventListener("mouseout", () => {
  colorFulTwo.style.backgroundColor = "white";
});

//-------------------------------->> mouseover <------------------------------------------ 03

document.getElementById("busPic").addEventListener("mouseover", function() {
  document.getElementById("busPic").style.width = "50%";
});

//------------>mouseout 2<<--------------------

document.getElementById("busPic").addEventListener("mouseout", function() {
  document.getElementById("busPic").style.width = "100%";
});

//------------------------------------->drag<<--------------------------------------------- 04
const dragItem = document.querySelector("h2");

document.addEventListener("drag", () => {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragItem = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "content-section") {
      event.target.style.background = "pink";
    }
  },
  false
);
document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "content-section") {
      event.target.style.background = "";
    }
  },
  false
);
document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "content-section") {
      event.target.style.background = "";
      dragItem.parentNode.removeChild(dragItem);
      event.target.appendChild(dragItem);
    }
  },
  false
);

//-------------------------------------->> keydown <<<----------------------------------------- 05

const banana = document.querySelector("*");

banana.addEventListener("keypress", event => {
  banana.style.backgroundColor = "red";
});

//--------------------------------------->>dbclick<---------------------------------------------- 06
var variableTwo = document
  .querySelector(".content-section")
  .addEventListener("dblclick", function() {
    document.getElementById("adventurePic").style.width = "50%";
  });

//------------------------------------------>> click <<<------------------------------------------ 07
const changeImg = document.querySelector(".img-fluid-rounded");

changeImg.addEventListener("click", () => {
  changeImg.src = "https://tinypng.com/images/social/website.jpg";
});
