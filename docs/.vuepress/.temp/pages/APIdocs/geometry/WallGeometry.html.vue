<template><div><h1 id="墙-wallgeometry" tabindex="-1"><a class="header-anchor" href="#墙-wallgeometry" aria-hidden="true">#</a> 墙(WallGeometry)</h1>
<p>一种对墙的描述，类似于KML行字符串。墙是由一系列的点构成的，这些点向下延伸到地面。可选地，它们可以向下挤压到指定的高度。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>WallGeometry(options)</strong></p>
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
<td style="text-align:left">笛卡尔对象数组，它们是墙的点。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left"><code v-pre>optional</code>每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumHeights</code></td>
<td style="text-align:left">number[ ]</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>与<code v-pre>positions</code>并行的数组，给出了在<code v-pre>positions</code>处墙的最大高度。如果未定义，则使用每个位置的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumHeights</code></td>
<td style="text-align:left">number[ ]</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>与<code v-pre>positions</code>并行的数组，给出了在<code v-pre>positions</code>处墙的最小高度。如果未定义，则每个位置的高度为0.0。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left"><code v-pre>optional</code>用于坐标操作的椭球体</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left"><code v-pre>optional</code>要计算的顶点属性。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 建一堵从地面到10000米的墙</span>
<span class="token keyword">var</span> wall <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>WallGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>wall<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code> <strong><a href="">fromConstantHeights(options): WallGeometry</a></strong></p>
<p>一种对墙的描述，类似于KML行字符串。墙是由一系列的点构成的，这些点向下延伸到地面。可选地，它们可以向下挤压到指定的高度。</p>
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
<td style="text-align:left">笛卡尔对象数组，它们是墙的点。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional定义在<code v-pre>positions</code>处的墙的最大高度的常量。如果未定义，则使用每个位置的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional定义在<code v-pre>positions</code>处的墙的最小高度的常量。如果未定义，则每个位置的高度为0.0。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用于坐标操作的椭球体</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 建造一堵从10000米到20000米的墙</span>
<span class="token keyword">var</span> wall <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">fromConstantHeights</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimumHeight</span> <span class="token operator">:</span> <span class="token number">20000.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumHeight</span> <span class="token operator">:</span> <span class="token number">10000.0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>wall<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


