<template><div><h1 id="图元-primitive" tabindex="-1"><a class="header-anchor" href="#图元-primitive" aria-hidden="true">#</a> 图元(Primitive)</h1>
<p>图元（Primitive）表示场景中的几何图形。这个几何图形可以来自单个的<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryInstance</code><ExternalLinkIcon/></a>，如下例1所示， 或者来自实例数组，允许几何图形来自不同的几何类型，例如<a href="https://www.vvpstk.com/public/Cesium/Documentation/RectangleGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>RectangleGeometry</code><ExternalLinkIcon/></a> 和<a href="https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGeometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>EllipsoidGeometry</code><ExternalLinkIcon/></a>），如例2所示。</p>
<p>图元将几何图形实例和外观（<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance</code><ExternalLinkIcon/></a>）结合在一起，包括<a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html" target="_blank" rel="noopener noreferrer"><code v-pre>Material</code><ExternalLinkIcon/></a>和<code v-pre>RenderState</code>。 大致上几何图形实例定义了结构和位置， 外观定义了视觉效果。解耦几何和外观允许我们混合和匹配它们中的大多数，并彼此独立地添加一个新的几何或外观。</p>
<p>将多个实例组合成一个图元称为批处理，这可以显著提高静态数据的性能。 可以单独选择实例；<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#pick</code><ExternalLinkIcon/></a>返回其<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html#id" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryInstance#id</code><ExternalLinkIcon/></a>。 使用每个实例的外观，例如<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>，每个实例也可以具有唯一的颜色。</p>
<p><a href="https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html" target="_blank" rel="noopener noreferrer"><code v-pre>Geometry</code><ExternalLinkIcon/></a>可以在web worker或主线程上创建和批量处理。前两个示例展示了通过使用几何图形的描述在web worker上创建的几何图形。 第三个示例显示如何通过显式调用<code v-pre>createGeometry</code>方法在主线程上创建几何图形。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p>optional具有以下属性的对象：</p>
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
<td style="text-align:left"><code v-pre>geometryInstances</code></td>
<td style="text-align:left">GeometryInstance|<br />GeometryInstance[]</td>
<td style="text-align:left"><a href="">GeometryInstance</a></td>
<td style="text-align:left">optional要渲染的几何实例数组或者单个的几何实例。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>appearance</code></td>
<td style="text-align:left"><a href="">Appearance</a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional用于渲染图元的外观。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>depthFailAppearance</code></td>
<td style="text-align:left"><a href="">Appearance</a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional深度测试失败时，用于使该图元着色的外观。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>show</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional图元是否被显示。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>modelMatrix</code></td>
<td style="text-align:left"><a href="">Matrix4</a></td>
<td style="text-align:left"><code v-pre>Matrix4.IDENTITY</code></td>
<td style="text-align:left">optional将图元（所有几何实例），从模型坐标系转换到世界坐标系的4*4矩阵。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexCacheOptimize</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，几何顶点被优化为前后顶点着色器缓存。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>interleave</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，几何顶点属性是交错的，这可以略微提高渲染性能，但增加了加载时间。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>compressVertices</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，几何顶点被压缩，这将节省内存。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>releaseGeometryInstances</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，该图元不保留对输入<code v-pre>geometryInstances</code>的引用，以节省内存。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>allowPicking</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，每个几何体实例只能用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#pick</code><ExternalLinkIcon/></a>来拾取。 当<code v-pre>false</code>时, 节省GPU内存。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>cull</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，渲染器视锥和水平视点将根据图元的包围体来裁剪它们。如果您手动裁剪图元，请将其设置为<code v-pre>false</code>可获得较小的性能提升。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>asynchronous</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional确定图元是异步创建（true）还是阻塞直到准备就绪。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>debugShowBoundingVolume</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional只是用来调试，是否显示图元的包围球。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ShadowMode.html" target="_blank" rel="noopener noreferrer">ShadowMode<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ShadowMode.DISABLED</code></td>
<td style="text-align:left">optional图元是否从每个光源投射或接收阴影。</td>
</tr>
</tbody>
</table>
<p>Examples:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.画一个半透明，表面为棋盘图案的椭圆。</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipseGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">center</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">semiMinorAxis</span> <span class="token operator">:</span> <span class="token number">500000.0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">semiMajorAxis</span> <span class="token operator">:</span> <span class="token number">1000000.0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rotation</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token constant">PI_OVER_FOUR</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_AND_ST</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'object returned when this instance is picked and to get/set per-instance attributes'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> instance<span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidSurfaceAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">material</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Material<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">'Checkerboard'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 2. 用独特的颜色绘制不同的实例</span>
<span class="token keyword">var</span> rectangleInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">140.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>PerInstanceColorAppearance<span class="token punctuation">.</span><span class="token constant">VERTEX_FORMAT</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'rectangle'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ellipsoidInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">radii</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">1000000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_AND_NORMAL</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modelMatrix</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByTranslation</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">95.59777</span><span class="token punctuation">,</span> <span class="token number">40.03883</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'ellipsoid'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token punctuation">[</span>rectangleInstance<span class="token punctuation">,</span> ellipsoidInstance<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 3. 在主线程上创建几何图形。</span>
scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">geometry</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>EllipsoidGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">radii</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">1000000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_AND_NORMAL</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modelMatrix</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByTranslation</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>
        Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">95.59777</span><span class="token punctuation">,</span> <span class="token number">40.03883</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">'ellipsoid'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>readonly</code> <strong><a href="">allowPicking : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，每个几何体实例只能用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#pick</code><ExternalLinkIcon/></a>来拾取。 当<code v-pre>false</code>时，节省GPU内存。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><strong><a href="">appearance : Appearance</a></strong></p>
<p>用于给图元着色的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>Appearance</code><ExternalLinkIcon/></a>。 每个几何实例都以相同的外观着色。 有些外观，如<a href="https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html" target="_blank" rel="noopener noreferrer"><code v-pre>PerInstanceColorAppearance</code><ExternalLinkIcon/></a>允许赋予每个实例唯一的值。</p>
<p>defaultValue: <code v-pre>undefined</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">asynchronous : Boolean</a></strong></p>
<p>确定图元是异步创建（true）还是阻塞直到准备就绪。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">compressVertices : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何顶点被压缩，这将节省内存。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><strong><a href="">cull : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，渲染器视锥和水平视点将根据图元的包围体来裁剪它们。 如果您手动裁剪图元，请将其设置为 false 可获得较小的性能提升。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><code v-pre>readOnly</code> <strong><a href="">geometryInstances : GeometryInstance[]|GeometryInstance</a></strong></p>
<p>这个图元渲染的几何实例，它有可能为undefined（当构造图元时，如果<code v-pre>options.releaseGeometryInstances</code>属性为true）。</p>
<p>在图元被渲染后，更改此属性无效。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><strong><a href="">modelMatrix : Matrix4</a></strong></p>
<p>将图元（所有几何实例），从模型坐标系转换到世界坐标系的4*4矩阵。 当这为单位矩阵时，图元是在世界坐标系（即地球的WGS84坐标）中绘制的。 本地参考系可以通过提供一个不同的转换矩阵来使用，就像<a href="https://www.vvpstk.com/public/Cesium/Documentation/Transforms.html#.eastNorthUpToFixedFrame" target="_blank" rel="noopener noreferrer"><code v-pre>Transforms.eastNorthUpToFixedFrame</code><ExternalLinkIcon/></a>返回的那样。</p>
<p>此属性仅在3D模式下受支持。</p>
<p>defaultValue: <code v-pre>Matrix4.IDENTITY</code></p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> origin <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">95.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">200000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>modelMatrix <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>readOnly</code> <strong><a href="">ready : Boolean</a></strong></p>
<p>确定图元是否完成并准备渲染。如果为true，在下一次调用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html#update" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive#update</code><ExternalLinkIcon/></a>时渲染图元。</p>
<p><code v-pre>readOnly</code> <strong><a href="">releaseGeometryInstances : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，该图元不保留对输入<code v-pre>geometryInstances</code>的引用，以节省内存。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><strong><a href="">shadows : ShadowMode</a></strong></p>
<p>确定此图元是否从每个光源投射或接收阴影。</p>
<p>defaultValue: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Boolean</a></strong></p>
<p>图元是否显示，这将影响到所有的几何图形。</p>
<p>defaultValue: <code v-pre>true</code></p>
<p><code v-pre>readOnly</code><strong><a href="">vertexCacheOptimize : Boolean</a></strong></p>
<p>当<code v-pre>true</code>时，几何顶点被优化为前后顶点着色器缓存。</p>
<p>defaultValue: <code v-pre>true</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">destroy()</a></strong></p>
<p>销毁此对象持有的WebGL资源。</p>
<p>一旦对象被销毁，它将不能在使用; 调用除<code v-pre>isDestroyed</code>之外的任何函数都会导致<a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer"><code v-pre>DeveloperError</code><ExternalLinkIcon/></a>异常。 因此，将返回值（<code v-pre>undefined</code>）赋给对象，如示例所示。</p>
<p><strong><a href="">getGeometryInstanceAttributes(id):  Object</a></strong></p>
<p>返回 <a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryInstance</code><ExternalLinkIcon/></a> 的每个实例的可修改属性。</p>
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
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left">*</td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html" target="_blank" rel="noopener noreferrer"><code v-pre>GeometryInstance</code><ExternalLinkIcon/></a> 的ID。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>以属性格式表示的类型化数组；如果没有实例，则未定义类型</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> attributes <span class="token operator">=</span> primitive<span class="token punctuation">.</span><span class="token function">getGeometryInstanceAttributes</span><span class="token punctuation">(</span><span class="token string">'an id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attributes<span class="token punctuation">.</span>color <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">toValue</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attributes<span class="token punctuation">.</span>show <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ShowGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">toValue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attributes<span class="token punctuation">.</span>distanceDisplayCondition <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>DistanceDisplayConditionGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">toValue</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attributes<span class="token punctuation">.</span>offset <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>OffsetGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">toValue</span><span class="token punctuation">(</span>Cartesian3<span class="token punctuation">.</span><span class="token constant">IDENTITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href=""> isDestroyed(): Boolean</a></strong></p>
<p>如果该对象没被销毁，返回false。</p>
<p>如果该对象已经被销毁，使用<code v-pre>isDestroyed</code>会触发 <a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer"><code v-pre>DeveloperError</code><ExternalLinkIcon/></a> 异常。</p>
<p>Returns: <code v-pre>false</code></p>
<p><strong><a href="">update()</a></strong></p>
<p>当<a href="https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html" target="_blank" rel="noopener noreferrer"><code v-pre>Viewer</code><ExternalLinkIcon/></a>或<a href="https://www.vvpstk.com/public/Cesium/Documentation/CesiumWidget.html" target="_blank" rel="noopener noreferrer"><code v-pre>CesiumWidget</code><ExternalLinkIcon/></a>渲染场景以获得渲染此图元所需的draw命令时调用。</p>
<p>不要直接调用此函数。这被记录下来只是为了列出在场景渲染时可能传播的异常：</p>
<p>Throws:</p>
<ul>
<li><a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer">DeveloperError<ExternalLinkIcon/></a> : 所有实例几何必须具有相同的primaryType。</li>
<li><a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer">DeveloperError<ExternalLinkIcon/></a> : 外观和材质具有相同名称的uniform。</li>
<li><a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer">DeveloperError<ExternalLinkIcon/></a> : Primitive.modelMatrix仅在3D模式下受支持。</li>
<li><a href="https://www.vvpstk.com/public/Cesium/Documentation/RuntimeError.html" target="_blank" rel="noopener noreferrer">RuntimeError<ExternalLinkIcon/></a> : 需要使用顶点纹理获取支持来渲染具有每个实例属性的图元。顶点纹理图像单元的最大数量必须大于零。</li>
</ul>
</div></template>


