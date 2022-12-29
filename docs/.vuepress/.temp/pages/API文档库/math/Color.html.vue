<template><div><h1 id="颜色-color" tabindex="-1"><a class="header-anchor" href="#颜色-color" aria-hidden="true">#</a> 颜色（Color）</h1>
<p>表示一个颜色。</p>
<p>对 Color 实例进行遍历将按相应的顺序生成它的分量 (r, g, b)。</p>
<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2>
<p>颜色可以用以下任意一种方式初始化。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//empty constructor - will default white</span>
<span class="token keyword">const</span> color1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Hexadecimal color (recommended)</span>
<span class="token keyword">const</span> color2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span> <span class="token number">0xff0000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//RGB string</span>
<span class="token keyword">const</span> color3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token string">"rgb(255, 0, 0)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> color4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token string">"rgb(100%, 0%, 0%)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//X11 color name - all 140 color names are supported.</span>
<span class="token comment">//Note the lack of CamelCase in the name</span>
<span class="token keyword">const</span> color5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span> <span class="token string">'skyblue'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//HSL string</span>
<span class="token keyword">const</span> color6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token string">"hsl(0, 100%, 50%)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Separate RGB values between 0 and 1</span>
<span class="token keyword">const</span> color7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造器-constructor" tabindex="-1"><a class="header-anchor" href="#构造器-constructor" aria-hidden="true">#</a> 构造器（Constructor）</h2>
<h3 id="color-r-color-hex-or-string-g-float-b-float" tabindex="-1"><a class="header-anchor" href="#color-r-color-hex-or-string-g-float-b-float" aria-hidden="true">#</a> Color( r : Color_Hex_or_String, g : Float, b : Float )</h3>
<p>r - (可选参数) 如果参数g和b被定义，则r表示颜色中的红色分量。 如果未被定义，r可以是一个十六进制 <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet" target="_blank" rel="noopener noreferrer">hexadecimal triplet<ExternalLinkIcon/></a> 颜色值或CSS样式的字符串或一个Color实例。
g - (可选参数) 如果被定义，表示颜色中的绿色分量。
b - (可选参数) 如果被定义，表示颜色中的蓝色分量。</p>
<p>注意使用十六进制 <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet" target="_blank" rel="noopener noreferrer">hexadecimal triplet<ExternalLinkIcon/></a> 定义一个颜色在three.js中是标准的方法，而且其余 文档也将会使用这个方法。</p>
<p>当所有参数被定义时，r是红色分量，g是绿色分量，b是蓝色分量。
当只有 r 被定义时：</p>
<ul>
<li>它可用一个十六进制 <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet" target="_blank" rel="noopener noreferrer">hexadecimal triplet<ExternalLinkIcon/></a> 值表示颜色（推荐）。</li>
<li>它可以是一个另一个颜色实例。</li>
<li>它可以是另外一个CSS样式。例如：
<ul>
<li>'rgb(250, 0,0)'</li>
<li>'rgb(100%,0%,0%)'</li>
<li>'hsl(0, 100%, 50%)'</li>
<li>'#ff0000'</li>
<li>'#f00'</li>
<li>'red'</li>
</ul>
</li>
</ul>
<h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性（Properties）</h2>
<h3 id="iscolor-boolean" tabindex="-1"><a class="header-anchor" href="#iscolor-boolean" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.isColor" target="_blank" rel="noopener noreferrer">isColor<ExternalLinkIcon/></a> : Boolean</h3>
<p>Read-only flag to check if a given object is of type Color.</p>
<h3 id="r-float" tabindex="-1"><a class="header-anchor" href="#r-float" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.r" target="_blank" rel="noopener noreferrer">r<ExternalLinkIcon/></a> : Float</h3>
<p>红色通道的值在0到1之间。默认值为1。</p>
<h3 id="g-float" tabindex="-1"><a class="header-anchor" href="#g-float" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.g" target="_blank" rel="noopener noreferrer">g<ExternalLinkIcon/></a> : Float</h3>
<p>绿色通道的值在0到1之间。默认值为1。</p>
<h3 id="b-float" tabindex="-1"><a class="header-anchor" href="#b-float" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.b" target="_blank" rel="noopener noreferrer">b<ExternalLinkIcon/></a> : Float</h3>
<p>蓝色通道的值在0到1之间。默认值为1。</p>
<h2 id="方法-methods" tabindex="-1"><a class="header-anchor" href="#方法-methods" aria-hidden="true">#</a> 方法（Methods）</h2>
<h3 id="add-color-color-this" tabindex="-1"><a class="header-anchor" href="#add-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.add" target="_blank" rel="noopener noreferrer">add<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p>将给定颜色的RGB值添加到此颜色的RGB值。</p>
<h3 id="addcolors-color1-color-color2-color-this" tabindex="-1"><a class="header-anchor" href="#addcolors-color1-color-color2-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.addColors" target="_blank" rel="noopener noreferrer">addColors<ExternalLinkIcon/></a> ( color1 : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>, color2 : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p>将此颜色的RGB值设置为 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color1<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color2<ExternalLinkIcon/></a> 的RGB值之和。</p>
<h3 id="addscalar-s-number-this" tabindex="-1"><a class="header-anchor" href="#addscalar-s-number-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.addScalar" target="_blank" rel="noopener noreferrer">addScalar<ExternalLinkIcon/></a> ( s : Number ) : this</h3>
<p>给现有的RGB值都加上 s 。</p>
<h3 id="clone-color" tabindex="-1"><a class="header-anchor" href="#clone-color" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.clone" target="_blank" rel="noopener noreferrer">clone<ExternalLinkIcon/></a> () : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></h3>
<p>返回一个与当前颜色的 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.r" target="_blank" rel="noopener noreferrer">r<ExternalLinkIcon/></a>, <a href="https://threejs.org/docs/index.html#api/zh/math/Color.g" target="_blank" rel="noopener noreferrer">g<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.b" target="_blank" rel="noopener noreferrer">b<ExternalLinkIcon/></a> 相同的颜色。</p>
<h3 id="copy-color-color-this" tabindex="-1"><a class="header-anchor" href="#copy-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.copy" target="_blank" rel="noopener noreferrer">copy<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p>从 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> 中拷贝 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.r" target="_blank" rel="noopener noreferrer">r<ExternalLinkIcon/></a>, <a href="https://threejs.org/docs/index.html#api/zh/math/Color.g" target="_blank" rel="noopener noreferrer">g<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.b" target="_blank" rel="noopener noreferrer">b<ExternalLinkIcon/></a> 值到当前的颜色。</p>
<h3 id="convertlineartosrgb-this" tabindex="-1"><a class="header-anchor" href="#convertlineartosrgb-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.convertLinearToSRGB" target="_blank" rel="noopener noreferrer">convertLinearToSRGB<ExternalLinkIcon/></a> () : this</h3>
<p>将此颜色从线性空间转换成sRGB空间。</p>
<h3 id="convertsrgbtolinear-this" tabindex="-1"><a class="header-anchor" href="#convertsrgbtolinear-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.convertSRGBToLinear" target="_blank" rel="noopener noreferrer">convertSRGBToLinear<ExternalLinkIcon/></a> () : this</h3>
<p>将此颜色从sRGB空间转换成线性空间。</p>
<h3 id="copylineartosrgb-color-color-this" tabindex="-1"><a class="header-anchor" href="#copylineartosrgb-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.copyLinearToSRGB" target="_blank" rel="noopener noreferrer">copyLinearToSRGB<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>] ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> — 需要拷贝的颜色。
将传入的 color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> 拷贝给当前颜色，然后将当前颜色从线性空间转换到sRGB空间。</p>
<h3 id="copysrgbtolinear-color-color-this" tabindex="-1"><a class="header-anchor" href="#copysrgbtolinear-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.copySRGBToLinear" target="_blank" rel="noopener noreferrer">copySRGBToLinear<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> — 需要拷贝的颜色。
将传入的 color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> 拷贝给当前颜色，然后将当前颜色从sRGB空间转换到线性空间。</p>
<h3 id="equals-color-color-boolean" tabindex="-1"><a class="header-anchor" href="#equals-color-color-boolean" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.equals" target="_blank" rel="noopener noreferrer">equals<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : Boolean</h3>
<p>将 color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> 的RGB值与该对象的RGB值进行比较。如果它们都是相同的，返回true，否则返回false。</p>
<h3 id="fromarray-array-array-offset-integer-this" tabindex="-1"><a class="header-anchor" href="#fromarray-array-array-offset-integer-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.fromArray" target="_blank" rel="noopener noreferrer">fromArray<ExternalLinkIcon/></a> ( array : Array, offset : Integer ) : this</h3>
<p>array - 格式为 [ r, g, b ] 的数组 Array。
offset - 数组中可选偏移量</p>
<p>从格式为[ r, g, b ]的数组数据中来创建Color对象。</p>
<h3 id="frombufferattribute-attribute-bufferattribute-index-integer-this" tabindex="-1"><a class="header-anchor" href="#frombufferattribute-attribute-bufferattribute-index-integer-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.fromBufferAttribute" target="_blank" rel="noopener noreferrer">fromBufferAttribute<ExternalLinkIcon/></a> ( attribute : <a href="https://threejs.org/docs/index.html#api/zh/core/BufferAttribute" target="_blank" rel="noopener noreferrer">BufferAttribute<ExternalLinkIcon/></a>, index : Integer ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/core/BufferAttribute" target="_blank" rel="noopener noreferrer">attribute<ExternalLinkIcon/></a> - 数据源
index - 索引值</p>
<p>根据参数 <a href="https://threejs.org/docs/index.html#api/zh/core/BufferAttribute" target="_blank" rel="noopener noreferrer">attribute<ExternalLinkIcon/></a> 设置该颜色。</p>
<h3 id="gethex-colorspace-string-srgbcolorspace-integer" tabindex="-1"><a class="header-anchor" href="#gethex-colorspace-string-srgbcolorspace-integer" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.getHex" target="_blank" rel="noopener noreferrer">getHex<ExternalLinkIcon/></a> ( colorSpace : string = SRGBColorSpace ) : Integer</h3>
<p>返回此颜色的十六进制值。</p>
<h3 id="gethexstring-colorspace-string-srgbcolorspace-string" tabindex="-1"><a class="header-anchor" href="#gethexstring-colorspace-string-srgbcolorspace-string" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.getHexString" target="_blank" rel="noopener noreferrer">getHexString<ExternalLinkIcon/></a> ( colorSpace : string = SRGBColorSpace ) : String</h3>
<p>将此颜色的十六进制值作为字符串返回 (例如, 'FFFFFF')。</p>
<h3 id="gethsl-target-object-colorspace-string-linearsrgbcolorspace-object" tabindex="-1"><a class="header-anchor" href="#gethsl-target-object-colorspace-string-linearsrgbcolorspace-object" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.getHSL" target="_blank" rel="noopener noreferrer">getHSL<ExternalLinkIcon/></a> ( target : Object, colorSpace : string = LinearSRGBColorSpace ) : Object</h3>
<p>target — 结果将复制到这个对象中。向对象添加h、s和l键(如果不存在)。</p>
<p>将此颜色的 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.r" target="_blank" rel="noopener noreferrer">r<ExternalLinkIcon/></a>, <a href="https://threejs.org/docs/index.html#api/zh/math/Color.g" target="_blank" rel="noopener noreferrer">g<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.b" target="_blank" rel="noopener noreferrer">b<ExternalLinkIcon/></a> 值转换为 <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank" rel="noopener noreferrer">HSL<ExternalLinkIcon/></a>格式，然后返回一个格式如下的对象：<code v-pre>{ h: 0, s: 0, l: 0 }</code></p>
<h3 id="getstyle-colorspace-string-srgbcolorspace-string" tabindex="-1"><a class="header-anchor" href="#getstyle-colorspace-string-srgbcolorspace-string" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.getStyle" target="_blank" rel="noopener noreferrer">getStyle<ExternalLinkIcon/></a> ( colorSpace : string = SRGBColorSpace ) : String</h3>
<p>以CSS样式字符串的形式返回该颜色的值。例如:“rgb(255,0,0)”。</p>
<h3 id="lerp-color-color-alpha-float-this" tabindex="-1"><a class="header-anchor" href="#lerp-color-color-alpha-float-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.lerp" target="_blank" rel="noopener noreferrer">lerp<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>, alpha : Float ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> - 用于收敛的颜色。
alpha - 介于0到1的数字。</p>
<p>将该颜色的RGB值线性插值到传入参数的RGB值。alpha参数可以被认为是两种颜色之间的比例值，其中0是当前颜色和1.0是第一个参数的颜色。</p>
<h3 id="lerpcolors-color1-color-color2-color-alpha-float-this" tabindex="-1"><a class="header-anchor" href="#lerpcolors-color1-color-color2-color-alpha-float-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.lerpColors" target="_blank" rel="noopener noreferrer">lerpColors<ExternalLinkIcon/></a> ( color1 : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>, color2 : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>, alpha : Float ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color1<ExternalLinkIcon/></a> - 开始的颜色。
<a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color2<ExternalLinkIcon/></a> - 结束收敛的颜色。
alpha - 介于0到1的数字。</p>
<p>将该颜色设置为线性插值颜色 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color1<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color2<ExternalLinkIcon/></a> - 在此 alpha 是连接两种颜色的直线百分比距离 alpha = 0 时为 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color1<ExternalLinkIcon/></a>， alpha = 1 时为 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color2<ExternalLinkIcon/></a>。</p>
<h3 id="lerphsl-color-color-alpha-float-this" tabindex="-1"><a class="header-anchor" href="#lerphsl-color-color-alpha-float-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.lerpHSL" target="_blank" rel="noopener noreferrer">lerpHSL<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a>, alpha : Float ) : this</h3>
<p><a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> - 用于收敛的颜色。
alpha - 介于0到1的数字。</p>
<p>将该颜色的HSL值线性插值到传递参数的HSL值。它不同于上诉的lerp。通过不直接从一种颜色插入到另一种颜色， 而是通过插值这两种颜色之间的所有色相(H)、亮度(L)、饱和度(S)。alpha参数可以被认为是两种颜色之间的比例值， 其中0是当前颜色和1.0是第一个参数的颜色。</p>
<h3 id="multiply-color-color-this" tabindex="-1"><a class="header-anchor" href="#multiply-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.multiply" target="_blank" rel="noopener noreferrer">multiply<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p>将此颜色的RGB值乘以给定的 <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a> 的RGB值。</p>
<h3 id="multiplyscalar-s-number-this" tabindex="-1"><a class="header-anchor" href="#multiplyscalar-s-number-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.multiplyScalar" target="_blank" rel="noopener noreferrer">multiplyScalar<ExternalLinkIcon/></a> ( s : Number ) : this</h3>
<p>将此颜色的RGB值乘以给定的s的值。</p>
<h3 id="offsethsl-h-float-s-float-l-float-this" tabindex="-1"><a class="header-anchor" href="#offsethsl-h-float-s-float-l-float-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.offsetHSL" target="_blank" rel="noopener noreferrer">offsetHSL<ExternalLinkIcon/></a> ( h : Float, s : Float, l : Float ) : this</h3>
<p>将给定的 h, s, 和 l值加到当前颜色值。 内部的机制为：先将该颜色的 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.r" target="_blank" rel="noopener noreferrer">r<ExternalLinkIcon/></a>, <a href="https://threejs.org/docs/index.html#api/zh/math/Color.g" target="_blank" rel="noopener noreferrer">g<ExternalLinkIcon/></a> 和 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.b" target="_blank" rel="noopener noreferrer">b<ExternalLinkIcon/></a> 值转换为HSL，然后与传入的h, s, 和 l 相加，最后再将结果转成RGB值。</p>
<h3 id="set-value-color-hex-or-string-this" tabindex="-1"><a class="header-anchor" href="#set-value-color-hex-or-string-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.set" target="_blank" rel="noopener noreferrer">set<ExternalLinkIcon/></a> ( value : Color_Hex_or_String ) : this</h3>
<p>value - 用于设置该颜色的值。</p>
<p>有关 value 的详细信息，请参阅上面的构造函数。 根据输入类型，将会委托给 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.copy" target="_blank" rel="noopener noreferrer">.copy<ExternalLinkIcon/></a>, <a href="https://threejs.org/docs/index.html#api/zh/math/Color.setStyle" target="_blank" rel="noopener noreferrer">.setStyle<ExternalLinkIcon/></a>, 或者 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.setHex" target="_blank" rel="noopener noreferrer">.setHex<ExternalLinkIcon/></a> 函数处理。</p>
<h3 id="sethex-hex-integer-colorspace-string-srgbcolorspace-this" tabindex="-1"><a class="header-anchor" href="#sethex-hex-integer-colorspace-string-srgbcolorspace-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setHex" target="_blank" rel="noopener noreferrer">setHex<ExternalLinkIcon/></a> ( hex : Integer, colorSpace : string = SRGBColorSpace ) : this</h3>
<p>hex — <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet" target="_blank" rel="noopener noreferrer">hexadecimal triplet<ExternalLinkIcon/></a> 格式。</p>
<p>采用十六进制值设置此颜色。</p>
<h3 id="sethsl-h-float-s-float-l-float-colorspace-string-linearsrgbcolorspace-this" tabindex="-1"><a class="header-anchor" href="#sethsl-h-float-s-float-l-float-colorspace-string-linearsrgbcolorspace-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setHSL" target="_blank" rel="noopener noreferrer">setHSL<ExternalLinkIcon/></a> ( h : Float, s : Float, l : Float, colorSpace : string = LinearSRGBColorSpace ) : this</h3>
<p>h — 色相值处于0到1之间。hue value between 0.0 and 1.0
s — 饱和度值处于0到1之间。
l — 亮度值处于0到1之间。</p>
<p>采用HLS值设置此颜色。</p>
<h3 id="setrgb-r-float-g-float-b-float-colorspace-string-linearsrgbcolorspace-this" tabindex="-1"><a class="header-anchor" href="#setrgb-r-float-g-float-b-float-colorspace-string-linearsrgbcolorspace-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setRGB" target="_blank" rel="noopener noreferrer">setRGB<ExternalLinkIcon/></a> ( r : Float, g : Float, b : Float, colorSpace : string = LinearSRGBColorSpace ) : this</h3>
<p>r — 红色通道的值在0到1之间。
g — 绿色通道的值在0到1之间。
b — 蓝色通道的值在0到1之间。</p>
<p>采用RGB值设置此颜色。</p>
<h3 id="setscalar-scalar-float-this" tabindex="-1"><a class="header-anchor" href="#setscalar-scalar-float-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setScalar" target="_blank" rel="noopener noreferrer">setScalar<ExternalLinkIcon/></a> ( scalar : Float ) : this</h3>
<p>scalar — 处于0到1之间的值</p>
<p>将颜色的RGB值都设为该 scalar 的值。</p>
<h3 id="setstyle-style-string-colorspace-string-srgbcolorspace-this" tabindex="-1"><a class="header-anchor" href="#setstyle-style-string-colorspace-string-srgbcolorspace-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setStyle" target="_blank" rel="noopener noreferrer">setStyle<ExternalLinkIcon/></a> ( style : String, colorSpace : string = SRGBColorSpace ) : this</h3>
<p>style — 颜色css样式的字符串</p>
<p>采用ccs样式的字符串设置此颜色。例如, &quot;rgb(250, 0,0)&quot;, &quot;rgb(100%, 0%, 0%)&quot;, &quot;hsl(0, 100%, 50%)&quot;, &quot;#ff0000&quot;, &quot;#f00&quot;, 或者 &quot;red&quot; ( 或者任何 <a href="https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart" target="_blank" rel="noopener noreferrer">X11 color name<ExternalLinkIcon/></a> - 所有140种颜色名称都支持 ).
半透明颜色例如 &quot;rgba(255, 0, 0, 0.5)&quot; and &quot;hsla(0, 100%, 50%, 0.5)&quot; 也能支持, 但是alpha通道的值将会被丢弃。</p>
<p>注意，对于X11颜色名称，多个单词(如暗橙色)变成字符串“darkorange”。</p>
<h3 id="setcolorname-style-string-colorspace-string-srgbcolorspace-this" tabindex="-1"><a class="header-anchor" href="#setcolorname-style-string-colorspace-string-srgbcolorspace-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.setColorName" target="_blank" rel="noopener noreferrer">setColorName<ExternalLinkIcon/></a> ( style : String, colorSpace : string = SRGBColorSpace ) : this</h3>
<p>style — 颜色名字的英文单词 ( 具体请查阅 <a href="https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart" target="_blank" rel="noopener noreferrer">X11 color names<ExternalLinkIcon/></a> )</p>
<p>通过颜色名字设置该颜色。如果你不使用其他 CSS 颜色样式形式，那么这种方式会略快于 <a href="https://threejs.org/docs/index.html#api/zh/math/Color.setStyle" target="_blank" rel="noopener noreferrer">.setStyle<ExternalLinkIcon/></a> 方法。</p>
<p>为了方便使用，颜色名称都可以通过 Color.NAMES 访问，例如：<code v-pre>Color.NAMES.aliceblue // returns 0xF0F8FF</code></p>
<h3 id="sub-color-color-this" tabindex="-1"><a class="header-anchor" href="#sub-color-color-this" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.sub" target="_blank" rel="noopener noreferrer">sub<ExternalLinkIcon/></a> ( color : <a href="https://threejs.org/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> ) : this</h3>
<p>从该颜色的RGB分量中减去传入颜色的RGB分量。如果分量结果是负，则该分量为零。</p>
<h3 id="toarray-array-array-offset-integer-array" tabindex="-1"><a class="header-anchor" href="#toarray-array-array-offset-integer-array" aria-hidden="true">#</a> .<a href="https://threejs.org/docs/index.html#api/zh/math/Color.toArray" target="_blank" rel="noopener noreferrer">toArray<ExternalLinkIcon/></a> ( array : Array, offset : Integer ) : Array</h3>
<p>array - 存储颜色的可选数组
offset - 数组的可选偏移量</p>
<p>返回一个格式为[ r, g, b ] 数组。</p>
</div></template>


