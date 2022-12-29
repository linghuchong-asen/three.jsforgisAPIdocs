# 颜色（Color）

表示一个颜色。

对 Color 实例进行遍历将按相应的顺序生成它的分量 (r, g, b)。

## 代码示例

颜色可以用以下任意一种方式初始化。

```js
//empty constructor - will default white
const color1 = new THREE.Color();

//Hexadecimal color (recommended)
const color2 = new THREE.Color( 0xff0000 );

//RGB string
const color3 = new THREE.Color("rgb(255, 0, 0)");
const color4 = new THREE.Color("rgb(100%, 0%, 0%)");

//X11 color name - all 140 color names are supported.
//Note the lack of CamelCase in the name
const color5 = new THREE.Color( 'skyblue' );

//HSL string
const color6 = new THREE.Color("hsl(0, 100%, 50%)");

//Separate RGB values between 0 and 1
const color7 = new THREE.Color( 1, 0, 0 );
```



## 构造器（Constructor）

### Color( r : Color_Hex_or_String, g : Float, b : Float )

r - (可选参数) 如果参数g和b被定义，则r表示颜色中的红色分量。 如果未被定义，r可以是一个十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 颜色值或CSS样式的字符串或一个Color实例。
g - (可选参数) 如果被定义，表示颜色中的绿色分量。
b - (可选参数) 如果被定义，表示颜色中的蓝色分量。

注意使用十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 定义一个颜色在three.js中是标准的方法，而且其余 文档也将会使用这个方法。

当所有参数被定义时，r是红色分量，g是绿色分量，b是蓝色分量。
当只有 r 被定义时：

- 它可用一个十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 值表示颜色（推荐）。
- 它可以是一个另一个颜色实例。
- 它可以是另外一个CSS样式。例如：
  - 'rgb(250, 0,0)'
  - 'rgb(100%,0%,0%)'
  - 'hsl(0, 100%, 50%)'
  - '#ff0000'
  - '#f00'
  - 'red'



## 属性（Properties）

### .[isColor](https://threejs.org/docs/index.html#api/zh/math/Color.isColor) : Boolean

Read-only flag to check if a given object is of type Color.

### .[r](https://threejs.org/docs/index.html#api/zh/math/Color.r) : Float

红色通道的值在0到1之间。默认值为1。

### .[g](https://threejs.org/docs/index.html#api/zh/math/Color.g) : Float

绿色通道的值在0到1之间。默认值为1。

### .[b](https://threejs.org/docs/index.html#api/zh/math/Color.b) : Float

蓝色通道的值在0到1之间。默认值为1。

## 方法（Methods）

### .[add](https://threejs.org/docs/index.html#api/zh/math/Color.add) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

将给定颜色的RGB值添加到此颜色的RGB值。

### .[addColors](https://threejs.org/docs/index.html#api/zh/math/Color.addColors) ( color1 : [Color](https://threejs.org/docs/index.html#api/zh/math/Color), color2 : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

将此颜色的RGB值设置为 [color1](https://threejs.org/docs/index.html#api/zh/math/Color) 和 [color2](https://threejs.org/docs/index.html#api/zh/math/Color) 的RGB值之和。

### .[addScalar](https://threejs.org/docs/index.html#api/zh/math/Color.addScalar) ( s : Number ) : this

给现有的RGB值都加上 s 。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Color.clone) () : [Color](https://threejs.org/docs/index.html#api/zh/math/Color)

返回一个与当前颜色的 [r](https://threejs.org/docs/index.html#api/zh/math/Color.r), [g](https://threejs.org/docs/index.html#api/zh/math/Color.g) 和 [b](https://threejs.org/docs/index.html#api/zh/math/Color.b) 相同的颜色。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Color.copy) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

从 [color](https://threejs.org/docs/index.html#api/zh/math/Color) 中拷贝 [r](https://threejs.org/docs/index.html#api/zh/math/Color.r), [g](https://threejs.org/docs/index.html#api/zh/math/Color.g) 和 [b](https://threejs.org/docs/index.html#api/zh/math/Color.b) 值到当前的颜色。

### .[convertLinearToSRGB](https://threejs.org/docs/index.html#api/zh/math/Color.convertLinearToSRGB) () : this

将此颜色从线性空间转换成sRGB空间。

### .[convertSRGBToLinear](https://threejs.org/docs/index.html#api/zh/math/Color.convertSRGBToLinear) () : this

将此颜色从sRGB空间转换成线性空间。

### .[copyLinearToSRGB](https://threejs.org/docs/index.html#api/zh/math/Color.copyLinearToSRGB) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color)] ) : this

[color](https://threejs.org/docs/index.html#api/zh/math/Color) — 需要拷贝的颜色。
将传入的 color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) 拷贝给当前颜色，然后将当前颜色从线性空间转换到sRGB空间。

### .[copySRGBToLinear](https://threejs.org/docs/index.html#api/zh/math/Color.copySRGBToLinear) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

[color](https://threejs.org/docs/index.html#api/zh/math/Color) — 需要拷贝的颜色。
将传入的 color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) 拷贝给当前颜色，然后将当前颜色从sRGB空间转换到线性空间。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Color.equals) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : Boolean

将 color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) 的RGB值与该对象的RGB值进行比较。如果它们都是相同的，返回true，否则返回false。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Color.fromArray) ( array : Array, offset : Integer ) : this

array - 格式为 [ r, g, b ] 的数组 Array。
offset - 数组中可选偏移量

从格式为[ r, g, b ]的数组数据中来创建Color对象。

### .[fromBufferAttribute](https://threejs.org/docs/index.html#api/zh/math/Color.fromBufferAttribute) ( attribute : [BufferAttribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute), index : Integer ) : this

[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) - 数据源
index - 索引值

根据参数 [attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) 设置该颜色。

### .[getHex](https://threejs.org/docs/index.html#api/zh/math/Color.getHex) ( colorSpace : string = SRGBColorSpace ) : Integer

返回此颜色的十六进制值。

### .[getHexString](https://threejs.org/docs/index.html#api/zh/math/Color.getHexString) ( colorSpace : string = SRGBColorSpace ) : String

将此颜色的十六进制值作为字符串返回 (例如, 'FFFFFF')。

### .[getHSL](https://threejs.org/docs/index.html#api/zh/math/Color.getHSL) ( target : Object, colorSpace : string = LinearSRGBColorSpace ) : Object

target — 结果将复制到这个对象中。向对象添加h、s和l键(如果不存在)。

将此颜色的 [r](https://threejs.org/docs/index.html#api/zh/math/Color.r), [g](https://threejs.org/docs/index.html#api/zh/math/Color.g) 和 [b](https://threejs.org/docs/index.html#api/zh/math/Color.b) 值转换为 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)格式，然后返回一个格式如下的对象：`{ h: 0, s: 0, l: 0 }`

### .[getStyle](https://threejs.org/docs/index.html#api/zh/math/Color.getStyle) ( colorSpace : string = SRGBColorSpace ) : String

以CSS样式字符串的形式返回该颜色的值。例如:“rgb(255,0,0)”。

### .[lerp](https://threejs.org/docs/index.html#api/zh/math/Color.lerp) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color), alpha : Float ) : this

[color](https://threejs.org/docs/index.html#api/zh/math/Color) - 用于收敛的颜色。
alpha - 介于0到1的数字。

将该颜色的RGB值线性插值到传入参数的RGB值。alpha参数可以被认为是两种颜色之间的比例值，其中0是当前颜色和1.0是第一个参数的颜色。

### .[lerpColors](https://threejs.org/docs/index.html#api/zh/math/Color.lerpColors) ( color1 : [Color](https://threejs.org/docs/index.html#api/zh/math/Color), color2 : [Color](https://threejs.org/docs/index.html#api/zh/math/Color), alpha : Float ) : this

[color1](https://threejs.org/docs/index.html#api/zh/math/Color) - 开始的颜色。
[color2](https://threejs.org/docs/index.html#api/zh/math/Color) - 结束收敛的颜色。
alpha - 介于0到1的数字。

将该颜色设置为线性插值颜色 [color1](https://threejs.org/docs/index.html#api/zh/math/Color) 和 [color2](https://threejs.org/docs/index.html#api/zh/math/Color) - 在此 alpha 是连接两种颜色的直线百分比距离 alpha = 0 时为 [color1](https://threejs.org/docs/index.html#api/zh/math/Color)， alpha = 1 时为 [color2](https://threejs.org/docs/index.html#api/zh/math/Color)。

### .[lerpHSL](https://threejs.org/docs/index.html#api/zh/math/Color.lerpHSL) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color), alpha : Float ) : this

[color](https://threejs.org/docs/index.html#api/zh/math/Color) - 用于收敛的颜色。
alpha - 介于0到1的数字。

将该颜色的HSL值线性插值到传递参数的HSL值。它不同于上诉的lerp。通过不直接从一种颜色插入到另一种颜色， 而是通过插值这两种颜色之间的所有色相(H)、亮度(L)、饱和度(S)。alpha参数可以被认为是两种颜色之间的比例值， 其中0是当前颜色和1.0是第一个参数的颜色。

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Color.multiply) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

将此颜色的RGB值乘以给定的 [color](https://threejs.org/docs/index.html#api/zh/math/Color) 的RGB值。

### .[multiplyScalar](https://threejs.org/docs/index.html#api/zh/math/Color.multiplyScalar) ( s : Number ) : this

将此颜色的RGB值乘以给定的s的值。

### .[offsetHSL](https://threejs.org/docs/index.html#api/zh/math/Color.offsetHSL) ( h : Float, s : Float, l : Float ) : this

将给定的 h, s, 和 l值加到当前颜色值。 内部的机制为：先将该颜色的 [r](https://threejs.org/docs/index.html#api/zh/math/Color.r), [g](https://threejs.org/docs/index.html#api/zh/math/Color.g) 和 [b](https://threejs.org/docs/index.html#api/zh/math/Color.b) 值转换为HSL，然后与传入的h, s, 和 l 相加，最后再将结果转成RGB值。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Color.set) ( value : Color_Hex_or_String ) : this

value - 用于设置该颜色的值。

有关 value 的详细信息，请参阅上面的构造函数。 根据输入类型，将会委托给 [.copy](https://threejs.org/docs/index.html#api/zh/math/Color.copy), [.setStyle](https://threejs.org/docs/index.html#api/zh/math/Color.setStyle), 或者 [.setHex](https://threejs.org/docs/index.html#api/zh/math/Color.setHex) 函数处理。

### .[setHex](https://threejs.org/docs/index.html#api/zh/math/Color.setHex) ( hex : Integer, colorSpace : string = SRGBColorSpace ) : this

hex — [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 格式。

采用十六进制值设置此颜色。

### .[setHSL](https://threejs.org/docs/index.html#api/zh/math/Color.setHSL) ( h : Float, s : Float, l : Float, colorSpace : string = LinearSRGBColorSpace ) : this

h — 色相值处于0到1之间。hue value between 0.0 and 1.0
s — 饱和度值处于0到1之间。
l — 亮度值处于0到1之间。

采用HLS值设置此颜色。

### .[setRGB](https://threejs.org/docs/index.html#api/zh/math/Color.setRGB) ( r : Float, g : Float, b : Float, colorSpace : string = LinearSRGBColorSpace ) : this

r — 红色通道的值在0到1之间。
g — 绿色通道的值在0到1之间。
b — 蓝色通道的值在0到1之间。

采用RGB值设置此颜色。

### .[setScalar](https://threejs.org/docs/index.html#api/zh/math/Color.setScalar) ( scalar : Float ) : this

scalar — 处于0到1之间的值

将颜色的RGB值都设为该 scalar 的值。

### .[setStyle](https://threejs.org/docs/index.html#api/zh/math/Color.setStyle) ( style : String, colorSpace : string = SRGBColorSpace ) : this

style — 颜色css样式的字符串

采用ccs样式的字符串设置此颜色。例如, "rgb(250, 0,0)", "rgb(100%, 0%, 0%)", "hsl(0, 100%, 50%)", "#ff0000", "#f00", 或者 "red" ( 或者任何 [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) - 所有140种颜色名称都支持 ).
半透明颜色例如 "rgba(255, 0, 0, 0.5)" and "hsla(0, 100%, 50%, 0.5)" 也能支持, 但是alpha通道的值将会被丢弃。

注意，对于X11颜色名称，多个单词(如暗橙色)变成字符串“darkorange”。

### .[setColorName](https://threejs.org/docs/index.html#api/zh/math/Color.setColorName) ( style : String, colorSpace : string = SRGBColorSpace ) : this

style — 颜色名字的英文单词 ( 具体请查阅 [X11 color names](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) )

通过颜色名字设置该颜色。如果你不使用其他 CSS 颜色样式形式，那么这种方式会略快于 [.setStyle](https://threejs.org/docs/index.html#api/zh/math/Color.setStyle) 方法。

为了方便使用，颜色名称都可以通过 Color.NAMES 访问，例如：`Color.NAMES.aliceblue // returns 0xF0F8FF`

### .[sub](https://threejs.org/docs/index.html#api/zh/math/Color.sub) ( color : [Color](https://threejs.org/docs/index.html#api/zh/math/Color) ) : this

从该颜色的RGB分量中减去传入颜色的RGB分量。如果分量结果是负，则该分量为零。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Color.toArray) ( array : Array, offset : Integer ) : Array

array - 存储颜色的可选数组
offset - 数组的可选偏移量

返回一个格式为[ r, g, b ] 数组。