/**
 * Created by Administrator on 2016/9/8.
 */
import b from "./b"
import c from "./c"
import d from "./d"

var a = document.getElementById("a");
a.addEventListener("click",function(e){
    var clickA = new CustomEvent("clickA",{'detail':'123'});
    document.dispatchEvent(clickA);
});
a.addEventListener("dblclick",function(e){
    var clickB = new CustomEvent("clickB",{'detail':'123'});
    document.dispatchEvent(clickB);
});


