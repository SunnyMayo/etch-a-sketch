const sizeBtn = document.querySelector("#size-btn");
const resetBtn = document.querySelector("#reset-btn");
const container = document.querySelector("#container");

sizeBtn.addEventListener("click", () => {
    let size = parseInt(prompt("Grid length?", 16));
    if (isNaN(size) || size < 0 || size > 100) {
        alert("Invalid, please choose a number between 1 and 100.");
        return;
    }
    else {
        reset();
        createGrid(size);
    };
});

resetBtn.addEventListener("click", reset);
      
// reset to empty grid
function reset() {
    document.getElementById("container").replaceChildren();
};

// creates 16x16 div elements within the container
function createGrid(number) {
    let gridsize = number * number;
    for (let i = 0; i < gridsize; i++) {  
        // create new div assigned to variable "gridbox"
        const gridbox = document.createElement("div");
        // add class "gridbox" to the div element
        gridbox.classList.add("gridbox");
        // size gridbox to fit 960x960px grid
        let x = parseFloat(960 / number);
        gridbox.style.height = `${x}px`;
        gridbox.style.width = `${x}px`;
        // add mouseover event that changes background to grey
        let opacity = 0;
        gridbox.addEventListener("mouseover", () => {
            if (opacity < 1.0) {
                opacity += 0.1;
                gridbox.style.opacity = opacity;
            }
        });
        // add colour change on click
        let backgroundColor = "blue"
        gridbox.addEventListener("click", () => {
            if (backgroundColor == "blue") {
                backgroundColor = "green";
                gridbox.style.backgroundColor = backgroundColor;
            }
            else if (backgroundColor == "green") {
                backgroundColor = "red";
                gridbox.style.backgroundColor = backgroundColor;
            }
            else if (backgroundColor == "red") {
                backgroundColor = "yellow";
                gridbox.style.backgroundColor = backgroundColor;
            }
            else if (backgroundColor == "yellow") {
                backgroundColor = "blue";
                gridbox.style.backgroundColor = backgroundColor;
            };
        });
        // appends each gridbox to the container
        container.appendChild(gridbox);
    };
};

// create initial 16x16 grid
createGrid(16);
