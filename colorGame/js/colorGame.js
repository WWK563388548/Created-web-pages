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
           alert("Correct!");
       } else {
           alert("Wrong!");
       }
    });
}