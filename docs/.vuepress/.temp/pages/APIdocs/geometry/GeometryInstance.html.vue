<template><div><h1 id="几何实例-geometryinstance" tabindex="-1"><a class="header-anchor" href="#几何实例-geometryinstance" aria-hidden="true">#</a> 几何实例(GeometryInstance)</h1>
<p>几何图形实例允许一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>Geometry</code><ExternalLinkIcon/></a>对象位于几个不同的位置和独特的（uniquely）颜色。 例如，一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/BoxGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>BoxGeometry</code><ExternalLinkIcon/></a>可以实例化多次，每次都使用不同的<code v-pre>modelMatrix</code>来改变它的位置、旋转和比例。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>GeometryInstance(options)</strong></p>
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
<td style="text-align:left"><code v-pre>geometry</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html" target="_blank" rel="noopener noreferrer">Geometry<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">实例化的几何。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>modelMatrix</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Matrix4.html" target="_blank" rel="noopener noreferrer">Matrix4<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Matrix4.IDENTITY</code></td>
<td style="text-align:left"><code v-pre>optional</code>转换模型矩阵，将几何图形从模型坐标转换为世界坐标。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>当使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#pick</code><ExternalLinkIcon/></a>选择实例或使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html#getGeometryInstanceAttributes" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive#getGeometryInstanceAttributes</code><ExternalLinkIcon/></a>获取/设置每个实例的属性时，返回一个用户定义的对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>attributes</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>每个实例的属性，如下面示例中显示的show或color属性。</td>
</tr>
</tbody>
</table>
<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 为一个box创建几何图形，以及引用它的两个实例。</span>
<span class="token comment">// 一个实例将盒子放置在底部，且颜色设置为浅绿色。</span>
<span class="token comment">// 另一个实例将盒子放置在顶部，并将颜色设置为白色。</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">fromDimensions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> WebgisWebgis<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_AND_NORMAL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dimensions</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">1000000.0</span><span class="token punctuation">,</span> <span class="token number">1000000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> instanceBottom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> geometry<span class="token punctuation">,</span>
  <span class="token literal-property property">modelMatrix</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByTranslation</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>
    Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.59777</span><span class="token punctuation">,</span> <span class="token number">40.03883</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1000000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'bottom'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> instanceTop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> geometry<span class="token punctuation">,</span>
  <span class="token literal-property property">modelMatrix</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByTranslation</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>
    Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.59777</span><span class="token punctuation">,</span> <span class="token number">40.03883</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">3000000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'top'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">attributes : Object</a></strong></p>
<p>每个实例的属性，如<a href="https://www.vvpstk.com/public/Cesium/Documentation/ColorGeometryInstanceAttribute.html" target="_blank" rel="noopener noreferrer"><code v-pre>ColorGeometryInstanceAttribute</code><ExternalLinkIcon/></a>或<a href="https://www.vvpstk.com/public/Cesium/Documentation/ShowGeometryInstanceAttribute.html" target="_blank" rel="noopener noreferrer"><code v-pre>ShowGeometryInstanceAttribute</code><ExternalLinkIcon/></a>。 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>Geometry</code><ExternalLinkIcon/></a>属性随顶点而变化；这些属性对于整个实例是恒定的。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><strong><a href="">geometry : Geometry</a></strong></p>
<p>要实例化的几何图形。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><strong><a href="">id : Object</a></strong></p>
<p>在选择实例或用于获取/设置每个实例的属性时返回用户定义的对象。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><strong><a href="">modelMatrix : Matrix4</a></strong></p>
<p>从模型坐标到世界坐标的4x4变换矩阵。 当这是单位矩阵时，几何图形是在世界坐标中绘制的，即：地球的WGS84坐标。 本地参考系可以通过提供一个不同的转换矩阵来使用，比如<a href="https://www.vvpstk.com/public/Cesium/Documentation/Transforms.html#.eastNorthUpToFixedFrame" target="_blank" rel="noopener noreferrer"><code v-pre>Transforms.eastNorthUpToFixedFrame</code><ExternalLinkIcon/></a>返回的转换矩阵。</p>
<p>defaultValue: <code v-pre>Matrix4.IDENTITY</code></p>
</div></template>


