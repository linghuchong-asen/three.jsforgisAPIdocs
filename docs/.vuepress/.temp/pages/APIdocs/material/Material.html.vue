<template><div><h1 id="材质-material" tabindex="-1"><a class="header-anchor" href="#材质-material" aria-hidden="true">#</a> 材质(Material)</h1>
<p>材质是通过漫反射、镜面反射、法线、散射和alpha的组合来定义表面外观。 这些值是使用一个名为Fabric的JSON模式指定的，该模式被解析并组装到glsl着色器代码中。 查看<a href="https://github.com/AnalyticalGraphicsInc/cesium/wiki/Fabric" target="_blank" rel="noopener noreferrer">wiki页面<ExternalLinkIcon/></a>了解更多关于Fabric的信息。</p>
<p>基本材质类型和它们的uniforms</p>
<ul>
<li>
<p>Color</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: rgba 颜色对象</li>
</ul>
</li>
<li>
<p>Image</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数。</li>
</ul>
</li>
<li>
<p>DiffuseMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channels</code>: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数。</li>
</ul>
</li>
<li>
<p>AlphaMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channel</code>: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数。</li>
</ul>
</li>
<li>
<p>SpecularMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channel</code>: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数。</li>
</ul>
</li>
<li>
<p>EmissionMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channels</code>: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数</li>
</ul>
</li>
<li>
<p>BumpMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channel</code>: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数</li>
<li><code v-pre>strength</code>: 凹凸程度值在0.0和1.0之间</li>
</ul>
</li>
<li>
<p>NormalMap</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 图片路径</li>
<li><code v-pre>channels</code>: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。</li>
<li><code v-pre>repeat</code>: 对象，其x和y值指定重复图像的次数。</li>
<li><code v-pre>strength</code>: 凹凸程度值在0.0和1.0之间</li>
</ul>
</li>
<li>
<p>Grid</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 整个材质的rgba颜色对象</li>
<li><code v-pre>cellAlpha</code>: 网格线之间单元格的Alpha值,这个值会和color.alpha融合</li>
<li><code v-pre>lineCount</code>: 对象，其x和y值分别指定列和行数。</li>
<li><code v-pre>lineThickness</code>: 对象，其x和y值指定网格线的厚度(可用像素表示)。</li>
<li><code v-pre>lineOffset</code>: 对象，其x和y值指定网格线的偏移量(范围为0到1)。</li>
</ul>
</li>
<li>
<p>Stripe</p>
</li>
<li>
<ul>
<li><code v-pre>horizontal</code>: 决定条纹是水平还是垂直的布尔值。</li>
<li><code v-pre>evenColor</code>: 条纹的第一种颜色</li>
<li><code v-pre>oddColor</code>: 条纹的第二种颜色</li>
<li><code v-pre>offset</code>: 控制从哪一点开始绘制图案的数字; with 0.0 being the beginning of the even color, 1.0 the beginning of the odd color, 2.0 being the even color again, and any multiple or fractional values being in between.</li>
<li><code v-pre>repeat</code>: 条纹的总数</li>
</ul>
</li>
<li>
<p>Checkerboard</p>
</li>
<li>
<ul>
<li><code v-pre>lightColor</code>: 棋盘明亮部分的颜色</li>
<li><code v-pre>darkColor</code>: 棋盘暗淡部分的颜色</li>
<li><code v-pre>repeat</code>: 对象，其x和y值分别指定列和行数。</li>
</ul>
</li>
<li>
<p>Dot</p>
</li>
<li>
<ul>
<li><code v-pre>lightColor</code>: 点的颜色</li>
<li><code v-pre>darkColor</code>: 背景颜色</li>
<li><code v-pre>repeat</code>: 对象，其x和y值分别指定圆点的行数和列数。</li>
</ul>
</li>
<li>
<p>Water</p>
</li>
<li>
<ul>
<li><code v-pre>baseWaterColor</code>: 水的基础颜色</li>
<li><code v-pre>blendColor</code>: 用于混合从水到非水的地区的颜色</li>
<li><code v-pre>specularMap</code>: 用于表示水域区域的单通道纹理。</li>
<li><code v-pre>normalMap</code>: 水正常扰动的法线贴图。</li>
<li><code v-pre>frequency</code>: 波浪数</li>
<li><code v-pre>normalMap</code>: 水正常扰动的法线贴图。</li>
<li><code v-pre>animationSpeed</code>: 水运动的速度.</li>
<li><code v-pre>amplitude</code>: 水波振幅</li>
<li><code v-pre>specularIntensity</code>: 镜面反射强度。</li>
</ul>
</li>
<li>
<p>RimLighting</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 扩散颜色和alpha.</li>
<li><code v-pre>rimColor</code>: 边缘的扩散颜色和alpha.</li>
<li><code v-pre>width</code>: 边缘的宽度</li>
</ul>
</li>
<li>
<p>Fade</p>
</li>
<li>
<ul>
<li><code v-pre>fadeInColor</code>: diffuse color and alpha at <code v-pre>time</code></li>
<li><code v-pre>fadeOutColor</code>: diffuse color and alpha at <code v-pre>maximumDistance</code> from <code v-pre>time</code></li>
<li><code v-pre>maximumDistance</code>: Number between 0.0 and 1.0 where the <code v-pre>fadeInColor</code> becomes the <code v-pre>fadeOutColor</code>. A value of 0.0 gives the entire material a color of <code v-pre>fadeOutColor</code> and a value of 1.0 gives the the entire material a color of <code v-pre>fadeInColor</code></li>
<li><code v-pre>repeat</code>: true if the fade should wrap around the texture coodinates.</li>
<li><code v-pre>fadeDirection</code>: Object with x and y values specifying if the fade should be in the x and y directions.</li>
<li><code v-pre>time</code>: Object with x and y values between 0.0 and 1.0 of the <code v-pre>fadeInColor</code> position</li>
</ul>
</li>
<li>
<p>PolylineArrow</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 扩散的颜色和alpha</li>
</ul>
</li>
<li>
<p>PolylineDash</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 线的颜色</li>
<li><code v-pre>gapColor</code>: 线的间隙的颜色</li>
<li><code v-pre>dashLength</code>: Dash length in pixels.</li>
<li><code v-pre>dashPattern</code>: The 16 bit stipple pattern for the line..</li>
</ul>
</li>
<li>
<p>PolylineGlow</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 辉光的颜色和最大的alpha值</li>
<li><code v-pre>glowPower</code>: 辉光的强度</li>
<li><code v-pre>taperPower</code>: 渐变效果的强度。</li>
</ul>
</li>
<li>
<p>PolylineOutline</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 内部线条的散射颜色和alpha值</li>
<li><code v-pre>outlineColor</code>: 轮廓的散射颜色和alpha值</li>
<li><code v-pre>outlineWidth</code>: 轮廓的宽度</li>
</ul>
</li>
<li>
<p>ElevationContour</p>
</li>
<li>
<ul>
<li><code v-pre>color</code>: 等高线的颜色和alpha</li>
<li><code v-pre>spacing</code>: 等高线间距，以米为单位。</li>
<li><code v-pre>width</code>: 线宽，以像素为单位</li>
</ul>
</li>
<li>
<p>ElevationRamp</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 给地形着色的色带图像。</li>
<li><code v-pre>minimumHeight</code>: 最低高度</li>
<li><code v-pre>maximumHeight</code>: 最高高度</li>
</ul>
</li>
<li>
<p>SlopeRamp</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: 给地形着色的色带图像</li>
</ul>
</li>
<li>
<p>AspectRamp</p>
</li>
<li>
<ul>
<li><code v-pre>image</code>: color ramp image to use for color the terrain by aspect.</li>
</ul>
</li>
</ul>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Material(options)</strong></p>
<p>options具有下列属性的对象：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>strict</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional是否为通常会被忽略的问题抛出错误。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>translucent</code></td>
<td style="text-align:left">Boolean | function</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional当 <code v-pre>true</code>时，此材质的几何图形将显示为半透明。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fabric</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于生成材质的fabric JSON。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 用fromType创建一个颜色材质:</span>
polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Material<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">'Color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
polygon<span class="token punctuation">.</span>material<span class="token punctuation">.</span>uniforms<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建默认材质:</span>
polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 用完整的Fabric，创建颜色材质:</span>
polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fabric</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'Color'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">uniforms</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>static</code> <code v-pre>readonly</code><strong><a href="">Cesium.Material.AlphaMapType : String</a></strong></p>
<p>获取alpha贴图材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">AspectRampMaterialType : String</a></strong></p>
<p>获取长宽比渐变材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">BumpMapType : String</a></strong></p>
<p>获取凹凸贴图材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code><strong><a href="">CheckerboardType : String</a></strong></p>
<p>获取棋盘材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">ColorType : String</a></strong></p>
<p>获取颜色材质的名称。</p>
<p><code v-pre>static</code> <strong><a href="">DefaultCubeMapId : String</a></strong></p>
<p>获取或者设置默认立方体贴图的uniform值。</p>
<p><code v-pre>static</code> <strong><a href="">DefaultImageId : String</a></strong></p>
<p>获取或者设置默认纹理的uniform值.</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">DiffuseMapType : String</a></strong></p>
<p>获取漫射贴图材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">DotType : String</a></strong></p>
<p>获取点材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">ElevationContourType : String</a></strong></p>
<p>获取等高线材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">ElevationRampType : String</a></strong></p>
<p>获取高度分层设色材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">EmissionMapType : String</a></strong></p>
<p>获取emmision map 材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">FadeType : String</a></strong></p>
<p>获取淡入淡出材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">GridType : String</a></strong></p>
<p>获取格网材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">ImageType : String</a></strong></p>
<p>获取图像材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">NormalMapType : String</a></strong></p>
<p>获取法线贴图材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">PolylineArrowType : String</a></strong></p>
<p>获取箭头折线材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">PolylineDashType : String</a></strong></p>
<p>获取折线辉光材料的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">PolylineGlowType : String</a></strong></p>
<p>获取辉光折线材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">PolylineOutlineType : String</a></strong></p>
<p>获取轮廓线材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">RimLightingType : String</a></strong></p>
<p>获取边缘发光材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">SlopeRampMaterialType : String</a></strong></p>
<p>获取坡度材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">SpecularMapType : String</a></strong></p>
<p>获取高光贴图材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">StripeType : String</a></strong></p>
<p>获取条纹材质的名称。</p>
<p><code v-pre>static</code> <code v-pre>readonly</code> <strong><a href="">WaterType : String</a></strong></p>
<p>获取水面材质的名称。</p>
<p><a href=""><strong>materials : Object</strong></a></p>
<p>将子材质名称映射到材质对象.</p>
<p><strong><a href="">shaderSource : String</a></strong></p>
<p>该材质的glsl着色器代码</p>
<p><strong><a href="">translucent : Boolean|function</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形将显示为半透明。</p>
<p><strong><a href="">type : String</a></strong></p>
<p>材质类型。可以是现有类型，也可以是新类型。如果在fabric中没有指定类型，则类型为GUID。</p>
<p><strong><a href="">uniforms : Object</a></strong></p>
<p>将uniform名称映射到它们的值。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code><strong><a href="">fromType(type, uniforms): Material</a></strong></p>
<p>使用现有材质类型创建材质。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>type</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">基本材质类型。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>uniforms</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"><code v-pre>optional</code>重写默认的uniforms.</td>
</tr>
</tbody>
</table>
<p>返回值: 创建的材质对象</p>
<p><strong><a href="">destroy()</a></strong></p>
<p>销毁此集合中所有图元持有的WebGL资源。</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>material <span class="token operator">=</span> material <span class="token operator">&amp;&amp;</span> material<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><a href="">isDestroyed(): Boolean</a></strong></p>
<p>如果该对象没被销毁，返回<code v-pre>false</code>。</p>
<p>如果该对象已经被销毁，使用<code v-pre>isDestroyed</code> 会触发 <a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer"><code v-pre>DeveloperError</code><ExternalLinkIcon/></a> 异常。</p>
<p>返回值: 如果该对象没被销毁，返回false。</p>
<p><strong><a href="">isTranslucent(): Boolean</a></strong></p>
<p>获取此材质是否为半透明。</p>
<p>返回值：如果是半透明返回true。</p>
</div></template>


