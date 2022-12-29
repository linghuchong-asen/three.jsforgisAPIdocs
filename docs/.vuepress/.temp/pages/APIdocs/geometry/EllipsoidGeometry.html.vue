<template><div><h1 id="椭球-ellipsoidgeometry" tabindex="-1"><a class="header-anchor" href="#椭球-ellipsoidgeometry" aria-hidden="true">#</a> 椭球(EllipsoidGeometry)</h1>
<p>以原点为中心的椭球几何体</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>EllipsoidGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>radii</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left"><code v-pre>Vector3(1.0, 1.0, 1.0)</code></td>
<td style="text-align:left"><code v-pre>optional</code>椭球体在x、y和z方向上的半径。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>innerRadii</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left"><code v-pre>options.radii</code></td>
<td style="text-align:left"><code v-pre>optional</code>椭球体在x、y和z方向上的内半径。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumClock</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>从正x轴向正y轴测得的在xy平面上的最小角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumClock</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>2*PI</code></td>
<td style="text-align:left"><code v-pre>optional</code>从正x轴到正y轴所测得的在xy平面上的最大角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumCone</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>从正z轴到负z轴的测得的最小角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumCone</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>PI</code></td>
<td style="text-align:left"><code v-pre>optional</code>从正z轴到负z轴的测得的最大角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stackPartitions</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left"><code v-pre>optional</code>将椭球体分割成堆栈（stacks）的次数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>slicePartitions</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left"><code v-pre>optional</code>将椭球分割成径向切片（radial slices）的次数。</td>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ellipsoid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>EllipsoidGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">radii</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">1000000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>EllipsoidGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>ellipsoid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


