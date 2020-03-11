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

// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + "!!!!");
//     console.log(event.target)
//     console.log(event.currentTarget);

//     //you can grab any element in the DOM

// }

// homeLink.addEventListener("click", event => {
//     event.stopPropagation();
// console.log("SABOTAGING PROPAGATION")
// })

// document.querySelector("nav").addEventListener("click", clickEventHandler)

// document.querySelector(".main-navigation").addEventListener("click",clickEventHandler, {capture: true})

// document.body.addEventListener("click", clickEventHandler)

// document.addEventListener("click", clickEventHandler)

//----------------->> mouseover <--------------------

document.getElementById("busPic").addEventListener("mouseover", function() {
  document.getElementById("busPic").style.width = "50%";
});

//----------->> keydown <<<-----------------

const banana = document.querySelector("*");

banana.addEventListener("keypress", event => {
  banana.style.backgroundColor = "red";
});

//-------->>dbclick<---------
var variableTwo = document
  .querySelector(".content-section")
  .addEventListener("dblclick", function() {
    document.getElementById("adventurePic").style.width = "50%";
  });

//----->> click <<<-----
const changeImg = document.querySelector(".img-fluid-rounded");

changeImg.addEventListener("click", () => {
  changeImg.src = "https://tinypng.com/images/social/website.jpg";
});
