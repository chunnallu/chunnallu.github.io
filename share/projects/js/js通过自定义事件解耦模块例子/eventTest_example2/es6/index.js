/**
 * Created by Administrator on 2016/9/8.
 */
import loadImage from "./loadImage"
import loadMusic from "./loadMusic"
import initScene from "./initScene"   //一定要加载各个模块

var start = document.getElementById("start");
start.addEventListener("click",function(e){
    console.log("游戏开始！");
    document.dispatchEvent(new Event("gameStart"));
})

