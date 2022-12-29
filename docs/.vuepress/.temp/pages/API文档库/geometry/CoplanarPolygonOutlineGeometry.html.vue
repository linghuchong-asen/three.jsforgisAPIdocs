<template><div><h1 id="仅有轮廓的共面多边形-coplanarpolygonoutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓的共面多边形-coplanarpolygonoutlinegeometry" aria-hidden="true">#</a> 仅有轮廓的共面多边形(CoplanarPolygonOutlineGeometry)</h1>
<p>仅有轮廓的共面多边形几何体</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>CoplanarPolygonOutlineGeometry(options)</strong></p>
<p>options对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>polygonHierarchy</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html" target="_blank" rel="noopener noreferrer">PolygonHierarchy<ExternalLinkIcon/></a></td>
<td style="text-align:left">包含孔的多边形层次。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> polygonOutline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CoplanarPolygonOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
     <span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">1000.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">80.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">1000.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">80.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CoplanarPolygonOutlineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygonOutline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">fromPositions(options): CoplanarPolygonOutlineGeometry</a></strong></p>
<p>从一个位置数组描述一个共面多边形。</p>
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
<td style="text-align:left">定义多边形的角点的位置数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stRotation</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// create a polygon from points</span>
<span class="token keyword">var</span> polygon <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>CoplanarPolygonGeometry<span class="token punctuation">.</span><span class="token function">fromPositions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


