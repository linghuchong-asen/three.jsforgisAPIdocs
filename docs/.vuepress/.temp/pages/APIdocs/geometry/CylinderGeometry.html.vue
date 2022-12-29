<template><div><h1 id="圆柱-cylindergeometry" tabindex="-1"><a class="header-anchor" href="#圆柱-cylindergeometry" aria-hidden="true">#</a> 圆柱(CylinderGeometry)</h1>
<p>圆柱几何体</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>CylinderGeometry(optons)</strong></p>
<p>optons对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>length</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">圆柱体的长度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>topRadius</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">圆柱体顶部的半径。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bottomRadius</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">圆柱体底部的半径。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>slices</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>128</code></td>
<td style="text-align:left"><code v-pre>optional</code>圆柱体周边的边数。</td>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建圆柱体几何</span>
<span class="token keyword">var</span> cylinder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>CylinderGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">topRadius</span><span class="token operator">:</span> <span class="token number">80000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bottomRadius</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>CylinderGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>cylinder<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
</div></template>


