<template><div><h1 id="仅有轮廓的多段线柱体-polylinevolumeoutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓的多段线柱体-polylinevolumeoutlinegeometry" aria-hidden="true">#</a> 仅有轮廓的多段线柱体(PolylineVolumeOutlineGeometry)</h1>
<p>对具有体的折线的轮廓的描述（沿折线挤压的二维形状）。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolylineVolumeOutlineGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>polylinePositions</code></td>
<td style="text-align:left">Vector3[ ]</td>
<td style="text-align:left"></td>
<td style="text-align:left">定义折线体中心的<code v-pre>Cartesain3</code>位置数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shapePositions</code></td>
<td style="text-align:left">Vector2[ ]</td>
<td style="text-align:left"></td>
<td style="text-align:left">一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a>位置数组，定义要沿着折线挤压的形状</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left"><code v-pre>optional</code>用作参考的椭球体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left"><code v-pre>optional</code>每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>cornerType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html" target="_blank" rel="noopener noreferrer">CornerType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>CornerType.ROUNDED</code></td>
<td style="text-align:left"><code v-pre>optional</code>确定角的样式。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">computeCircle</span><span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> positions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">360</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> radians <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    positions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span>radius <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">,</span> radius <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> positions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> volumeOutline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolylineVolumeOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">polylinePositions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shapePositions</span> <span class="token operator">:</span> <span class="token function">computeCircle</span><span class="token punctuation">(</span><span class="token number">100000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


