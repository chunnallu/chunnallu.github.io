##使用Jedis源码生成Jedis.jar
> 现在github上很多项目都使用maven工程来发布，没有jar包，所以下载下源码之后，还要自己打包成jar包形式以便引用。

### 打包步奏
1. 首先要在电脑上安装Maven并且安装eclipse Maven插件
2. 打开Eclipse，File --> import --> maven -->Existing maven project。将源码导入到Elipse中
    > 如果这一步中出现：Plugin execution not covered by lifecycle configuration错误，直接点击它提示里的解决方案即可，第一个未必可行，我就是点击了第二个解决办法才解决了这个问题。
    > 对pom.xml修复之后，别忘了运行maven  --> update project
3. 