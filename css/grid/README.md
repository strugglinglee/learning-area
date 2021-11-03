#### Grid vs Flex

Grid 布局是 css 最强大的布局方案。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。

Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。
Grid 布局远比 Flex 布局强大。

### 网格线(grid line)

水平网格线划分出行，垂直网格线划分出列。

n 行有 n + 1 根水平网格线，m 列有 m + 1 根垂直网格线，比如三行就有四根水平网格线。

### 容器属性

#### display

指定一个容器采用网格布局
> 子元素的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效

```css
/*块级元素*/
div {
    display:grid
}
/*行内元素*/
div {
  display: inline-grid;
}
```

#### grid-template-columns 属性，grid-template-rows 属性

grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。

```css
/*指定了一个三行三列的网格，列宽和行高都是100px*/
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
/*也可以使用百分比*/
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

##### repeat

重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数

repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。


```css
/*指定了一个三行三列的网格，列宽和行高都是100px*/
.container {
  display: grid;
  grid-template-columns: repeat(3,100px);
  grid-template-rows: repeat(3,100px);
}
```

repeat()重复`某种模式`也是可以的。

```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

##### auto-fill 关键字

单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充

```css

```

##### fr关键字

网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

fr可以与绝对长度的单位结合使用，这时会非常方便

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

##### minmax()

minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```js
// minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。
// grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```


##### auto 关键字

auto关键字表示由浏览器自己决定长度。

```js
// grid-template-columns: 100px auto 100px;

```
上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。

##### 网格线的名称

grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

##### 布局实例

grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码。

```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
```

传统的十二网格布局，写起来也很容易。`grid-template-columns: repeat(12, 1fr);`

#### grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性

> 根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。

grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式，语法如下。

```javascript
grid-gap: <grid-row-gap> <grid-column-gap>;
```
如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。
