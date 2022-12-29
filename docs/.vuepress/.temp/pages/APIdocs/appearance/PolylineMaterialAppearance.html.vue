<template><div><h1 id="polylinematerialappearance" tabindex="-1"><a class="header-anchor" href="#polylinematerialappearance" aria-hidden="true">#</a> PolylineMaterialAppearance</h1>
<p>支持材质着色的<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineGeometry</code><ExternalLinkIcon/></a>的外观。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolylineMaterialAppearance(options)</strong></p>
<p>options具有下列属性的对象：</p>
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
<td style="text-align:left"><code v-pre>translucent</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，几何图形应该是半透明的，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineMaterialAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineMaterialAppearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html" target="_blank" rel="noopener noreferrer">Material<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Material.ColorType</code></td>
<td style="text-align:left"><code v-pre>optional</code>确定片元颜色的材质。</td>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> primitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
        <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>PolylineMaterialAppearance<span class="token punctuation">.</span><span class="token constant">VERTEX_FORMAT</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolylineMaterialAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">material</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Material<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">'Color'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>static</code> <code v-pre>constant</code> <strong><a href="">Cesium.PolylineColorAppearance.VERTEX_FORMAT : VertexFormat</a></strong></p>
<p>所有<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance</code><ExternalLinkIcon/></a>实例都兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。 这只需要一个<code v-pre>position</code>属性。</p>
<p><code v-pre>readOnly</code> <strong><a href="">closed : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了背面剔除。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p>
<p>片段着色器的GLSL源代码。</p>
<p><strong><a href="">material : Material</a></strong></p>
<p>此属性是<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance</code><ExternalLinkIcon/></a>接口的一部分，但<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance</code><ExternalLinkIcon/></a>不使用此属性，因为使用的是完全自定义的片段着色器。</p>
<p>默认值：<code v-pre>undefined</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">renderState : Object</a></strong></p>
<p>渲染几何图形时的WEBGL状态。</p>
<p>渲染状态可以在构造一个 <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance</code><ExternalLinkIcon/></a>例时显式定义， 也可以通过<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance#translucent</code><ExternalLinkIcon/></a>隐式设置。</p>
<p><strong><a href="">translucent : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形应该是半透明的，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexFormat : VertexFormat</a></strong></p>
<p>与此外观实例兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。</p>
<p>默认值：<code v-pre>PolylineColorAppearance.VERTEX_FORMAT</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexShaderSource : String</a></strong></p>
<p>顶点着色器的GLSL源代码。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">getFragmentShaderSource(): String</a></strong></p>
<p>创建完整的GLSL片段着色源。</p>
<p>返回值：完整的GLSL片段着色源。</p>
<p><strong><a href="">getRenderState(): Object</a></strong></p>
<p>获取渲染状态。</p>
<p>返回值：渲染状态。</p>
<p><strong><a href="">isTranslucent() → Boolean</a></strong></p>
<p>基于<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>PolylineColorAppearance#translucent</code><ExternalLinkIcon/></a>确定几何图形是否为半透明。</p>
<p>返回值：如果外观是半透明的，返回<code v-pre>true</code>。</p>
</div></template>


