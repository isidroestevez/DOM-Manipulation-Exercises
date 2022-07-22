// 1
document.getElementById("container");

// 2
document.querySelector("#container");

// 3
document.getElementsByClassName("second");

// 4
document.querySelector("ol .third");

// 5
let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";

// 6
let footer = document.querySelector(".footer");
footer.classList.add("main");

// 7
let footer = document.querySelector(".footer");
footer.classList.remove("main");

// 8
let newLi = document.createElement("li");

// 9
newLi.innerText = "four"

// 10
let list = document.querySelector("ul");
list.appendChild(newLi);

// 11
let liInsideOl = document.querySelectorAll("ol li");
for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

// 12
let footer = document.querySelector(".footer");
footer.remove();
