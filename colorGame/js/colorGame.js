var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 0)",
    "rgb(200, 150, 0)",
    "rgb(255, 100, 100)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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