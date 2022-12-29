<template><div><h1 id="kml数据-kmldatasource" tabindex="-1"><a class="header-anchor" href="#kml数据-kmldatasource" aria-hidden="true">#</a> Kml数据(KmlDataSource)</h1>
<p>Kml数据源。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>KmlDataSource(options)</strong></p>
<p>对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>camera</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Camera.html" target="_blank" rel="noopener noreferrer">Camera<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">用于viewRefreshModes并将相机属性发送到网络链接的相机。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>canvas</code></td>
<td style="text-align:left">Canvas</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于向网络链接发送查看器属性的画布。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left"><code v-pre>optional</code>椭球。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>credit</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>版权信息。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">'cesiumContainer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>KmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'../../SampleData/facilities.kmz'</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
          <span class="token literal-property property">camera</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">,</span>
          <span class="token literal-property property">canvas</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">changedEvent : Event</a></strong></p>
<p>获取将在基础数据更改时引发的事件。</p>
<p><strong><a href="">clock : DataSourceClock</a></strong></p>
<p>获取由加载的KML定义的时钟设置。这表示所有时间动态数据的总可用时间间隔。 如果KML不包含时间动态数据，则此值未定义。</p>
<p><strong><a href="">clustering : EntityCluster</a></strong></p>
<p>设置/获取此数据源的聚类选项。该对象可以在多个数据源之间共享。</p>
<p><strong><a href="">credit : Credit</a></strong></p>
<p>获取将显示为数据源的版权。</p>
<p><strong><a href="">entities : EntityCollection</a></strong></p>
<p>获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>实例集合。</p>
<p><strong><a href="">errorEvent : Event</a></strong></p>
<p>获取在处理过程中遇到错误时将引发的事件。</p>
<p><strong><a href="">isLoading : Boolean</a></strong></p>
<p>获取数据源当前是否正在加载数据。</p>
<p><strong><a href="">loadingEvent : Event</a></strong></p>
<p>获取将在数据源启动或停止加载时引发的事件。</p>
<p><strong><a href="">name : String</a></strong></p>
<p>设置/获取此实例的可读名称。 加载时，该名称将自动设置为KML文档名称。</p>
<p><strong><a href="">refreshEvent : Event</a></strong></p>
<p>获取将在数据源刷新网络链接时引发的事件。</p>
<p><strong><a href="">show : Boolean</a></strong></p>
<p>获取是否应显示此数据源。</p>
<p><strong><a href="">unsupportedNodeEvent : Event</a></strong></p>
<p>当读取到不支持的节点类型时引发该事件。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code> <strong><a href="">KmlDataSource.load(data, options): Promise&lt;KmlDataSource&gt;</a></strong></p>
<p>根据提供的KML数据，创建加载数据的新实例。</p>
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
<td style="text-align:left"><code v-pre>data</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Document | Blob</td>
<td style="text-align:left">URL，包含二进制KMZ数据的URL，已解析的KML文档或Blob或已解析的KML文档。</td>
</tr>
</tbody>
</table>
<p>options对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>camera</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Camera.html" target="_blank" rel="noopener noreferrer">Camera<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">用于viewRefreshModes并将相机属性发送到网络链接的相机。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>canvas</code></td>
<td style="text-align:left">Canvas</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于向网络链接发送查看器属性的画布。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional覆盖用于解析相对链接和其他KML网络要素的url。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clampToGround</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional决定几何要素（Polygons, LineStrings 和 LinearRings）是否贴地。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional椭球。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>credit</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional版权信息。</td>
</tr>
</tbody>
</table>
<p>返回值:</p>
<p>一旦KML加载完成，将解析到一个新的KmlDataSource实例的一个promise。</p>
<p><strong><a href="">load(data, options): Promise&lt;KmlDataSource&gt;</a></strong></p>
<p>异步加载提供的KML数据，替换任何现有数据。</p>
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
<td style="text-align:left"><code v-pre>data</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Document | Blob</td>
<td style="text-align:left">URL，解析KML文档或包含二进制KMZ数据Blob或已解析的KML文档。</td>
</tr>
</tbody>
</table>
<p>options对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional覆盖用于解析相对链接和其他KML网络要素的url。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clampToGround</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional决定几何要素（Polygons, LineStrings 和 LinearRings）是否贴地。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ellipsoid</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html" target="_blank" rel="noopener noreferrer">Ellipsoid<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Ellipsoid.WGS84</code></td>
<td style="text-align:left">optional椭球。</td>
</tr>
</tbody>
</table>
<p>返回值: 一个promise，它将在KML加载后解析到这个实例。</p>
<p><strong><a href="">update(time): Boolean</a></strong></p>
<p>更新所有需要更新的网络连接。</p>
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
<td style="text-align:left"><code v-pre>time</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html" target="_blank" rel="noopener noreferrer">JulianDate<ExternalLinkIcon/></a></td>
<td style="text-align:left">时间。</td>
</tr>
</tbody>
</table>
<p>返回值: 如果此数据源准备在提供的时间显示，则为true，否则为false。</p>
</div></template>


