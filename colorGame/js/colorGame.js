var colors = generateRandomColors(9);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


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