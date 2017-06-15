图片裁剪

初始化插件

```javascript
	setClip(option)
```

option
```javascript
	{
		screenWidth: 1000,//屏幕宽度 必选
		screenHeight: 1000,//屏幕高度 必选
		qiu: qiu, //拖动右下角小球的dom
		clip: clip, //拖动框的dom
		w: 100, //默认宽 50
		h: 100 //默认高 50   同时决定着等比
	}
```
	
获得裁剪的值

```javascript
	getClip()
```

```javascript
	{
		top: 100,
		left: 100,
		width: 100,
		height: 100
	}
```
