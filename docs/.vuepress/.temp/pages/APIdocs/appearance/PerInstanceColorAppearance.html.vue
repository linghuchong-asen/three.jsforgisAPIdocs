<template><div><h1 id="perinstancecolorappearance" tabindex="-1"><a class="header-anchor" href="#perinstancecolorappearance" aria-hidden="true">#</a> PerInstanceColorAppearance</h1>
<p>带有颜色属性的<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryInstance</code><ExternalLinkIcon/></a>实例的外观。 这允许使用相同的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive</code><ExternalLinkIcon/></a>绘制几个几何实例，每个实例使用不同的颜色，如下面的第二个示例所示。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PerInstanceColorAppearance(options)</strong></p>
<p>options具有下列属性的对象:</p>
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
<td style="text-align:left"><code v-pre>flat</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>faceForward</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>!options.closed</code></td>
<td style="text-align:left"><code v-pre>optional</code>当 <code v-pre>true</code>时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像<a href="https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>WallGeometry</code><ExternalLinkIcon/></a> 一样着色时，这很有用。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>translucent</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，几何图形应该是半透明的，因此 <a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closed</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了背面剔除。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexShaderSource</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>可选的GLSL顶点着色器源覆盖默认的顶点着色器。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fragmentShaderSource</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>可选的GLSL片段着色器源覆盖默认的片段着色器。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>renderState</code></td>
<td style="text-align:left">RenderState</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>可选的渲染状态来覆盖默认的渲染状态。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 一条白色的线段</span>
<span class="token keyword">var</span> primitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>SimplePolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
        <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">flat</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">translucent</span> <span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一个图元中有两个矩形，并且具有不同的颜色。</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> anotherInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> rectanglePrimitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token punctuation">[</span>instance<span class="token punctuation">,</span> anotherInstance<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>static</code> <code v-pre>constant</code> <strong><a href="">Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT : VertexFormat</a></strong></p>
<p>当<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#flat</code><ExternalLinkIcon/></a>为 <code v-pre>true</code>时， 所有<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>实例都兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。这只需要一个<code v-pre>position</code>属性。</p>
<p><code v-pre>static</code> <code v-pre>constant</code> <strong><a href="">Cesium.PerInstanceColorAppearance.VERTEX_FORMAT : VertexFormat</a></strong></p>
<p>所有<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>实例都兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。 这只需要<code v-pre>position</code> and <code v-pre>normal</code> 属性。</p>
<p><code v-pre>readOnly</code> <strong><a href="">closed : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了后表面剔除。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">faceForward : Boolean</a></strong></p>
<p>当 <code v-pre>true</code>时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像<a href="https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>WallGeometry</code><ExternalLinkIcon/></a> 一样着色时，这很有用。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">flat : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p>
<p>片段着色器的GLSL源代码。</p>
<p><strong><a href="">material : Material</a></strong></p>
<p>此属性是<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance</code><ExternalLinkIcon/></a>接口的一部分，但<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>不使用此属性，因为使用的是完全自定义的片段着色器。</p>
<p>默认值：<code v-pre>undefined</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">renderState : Object</a></strong></p>
<p>渲染几何图形时的WEBGL状态。</p>
<p>渲染状态可以在构造一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>例时显式定义， 也可以通过<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#translucent</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#closed" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#closed</code><ExternalLinkIcon/></a>隐式设置。</p>
<p><strong><a href="">translucent : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形应该是半透明的，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexFormat : VertexFormat</a></strong></p>
<p>与此外观实例兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。</p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexShaderSource : String</a></strong></p>
<p>顶点着色器的GLSL源代码。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">getFragmentShaderSource(): String</a></strong></p>
<p>创建完整的GLSL片段着色器。 对于<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>，这是从<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#fragmentShaderSource" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#fragmentShaderSource</code><ExternalLinkIcon/></a>、<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#flat</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#faceForward" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#faceForward</code><ExternalLinkIcon/></a>派生出来的。</p>
<p>返回值：完整的GLSL片段着色器。</p>
<p><strong><a href="">getRenderState() → Object</a></strong></p>
<p>创建渲染状态。</p>
<p>返回值：渲染状态。</p>
<p><strong><a href="">isTranslucent() → Boolean</a></strong></p>
<p>确定几何图形是否是半透明 <a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance#translucent</code><ExternalLinkIcon/></a>.</p>
<p>返回值：如果是半透明，返回<code v-pre>true</code>。</p>
</div></template>


