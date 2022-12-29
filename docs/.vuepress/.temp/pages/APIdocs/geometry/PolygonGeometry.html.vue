<template><div><h1 id="多边形-polygongeometry" tabindex="-1"><a class="header-anchor" href="#多边形-polygongeometry" aria-hidden="true">#</a> 多边形(PolygonGeometry)</h1>
<p>多边形几何体，可以具有孔洞。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolygonGeometry(options)</strong></p>
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
<td style="text-align:left"><code v-pre>polygonHierarchy</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html" target="_blank" rel="noopener noreferrer">PolygonHierarchy<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">包含孔洞（holes）的多边形层次结构。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional多边形与椭球面的距离，单位为米。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional多边形的挤压面与椭球面的距离，单位为米。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stRotation</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>perPositionHeight</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeTop</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为false，则将挤出多边形的顶部保留为打开状态。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeBottom</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为false，则将挤出多边形的底部保留为打开状态。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer">ArcType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left">optional多边形边缘必须遵循的线的类型。有效的选项是<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.GEODESIC</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.RHUMB</code><ExternalLinkIcon/></a>。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. create a polygon from points</span>
<span class="token keyword">const</span> polygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">polygonHierarchy</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. create a nested polygon with holes</span>
<span class="token keyword">const</span> polygonWithHole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">polygonHierarchy</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token operator">-</span><span class="token number">109.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">95.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">95.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">109.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
      Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token operator">-</span><span class="token number">107.0</span><span class="token punctuation">,</span> <span class="token number">31.0</span><span class="token punctuation">,</span>
        <span class="token operator">-</span><span class="token number">107.0</span><span class="token punctuation">,</span> <span class="token number">39.0</span><span class="token punctuation">,</span>
        <span class="token operator">-</span><span class="token number">97.0</span><span class="token punctuation">,</span> <span class="token number">39.0</span><span class="token punctuation">,</span>
        <span class="token operator">-</span><span class="token number">97.0</span><span class="token punctuation">,</span> <span class="token number">31.0</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
        Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token operator">-</span><span class="token number">105.0</span><span class="token punctuation">,</span> <span class="token number">33.0</span><span class="token punctuation">,</span>
          <span class="token operator">-</span><span class="token number">99.0</span><span class="token punctuation">,</span> <span class="token number">33.0</span><span class="token punctuation">,</span>
          <span class="token operator">-</span><span class="token number">99.0</span><span class="token punctuation">,</span> <span class="token number">37.0</span><span class="token punctuation">,</span>
          <span class="token operator">-</span><span class="token number">105.0</span><span class="token punctuation">,</span> <span class="token number">37.0</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
          Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token operator">-</span><span class="token number">103.0</span><span class="token punctuation">,</span> <span class="token number">34.0</span><span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">101.0</span><span class="token punctuation">,</span> <span class="token number">34.0</span><span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">101.0</span><span class="token punctuation">,</span> <span class="token number">36.0</span><span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">103.0</span><span class="token punctuation">,</span> <span class="token number">36.0</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygonWithHole<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. create extruded polygon</span>
<span class="token keyword">const</span> extrudedPolygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">polygonHierarchy</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">extrudedHeight</span><span class="token operator">:</span> <span class="token number">300000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>extrudedPolygon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code><strong><a href="">computeRectangle(options, result): Rectangle</a></strong></p>
<p>返回给定options的包围框。</p>
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
<td style="text-align:left"><code v-pre>polygonHierarchy</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html" target="_blank" rel="noopener noreferrer">PolygonHierarchy<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">包含孔洞（holes）的多边形层次结构。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional每个经度和纬度之间的距离，以弧度表示。确定采样位置的数量。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer">ArcType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left">optional多边形边缘必须遵循的线的类型。有效的选项是<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.GEODESIC</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.RHUMB</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
</tbody>
</table>
<p>result:  Rectangle;  <code v-pre>optional</code>存储结果的对象。</p>
<p><code v-pre>static</code><strong><a href="">fromPositions(options): PolygonGeometry</a></strong></p>
<p>从位置数组中对多边形的描述。多边形几何可以用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html" target="_blank" rel="noopener noreferrer"><code v-pre>Primitive</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/GroundPrimitive.html" target="_blank" rel="noopener noreferrer"><code v-pre>GroundPrimitive</code><ExternalLinkIcon/></a>来绘制。</p>
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
<td style="text-align:left"><code v-pre>positions</code></td>
<td style="text-align:left">Vector3[]</td>
<td style="text-align:left"></td>
<td style="text-align:left">定义多边形的角点的位置数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional多边形的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional多边形挤压的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vertexFormat</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html" target="_blank" rel="noopener noreferrer">VertexFormat<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VertexFormat.DEFAULT</code></td>
<td style="text-align:left">optional要计算的顶点属性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stRotation</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional用作参考的椭球体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>CesiumMath.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>perPositionHeight</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeTop</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为false，则将挤出多边形的顶部保留为打开状态。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeBottom</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为false，则将挤出多边形的底部保留为打开状态。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer">ArcType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left">optional多边形边缘必须遵循的线的类型。有效的选项是<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.GEODESIC</code><ExternalLinkIcon/></a>和<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType.RHUMB</code><ExternalLinkIcon/></a>。</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// create a polygon from points</span>
<span class="token keyword">const</span> polygon <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">fromPositions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


