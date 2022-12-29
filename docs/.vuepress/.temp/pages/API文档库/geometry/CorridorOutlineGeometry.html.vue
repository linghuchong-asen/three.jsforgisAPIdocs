<template><div><h1 id="仅有轮廓的走廊-corridoroutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓的走廊-corridoroutlinegeometry" aria-hidden="true">#</a> 仅有轮廓的走廊(CorridorOutlineGeometry)</h1>
<p>仅有轮廓的廊道几何体</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>CorridorOutlineGeometry(options)</strong></p>
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
<td style="text-align:left">Vector3[ ]</td>
<td style="text-align:left"></td>
<td style="text-align:left">定义廊道轮廓中心的一系列位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>width</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">廊道轮廓边界之间的距离，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional每个经度和纬度之间的距离，以弧度表示。确定在缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left">optional椭球面和廊道之间的距离，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional椭球面与挤压面之间的距离，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>cornerType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html" target="_blank" rel="noopener noreferrer">CornerType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>CornerType.ROUNDED</code></td>
<td style="text-align:left">optional确定角的样式。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> corridor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>CorridorOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">100000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


