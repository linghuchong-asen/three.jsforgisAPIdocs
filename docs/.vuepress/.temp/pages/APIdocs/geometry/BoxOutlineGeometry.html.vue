<template><div><h1 id="仅有轮廓立方体-boxoutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓立方体-boxoutlinegeometry" aria-hidden="true">#</a> 仅有轮廓立方体(BoxOutlineGeometry)</h1>
<p>以原点为中心的立方体轮廓的描述。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>BoxOutlineGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>minimum</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer">Cartesian3<ExternalLinkIcon/></a></td>
<td style="text-align:left">盒子的最小x, y, z坐标。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximum</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer">Cartesian3<ExternalLinkIcon/></a></td>
<td style="text-align:left">盒子的最大x, y, z坐标。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>BoxOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">maximum</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token number">250000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimum</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>BoxOutlineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">fromAxisAlignedBoundingBox(boundingBox): BoxGeometry</a></strong></p>
<p>从AxisAlignedBoundingBox的尺寸创建一个立方体。</p>
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
<td style="text-align:left"><code v-pre>boundingBox</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/AxisAlignedBoundingBox.html" target="_blank" rel="noopener noreferrer">AxisAlignedBoundingBox<ExternalLinkIcon/></a></td>
<td style="text-align:left">AxisAlignedBoundingBox的描述。</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> aabb <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>AxisAlignedBoundingBox<span class="token punctuation">.</span><span class="token function">fromPoints</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
     <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> box <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">fromAxisAlignedBoundingBox</span><span class="token punctuation">(</span>aabb<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="">fromDimensions(options) → BoxGeometry</a></strong></p>
<p>创建一个以给定尺寸的原点为中心的立方体。</p>
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
<td style="text-align:left"><code v-pre>dimensions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer">Cartesian3<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">分别存储在<code v-pre>Cartesian3</code>的x、y和z坐标中的盒子的宽度、深度和高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left"><code v-pre>optional</code>要计算的顶点属性。</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">fromDimensions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dimensions</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


