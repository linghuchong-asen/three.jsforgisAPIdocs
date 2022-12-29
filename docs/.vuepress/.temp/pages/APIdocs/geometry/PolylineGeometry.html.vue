<template><div><h1 id="多段线-polylinegeometry" tabindex="-1"><a class="header-anchor" href="#多段线-polylinegeometry" aria-hidden="true">#</a> 多段线(PolylineGeometry)</h1>
<p>以线带（line strip）形式建模的折线的描述；前两个位置定义一个线段， 每个额外的位置和前一个位置的定义一个线段。折线可以用一种材质来显示。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolylineGeometry(options)</strong></p>
<p>options对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>positions</code></td>
<td style="text-align:left">Vector3[]</td>
<td style="text-align:left"></td>
<td style="text-align:left">一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>数组，它将折线中的位置定义为一条线带（line strip）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>width</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional宽度（以像素为单位）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>colors</code></td>
<td style="text-align:left">Color[]</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional定义每个顶点或每个段颜色的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>colorsPerVertex</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional一个布尔值，它决定颜色是在每段直线上是单调的（flat）还是在顶点上是插值的。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer">ArcType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left">optional折线段必须遵循的线的类型。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional每个纬度和经度之间的距离（以弧度表示），如果options.arcType不是ArcType.NONE。确定缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 两条线段相连的折线</span>
<span class="token keyword">var</span> polyline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">10.0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolylineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polyline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


