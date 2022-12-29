<template><div><h1 id="几何体-geometry" tabindex="-1"><a class="header-anchor" href="#几何体-geometry" aria-hidden="true">#</a> 几何体(Geometry)</h1>
<p>几何图形表示为具有组织顶点的属性和定义图元的可选索引数据。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Geometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>attributes</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryAttributes.html" target="_blank" rel="noopener noreferrer">GeometryAttributes<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">组成几何图形的顶点的属性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>primitiveType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PrimitiveType.html" target="_blank" rel="noopener noreferrer">PrimitiveType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>PrimitiveType.TRIANGLES</code></td>
<td style="text-align:left">optional几何图形中的图元类型。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>indices</code></td>
<td style="text-align:left">Uint16Array | Uint32Array</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional可选索引数据，用于确定几何图形中的图元。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>boundingSphere</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/BoundingSphere.html" target="_blank" rel="noopener noreferrer">BoundingSphere<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional一个可选的包围球，完全包围了几何图形。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用位置属性和线索引创建几何图形。</span>
<span class="token keyword">var</span> positions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float64Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
  <span class="token number">7500000.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
  <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">7500000.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Geometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryAttribute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">componentDatatype</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>ComponentDatatype<span class="token punctuation">.</span><span class="token constant">DOUBLE</span><span class="token punctuation">,</span>
      <span class="token literal-property property">componentsPerAttribute</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">values</span> <span class="token operator">:</span> positions
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">indices</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">primitiveType</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>PrimitiveType<span class="token punctuation">.</span><span class="token constant">LINES</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boundingSphere</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>BoundingSphere<span class="token punctuation">.</span><span class="token function">fromVertices</span><span class="token punctuation">(</span>positions<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">attributes : GeometryAttributes</a></strong></p>
<p>组成几何图形的顶点的属性。这个对象中的每个属性都对应一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryAttribute.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryAttribute</code><ExternalLinkIcon/></a>，其中包含属性的数据。</p>
<p>属性总是以非交插（non-interleaved）的方式存储在几何图形中。</p>
<p>保留具有众所周知语义的属性名称。以下属性由Geometry（取决于提供的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>）创建。</p>
<ul>
<li><code v-pre>position</code> - 3D顶点位置。64位浮点数（用于精度）。 每个属性3个分量。请参见 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#position" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat#position</code><ExternalLinkIcon/></a>。</li>
<li><code v-pre>normal</code> - 标准（标准化的）, 通常用于光照。32位浮点数。每个属性3个分量。请参见 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#normal" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat#normal</code><ExternalLinkIcon/></a>。</li>
<li><code v-pre>st</code> - 2D纹理坐标。32位浮点数。每个属性2个分量。请参见<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#st" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat#st</code><ExternalLinkIcon/></a>.</li>
<li><code v-pre>bitangent</code> - Bitangent（标准化的），用于切线空间（tangent-space）效果，如凹凸贴图（bump mapping）。32位浮点数。每个属性3个分量。请参见 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#bitangent" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat#bitangent</code><ExternalLinkIcon/></a>。</li>
<li><code v-pre>tangent</code> - Tangent（标准化的），用于切线空间（tangent-space）效果，如凹凸贴图（bump mapping）。32位浮点数。每个属性3个分量。请参见 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#tangent" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat#tangent</code><ExternalLinkIcon/></a>。</li>
</ul>
<p>以下属性名通常不是由Geometry创建的，而是由<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive</code><ExternalLinkIcon/></a>或<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryPipeline</code><ExternalLinkIcon/></a>函数添加到Geometry中，以便为渲染几何图形做好准备。</p>
<ul>
<li><code v-pre>position3DHigh</code> - 使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryPipeline.encodeAttribute</code><ExternalLinkIcon/></a>计算得出的已编码64位位置的高32位。32位浮点数。每个属性4个分量。</li>
<li><code v-pre>position3DLow</code> - 使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryPipeline.encodeAttribute</code><ExternalLinkIcon/></a>计算得出的已编码64位位置的低32位。32位浮点数。每个属性4个分量。</li>
<li><code v-pre>position2DHigh</code> - 使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryPipeline.encodeAttribute</code><ExternalLinkIcon/></a>计算得出的已编码的64位2D（Columbus view）位置的高32位。 32位浮点数。每个属性4个分量。</li>
<li><code v-pre>position2DLow</code> - 使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryPipeline.encodeAttribute</code><ExternalLinkIcon/></a>计算得出的已编码的64位2D（Columbus view）位置的低32位。 32位浮点数。每个属性4个分量。</li>
<li><code v-pre>color</code> - 通常从<code v-pre>GeometryInstance#color</code>而来的RGBA颜色(标准化)。32位浮点数。每个属性4个分量。</li>
<li><code v-pre>pickColor</code> - 用于拾取的RGBA颜色。32位浮点数。每个属性4个分量。</li>
</ul>
<p>defaultValue: <code v-pre>undefined</code></p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>geometry<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryAttribute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">componentDatatype</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ComponentDatatype<span class="token punctuation">.</span><span class="token constant">FLOAT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">componentsPerAttribute</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">values</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="">boundingSphere : BoundingSphere</a></strong></p>
<p>一个可选的包围球，完全包围几何图形。这是通常用于筛选（culling）。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><strong><a href="">indices : Array</a></strong></p>
<p>可选的索引数据——与<a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html#primitiveType" target="_blank" rel="noopener noreferrer"><code v-pre>Geometry#primitiveType</code><ExternalLinkIcon/></a>一起——决定几何图形中的图元。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><strong><a href="">primitiveType : PrimitiveType</a></strong></p>
<p>几何图形中的图元类型。这通常是<a href="https://www.vvpstk.com/public/Cesium/Documentation/PrimitiveType.html#.TRIANGLES" target="_blank" rel="noopener noreferrer"><code v-pre>PrimitiveType.TRIANGLES</code><ExternalLinkIcon/></a>，但可以根据具体的几何形状变化。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">computeNumberOfVertices(geometry): number</a></strong></p>
<p>计算几何图形中的顶点数。运行时与顶点的属性数量有关，而与顶点的数量无关。</p>
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
<td style="text-align:left"><code v-pre>geometry</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html" target="_blank" rel="noopener noreferrer">Geometry<ExternalLinkIcon/></a></td>
<td style="text-align:left">几何图形。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>几何图形中的顶点数。</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> numVertices <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Geometry<span class="token punctuation">.</span><span class="token function">computeNumberOfVertices</span><span class="token punctuation">(</span>geometry<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


