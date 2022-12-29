<template><div><h1 id="球体-spheregeometry" tabindex="-1"><a class="header-anchor" href="#球体-spheregeometry" aria-hidden="true">#</a> 球体(SphereGeometry)</h1>
<p>以原点为中心的球体的描述。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>SphereGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>radius</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional球体的半径。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stackPartitions</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left">optional将球体分割成堆栈（stacks）的次数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>slicePartitions</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left">optional将球体分割成径向切片的次数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sphere <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>SphereGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> WebgisWebgis<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>SphereGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


