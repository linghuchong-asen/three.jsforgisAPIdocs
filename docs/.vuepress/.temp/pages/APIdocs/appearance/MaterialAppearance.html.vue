<template><div><h1 id="任意几何图形外观-materialappearance" tabindex="-1"><a class="header-anchor" href="#任意几何图形外观-materialappearance" aria-hidden="true">#</a> 任意几何图形外观(MaterialAppearance)</h1>
<p>支持材质着色的任意几何图形的外观。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>MaterialAppearance(options)</strong></p>
<p>options具有以下属性的对象：</p>
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
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，几何图形应该是半透明的，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closed</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#renderState</code><ExternalLinkIcon/></a>启用了背面剔除。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>materialSupport</code></td>
<td style="text-align:left">MaterialAppearance.<br />MaterialSupport</td>
<td style="text-align:left"><code v-pre>MaterialAppearance.&lt;br /&gt;MaterialSupport.TEXTURED</code></td>
<td style="text-align:left"><code v-pre>optional</code>支持的材质类型。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html" target="_blank" rel="noopener noreferrer">Material<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Material.ColorType</code></td>
<td style="text-align:left"><code v-pre>optional</code>用于确定片元颜色的材质。</td>
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
    <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>WallGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">materialSupport</span> <span class="token operator">:</span>  Webgis<span class="token punctuation">.</span>MaterialAppearance<span class="token punctuation">.</span>MaterialSupport<span class="token punctuation">.</span><span class="token constant">BASIC</span><span class="token punctuation">.</span>vertexFormat<span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>MaterialAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">material</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Material<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">'Color'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">faceForward</span> <span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>readOnly</code> <strong><a href="">closed : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#renderState</code><ExternalLinkIcon/></a>启用了后表面剔除。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">faceForward : Boolean</a></strong></p>
<p>当 <code v-pre>true</code>时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像<a href="https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>WallGeometry</code><ExternalLinkIcon/></a> 一样着色时，这很有用。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">flat : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p>
<p>片段着色器的GLSL源代码。 完整的片段着色器源是根据<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#material" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#material</code><ExternalLinkIcon/></a>、<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#flat" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#flat</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#faceForward" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#faceForward</code><ExternalLinkIcon/></a>构建的。 使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#getFragmentShaderSource" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#getFragmentShaderSource</code><ExternalLinkIcon/></a>获得完整的源代码。</p>
<p><strong><a href="">material : Material</a></strong></p>
<p>用于确定片元颜色的材质。与其他<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance</code><ExternalLinkIcon/></a>属性不同，它不是只读的，所以外观的材质可以动态改变。</p>
<p>默认值：<code v-pre>Material.ColorType</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">materialSupport : MaterialAppearance.MaterialSupport</a></strong></p>
<p>此实例支持的材质类型。 这影响了所需的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>和顶点、片段着色器的复杂性。</p>
<p>默认值：<code v-pre>MaterialAppearance.MaterialSupport.TEXTURED</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">renderState : Object</a></strong></p>
<p>渲染几何图形时的WEBGL状态。</p>
<p>可以在构造<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance</code><ExternalLinkIcon/></a>实例时显式定义渲染状态， 也可以通过<code v-pre>MaterialAppearance#半透明</code>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#closed" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#closed</code><ExternalLinkIcon/></a>隐式设置渲染状态。</p>
<p><strong><a href="">translucent : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何图形应该是半透明的。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexFormat : VertexFormat</a></strong></p>
<p>与此外观实例兼容的<a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer"><code v-pre>VertexFormat</code><ExternalLinkIcon/></a>。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。</p>
<p>默认值：<code v-pre>MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexShaderSource : String</a></strong></p>
<p>顶点着色器的GLSL源代码。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">getFragmentShaderSource(): String</a></strong></p>
<p>创建完整的GLSL片段着色源。对于<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance</code><ExternalLinkIcon/></a>，这是从<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#fragmentShaderSource" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#fragmentShaderSource</code><ExternalLinkIcon/></a>、<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#material" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#material</code><ExternalLinkIcon/></a>、<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#flat" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#flat</code><ExternalLinkIcon/></a>、<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#faceForward" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#faceForward</code><ExternalLinkIcon/></a>派生出来的。</p>
<p>返回值：完整的GLSL片段着色器。</p>
<p><strong><a href="">getRenderState(): Object</a></strong></p>
<p>获取渲染状态。 这不是最终的渲染状态实例；相反，它可以包含与上下文中创建的呈现状态相同的渲染状态属性的子集。</p>
<p>返回值：渲染状态。</p>
<p><strong><a href="">isTranslucent() → Boolean</a></strong></p>
<p>根据<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialAppearance#translucent</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html#isTranslucent" target="_blank" rel="noopener noreferrer"><code v-pre>Material#isTranslucent</code><ExternalLinkIcon/></a>确定几何图形是否为半透明。</p>
<p>返回值：如果外观是半透明的<code v-pre>true</code>。</p>
</div></template>


