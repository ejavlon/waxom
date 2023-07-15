var sliders1 = document.querySelector(".browser-left").children;
var sliders2 = document.querySelector(".browser-center").children;
var sliders3 = document.querySelector(".browser-right").children;
var sliderCount = sliders1.length;
var leftIndex = 2;
var centerIndex = 0;
var rightIndex = 1;



function leftFun(){

    sliders1[leftIndex].classList.remove("active");
    if(leftIndex == 2){
        leftIndex = -1;
    }
    leftIndex++;
    sliders1[leftIndex].classList.add("active");

    sliders2[centerIndex].classList.remove("active");
    if(centerIndex == 2){
        centerIndex = -1;
    }
    centerIndex++;
    sliders2[centerIndex].classList.add("active");

    sliders3[rightIndex].classList.remove("active");
    if(rightIndex == 2){
        rightIndex = -1;
    }
    rightIndex++;
    sliders3[rightIndex].classList.add("active");
}
function rightFun(){

    sliders1[leftIndex].classList.remove("active");
    if(leftIndex == 0){
        leftIndex = 3;
    }
    leftIndex--;
    sliders1[leftIndex].classList.add("active");

    sliders2[centerIndex].classList.remove("active");
    if(centerIndex == 0){
        centerIndex = 3;
    }
    centerIndex--;
    sliders2[centerIndex].classList.add("active");

    sliders3[rightIndex].classList.remove("active");
    if(rightIndex == 0){
        rightIndex = 3;
    }
    rightIndex--;
    sliders3[rightIndex].classList.add("active");
}
//=====================================btns=====================================================//
var btns = document.querySelector(".gallery-filter").children;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn1");
var btn3 = document.getElementById("btn1");
var btn4 = document.getElementById("btn1");
var btn5 = document.getElementById("btn5");

function btnClick(){
 
}

