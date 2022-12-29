<template><div><h1 id="仅有轮廓椭圆-ellipseoutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓椭圆-ellipseoutlinegeometry" aria-hidden="true">#</a> 仅有轮廓椭圆(EllipseOutlineGeometry)</h1>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>EllipseOutlineGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>center</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left"></td>
<td style="text-align:left">椭圆的中心点。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>semiMajorAxis</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">椭圆长半轴的长度，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>semiMinorAxis</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">椭圆短半轴的长度，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional椭圆将放到的椭球面。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional椭圆和椭球面之间的距离，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional椭圆的挤压面与椭球面之间的距离，以米为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>rotation</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional从北(逆时针方向)的角度，以弧度表示。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.02</code></td>
<td style="text-align:left">optional椭圆上各点之间的角距离，以弧度表示。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>numberOfVerticalLines</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>16</code></td>
<td style="text-align:left">optional在挤压椭圆的顶部和底部之间绘制的线数。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>EllipseOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">center</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.59777</span><span class="token punctuation">,</span> <span class="token number">40.03883</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">semiMajorAxis</span> <span class="token operator">:</span> <span class="token number">500000.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">semiMinorAxis</span> <span class="token operator">:</span> <span class="token number">300000.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rotation</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">60.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>EllipseOutlineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>ellipse<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


