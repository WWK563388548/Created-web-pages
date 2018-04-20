var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
           squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener('click', function(){
    // 生成新的颜色
    colors = generateRandomColors(numberOfSquares);
    // 从数组中挑选一个随机颜色
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    // 改变方块颜色
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

// 不要使用style.background, 为了适配更多浏览器
for (var i = 0; i < squares.length; i++) {
    // 向square添加初始颜色
    squares[i].style.backgroundColor = colors[i];

    // 向square添加点击监听
    squares[i].addEventListener("click", function(){
       // 获取方块颜色
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play Again?";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
       } else {
          this.style.backgroundColor = '#232323';
          messageDisplay.textContent = "Try Again!";
       }
    });
}

function changeColors(color) {
   // 循环所有颜色方块
   for(var i = 0; i < squares.length; i++) {
      // 将所有颜色转换为正确的颜色 
      squares[i].style.backgroundColor = color;
   }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(squareNum) {
    var colorArr = [];
    // 重复squareNum次
    for(var i = 0; i < squareNum; i++) {
        // 生成随机颜色并传入数组中
        colorArr.push(randomColor());

    }

    return colorArr;
}

function randomColor() {
    // 从0-255中选择一个"红色"
    var r = Math.floor(Math.random() * 256);
    // 从0-255中选择一个"绿色"
    var g = Math.floor(Math.random() * 256);
    // 从0-255中选择一个"蓝色"
    var b = Math.floor(Math.random() * 256);

    // 注意：逗号后的空格不可缺
    return "rgb(" + r + ", " + g + ", " + b + ")";
}