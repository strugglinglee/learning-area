# 你吹着空调，我用华丽的 CSS 吹着高贵的萬宝电风扇

炎炎夏日，大家都躲在空调房里吃着西瓜。会不会有某个时刻，会让你想起儿时的某个午后，你坐在风靡一时的万宝电风扇前面，对着它说话。

不知道大家会不会这样，我小时候经常这么玩，有时候还会调皮的对着电风扇喷水，看着水滴四溅。小时候真幸福，玩个电风扇都能玩出这么多花样。

那么今天，准备好回忆暴击，接下来我将在线送你一台万宝电风扇。

## 定义全局的变量方便使用

主要是背景色黑色，经典的红色外廓，内部都是黑色为主色调

```css
:root {
  --bg: #000;
  --primary: #70233b;
  --control: #d5d8dd;
}
```

## 头部

### 头部后盖

首先来绘制万宝电风扇的头部的后盖，它的外廓是经典的红色#70233b，内部都是黑色。重点是用`background-image`的`repeating-conic-gradient`方法实现后盖。

```html
<div class="head"></div>
```

```css
.head {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid var(--primary);
  background-image: repeating-conic-gradient(
    var(--bg) 0deg 6deg,
    transparent 6deg 18deg
  );
}
```

### 头部扇页

主要是应用背景实现网格，可以通过`background`的`-webkit-linear-gradient`方法和`background-size`属性来实现宽高不相等的网格。
其次是用一个伪类来实现中间的圆，如果你喜欢的，还可以像我这样在伪类中使用`background-image`DIY 一个自己的万宝电风扇。

```html
<div class="head">
  <div class="`front"></div>
</div>
```

```css
/*外面的扇叶 */
.head .front {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 96%;
  height: 96%;
  margin: auto;
  background: -webkit-linear-gradient(top, transparent 20px, var(--bg) 21px),
    -webkit-linear-gradient(left, transparent 40px, var(--bg) 41px);
  background-size: 43px 23px;
  border-radius: 50%;
  border: 3px solid var(--bg);
  z-index: 999;
}
/*中间的圆 */
.front::after {
  position: absolute;
  display: block;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #bec4d8;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 999;
  background-image: url("https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/5/1714823d315f9613~tplv-t2oaga2asx-no-mark:64:64:64:64.awebp");
  background-size: 50px 50px;
}
```

### 内部扇叶

一共有六个黑色的扇叶，通过定位以及 rotate 实现它的旋转。要注意的是在外面那一定要再包裹一层，因为后期转动起来是父元素带动着内部扇叶一起转动。

> 个人感觉自己实现的不太好，后期有时间还会优化一下。

```html
<div class="`fan-main">
  <div class="fan-item fan-item-1"></div>
  <div class="fan-item fan-item-2"></div>
  <div class="fan-item fan-item-3"></div>
  <div class="fan-item fan-item-4"></div>
  <div class="fan-item fan-item-5"></div>
  <div class="fan-item fan-item-6"></div>
</div>
```

```css
.fan-main {
  position: relative;
  width: 100%;
  height: 100%;
}
.fan-item {
  position: absolute;
  top: 39px;
  left: 100px;
  width: 50px;
  height: 80px;
  border-radius: 20px;
  background-color: var(--bg);
}

.fan-item-2 {
  top: 67px;
  left: 57px;
  transform: rotateZ(113deg);
}
.fan-item-3 {
  top: 67px;
  left: 143px;
  transform: rotateZ(-113deg);
}
.fan-item-4 {
  top: 132px;
  transform: rotateZ(-180deg);
}

.fan-item-5 {
  top: 113px;
  left: 60px;
  transform: rotateZ(54deg);
}
.fan-item-6 {
  top: 113px;
  left: 143px;
  transform: rotateZ(-54deg);
}
```

## 控制区和底座

主要的难点是梯形的绘制，相同地，底部其实也是一个梯形的绘制，我这里是通过设置高度为零，然后通过设置边框来实现梯形。
目前在这里只展示一次梯形的绘制，其他的代码都比较简单，大家有兴趣可以按照码上掘金的代码进行尝试。

```css
.control {
  position: relative;
  width: 100px;
  height: 0px;
  border-top: 0px;
  border-right: 25px solid transparent;
  border-bottom: 90px solid var(--primary);
  border-left: 25px solid transparent;
  margin-top: -10px;
}
```

## 重中之重：让电风扇动起来吧

> PS: 需提前引入 vue.js

### 开关转动

给开关绑定一个 changeControl 方法，通过控制 control 变量来实现档位的变化，一共有三个档位，小于 3 挡可以继续增加一个档位，等于 3 挡时归零重新开始。
设置不同的 class 使用 rotateZ 不同角度的变化来触发转动，按钮每次旋转 45deg 即可。

```html
<div class="control-main">
  <div
    :class="`control-item control-item-${control}`"
    @click="changeControl"
  ></div>
  <div class="control-item"></div>
</div>
```

```js
changeControl() {
    //小于3挡 可以继续增加
    if (this.control < 3) {
        this.control++;
    // 等于3挡 归零
    } else {
        this.control = 0;
    }
},
```

```css
.control-item-1 {
  transform: rotateZ(45deg);
}
.control-item-2 {
  transform: rotateZ(90deg);
}
.control-item-3 {
  transform: rotateZ(135deg);
}
```

### 内页转动

通过绑定 control 来控制档位，animation 的设置使电风扇转起来，设置时间的不同，时间越短，转速越快，linear 控制匀速转动。

```html
<div :class="`fan-main fan-main-${control}`">
  <div class="fan-item fan-item-1"></div>
  <div class="fan-item fan-item-2"></div>
  <div class="fan-item fan-item-3"></div>
  <div class="fan-item fan-item-4"></div>
  <div class="fan-item fan-item-5"></div>
  <div class="fan-item fan-item-6"></div>
</div>
```

```css
@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
/* 内扇动画：三个档位*/
.fan-main-1 {
  animation: 1s rotate infinite linear;
}

.fan-main-2 {
  animation: 500ms rotate infinite linear;
}
.fan-main-3 {
  animation: 200ms rotate infinite linear;
}
```

### 外页转动

外页转动的重点就是它转动的会比较缓慢，几个档位设置的动画持续时间要偏长一点，本质方法和内页转动一样

```html
<div :class="`front front-${control}`"></div>
```

```css
/* 前叶扇动画：三个档位 */
.front-1 {
  animation: 3s rotate infinite linear;
}

.front-2 {
  animation: 2s rotate infinite linear;
}
.front-3 {
  animation: 1s rotate infinite linear;
}
```

一番骚操作，我们童年的回忆-万宝电风扇就大功告成了，快拿着有你照片的电风扇去和你的朋友们炫耀炫耀吧。
