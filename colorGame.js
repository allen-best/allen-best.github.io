var numofSquares = 9;
var colors = generateRandomColors(numofSquares);
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var returnWeb = document.querySelector(".button");
colorDisplay.textContent = pickedColor;

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numofSquares = 3;
		}else if(this.textContent === "Medium"){
			numofSquares = 6;
		}else{
			numofSquares = 9;
		}
		reset();
	});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}


function reset(){
		colors = generateRandomColors(numofSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else{
			squares[i].style.display = "none";
		}
		}
		h1.style.backgroundColor = "steelblue"
}
	
resetButton.addEventListener("click", function(){
		reset();
	});

returnWeb.addEventListener("click", function(){
		location.href = "index.html";
	});

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for (i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;

}

function randomColor(){
	//pick a random vakue for red
	var r = Math.floor(Math.random() * 256);
	//pick a random vakue for green
	var g = Math.floor(Math.random() * 256);
	//pick a random vakue for blue
	var b = Math.floor(Math.random() * 256);
	//return full random rgb value
	return "rgb(" + r + ", " + g + ", " + b + ")";
}