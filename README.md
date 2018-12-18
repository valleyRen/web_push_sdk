# 快速开始

1. 下载 `valleyStream.js` 和 `valleyStream.swf` 到你的项目目录中
初始化创建一个swf容器

```
    var streamer = new ValleyStream(
        'container', //容器id 
        {
            width: 320, //窗口宽
            height: 240, //窗口高
            swf: 'valleyStream.swf' //swf目录
        }
    );
```
2. 定义一个gobal 函数 `valleyStreamReady` 会在 `valleyStream` 初始化成功之后调用
```
    window.valleyStreamReady = function() {
        stream.push(url, name)
    }
```

### API　


