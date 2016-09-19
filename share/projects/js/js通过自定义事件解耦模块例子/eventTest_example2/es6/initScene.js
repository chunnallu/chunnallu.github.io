/**
 * Created by Administrator on 2016/9/8.
 */

var init_img_success  = false;
var init_music_success = false;
document.addEventListener("loadImageSuccess",function(e){
    console.log("使用图片创建场景...");
    setTimeout(function(){
        console.log("创建场景完成");
        init_img_success = true;
        checkShow();
    },2000)
});

document.addEventListener("loadMusicSuccess",function(e){
    console.log("使用音乐创建音效...");
    setTimeout(function(){
        console.log("创建音效完成");
        init_music_success = true;
        checkShow();
    },500)
});

function checkShow(){
    if(init_music_success&&init_img_success){
        var scene = document.getElementById("scene");
        scene.className = "show";
    }
}

