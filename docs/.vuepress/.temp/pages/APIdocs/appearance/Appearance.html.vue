<template><div><h1 id="基础外观-appearance" tabindex="-1"><a class="header-anchor" href="#基础外观-appearance" aria-hidden="true">#</a> 基础外观(Appearance)</h1>
<p>Appearance定义了完整的GLSL顶点和片段着色器，以及用于绘制<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive</code><ExternalLinkIcon/></a>的渲染状态。 所有的appearances实现都基于这个基础的<code v-pre>Appearance</code>接口。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Appearance(options)</strong></p>
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
<td style="text-align:left">optional当<code v-pre>true</code>时，几何图形应该显示为半透明，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#renderState</code><ExternalLinkIcon/></a>启用了alpha混合。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closed</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，几何图形将被关闭，因此<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#renderState</code><ExternalLinkIcon/></a>启用了背面剔除。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html" target="_blank" rel="noopener noreferrer">Material<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Material.ColorType</code></td>
<td style="text-align:left">optional用于确定片元颜色的材质。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexShaderSource</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional可选的GLSL顶点着色器源，用于覆盖默认的顶点着色器。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fragmentShaderSource</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional可选的GLSL片段着色器源，用于覆盖默认的片段着色器。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>renderState</code></td>
<td style="text-align:left">RenderState</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional可选的渲染状态，用于覆盖默认的渲染状态。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>readOnly</code> <strong><a href="">closed: boolean</a></strong></p>
<p>当<code v-pre>true</code>时，启用背面剔除。</p>
<p>默认值：<code v-pre>false</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p>
<p>片段着色器的GLSL源代码。 完整的片段着色器源代码是根据<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#material</code><ExternalLinkIcon/></a>构建的，使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#getFragmentShaderSource" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#getFragmentShaderSource</code><ExternalLinkIcon/></a>获取完整的源代码。</p>
<p><strong><a href="">material : Material</a></strong></p>
<p>用于确定片元颜色的材质。与其他<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance</code><ExternalLinkIcon/></a>的属性不同，它不是只读的，所以外观的材质可以动态改变。</p>
<p><code v-pre>readOnly</code> <strong><a href="">renderState : Object</a></strong></p>
<p>渲染几何图形时的WEBGL状态。</p>
<p><strong><a href="">translucent : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，启用了alpha混合。</p>
<p>默认值：<code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">vertexShaderSource : String</a></strong></p>
<p>顶点着色器的GLSL源代码。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href=""> getFragmentShaderSource(): String</a></strong></p>
<p>获取基于<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#fragmentShaderSource" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#fragmentShaderSource</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#material</code><ExternalLinkIcon/></a>， 为这个外观创建的完整的GLSL片段着色器源。</p>
<p>返回值：完整的GLSL片段着色器。</p>
<p><strong><a href="">getRenderState(): Object</a></strong></p>
<p>获取渲染状态。</p>
<p>返回值：渲染状态。</p>
<p><strong><a href="">isTranslucent(): Boolean</a></strong></p>
<p>根据<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#translucent" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance#translucent</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html#isTranslucent" target="_blank" rel="noopener noreferrer"><code v-pre>Material#isTranslucent</code><ExternalLinkIcon/></a>}确定几何图形是否为半透明。</p>
<p>返回值：如果外观为半透明，返回<code v-pre>true</code> 。</p>
</div></template>


