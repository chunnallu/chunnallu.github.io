/**
 * Created by Administrator on 2016/9/8.
 */
document.addEventListener("gameStart",function(){
    console.log("加载音乐...");
    setTimeout(function(){
        console.log("加载音乐完成");
        document.dispatchEvent(new Event("loadMusicSuccess"));
    },2000);

});


