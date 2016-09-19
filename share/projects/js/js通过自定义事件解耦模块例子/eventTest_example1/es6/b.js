/**
 * Created by Administrator on 2016/9/8.
 */
var b = document.getElementById("b");
document.addEventListener("clickA",function(e){
    b.innerHTML = ":"+e.detail;
})
