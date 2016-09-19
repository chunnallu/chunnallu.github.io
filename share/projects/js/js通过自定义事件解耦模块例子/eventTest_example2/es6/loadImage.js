/**
 * Created by Administrator on 2016/9/8.
 */
document.addEventListener("gameStart",function(){
    console.log("加载图片...");
    setTimeout(function(){
        console.log("加载图片完成");
        document.dispatchEvent(new Event("loadImageSuccess"));
    },1000);

});


