<template><div><h1 id="geojson数据-geojsondatasource" tabindex="-1"><a class="header-anchor" href="#geojson数据-geojsondatasource" aria-hidden="true">#</a> GeoJson数据(GeoJsonDataSource)</h1>
<p>GeoJson数据源。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>GeoJsonDataSource(name)</strong></p>
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
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">optional数据源名，如果未定义则使用GeoJson文件名。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">'cesiumContainer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Webgis<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'../../SampleData/ne_10m_us_states.topojson'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">stroke</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">HOTPINK</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">PINK</span><span class="token punctuation">,</span>
  <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">markerSymbol</span><span class="token operator">:</span> <span class="token string">'?'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.clampToGround : Boolean</a></strong></p>
<p>设置/获取几何要素是否贴地。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.crsLinkHrefs : Object</a></strong></p>
<p>获取一个对象，该对象将crs链接的href属性映射到一个回调函数， 该回调函数接受crs properties对象并返回一个Promise，该Promise解析为一个接受GeoJSON坐标的函数， 并将其转换为一个固定在地球上的WGS84笛卡尔坐标。 假设链接具有指定的类型。该对象中的项将优先于<code v-pre>crsLinkHrefs</code>中定义的项，</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.crsLinkTypes : Object</a></strong></p>
<p>获取一个对象，该对象将crs链接的类型属性映射到一个回调函数， 该回调函数接受crs properties对象并返回一个promise，该promise解析为一个接受GeoJSON坐标的函数， 并将其转换为一个固定在地球上的WGS84笛卡尔坐标。 <code v-pre>crsLinkHrefs</code>中的项优先于此对象。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.crsNames : Object</a></strong></p>
<p>获取一个对象，该对象将crs的名称映射到采用GeoJSON坐标的回调函数并将其转换为WGS84固定于地球的笛卡尔坐标。 旧版GeoJSON也可以通过指定完整的EPSG名称将受支持的EPSG类型添加到此列表中，例如' EPSG:4326'。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.fill : Color</a></strong></p>
<p>设置/获取多边形内部的默认颜色。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.markerColor : Color</a></strong></p>
<p>设置/获取地图图钉默认颜色。。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.markerSize : Number</a></strong></p>
<p>设置/获取为地图图钉默认大小。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.markerSymbol : String</a></strong></p>
<p>设置/获取地图图钉默认符号。 任何有效的 <a href="http://mapbox.com/maki/" target="_blank" rel="noopener noreferrer">Maki<ExternalLinkIcon/></a> 标识符，任何单个字符，或空白（如果不使用符号）。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.stroke : Color</a></strong></p>
<p>设置/获取折线和多边形边框默认颜色。</p>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.strokeWidth : Number</a></strong></p>
<p>设置/获取折线和多边形边框默认宽度。</p>
<p><strong><a href="">changedEvent : Event</a></strong></p>
<p>获取将在基础数据更改时引发的事件。</p>
<p><strong><a href="">clock : DataSourceClock</a></strong></p>
<p>此数据源仅定义静态数据，因此此属性始终未定义。</p>
<p><strong><a href="">clustering : EntityCluster</a></strong></p>
<p>设置/获取此数据源的聚类选项。该对象可以在多个数据源之间共享。</p>
<p><strong><a href="">credit : Credit</a></strong></p>
<p>获取将显示为数据源的版权。</p>
<p><strong><a href="">entities : EntityCollection</a></strong></p>
<p>获取实体实例集合。</p>
<p><strong><a href="">errorEvent : Event</a></strong></p>
<p>获取在处理过程中遇到错误时将引发的事件。</p>
<p><strong><a href="">isLoading : Boolean</a></strong></p>
<p>获取是否正在加载数据。</p>
<p><strong><a href="">loadingEvent : Event</a></strong></p>
<p>获取将在数据源启动或停止加载时引发的事件。</p>
<p><strong><a href="">name : String</a></strong></p>
<p>设置/获取实例名字。</p>
<p><strong><a href="">show : Boolean</a></strong></p>
<p>获取是否应显示此数据源。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code> <strong><a href="">GeoJsonDataSource.load(data, options): Promise&lt;GeoJsonDataSource&gt;</a></strong></p>
<p>创建一个根据提供的GeoJSON或TopoJSON数据创建一个新实例的Promise。</p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Object</td>
<td style="text-align:left">url，GeoJSON对象，或者要加载的TopoJSON对象。</td>
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
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional重写要用于解析相对链接的url。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerSize</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerSize</code></td>
<td style="text-align:left">optional为每个点创建一个默认大小的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerSymbol</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerSymbol</code></td>
<td style="text-align:left">optional为每个点创建一个默认符号的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerColor</code></td>
<td style="text-align:left">optional为每个点创建一个默认颜色的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stroke</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.stroke</code></td>
<td style="text-align:left">optional折线和多边形边框默认颜色。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>strokeWidth</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.strokeWidth</code></td>
<td style="text-align:left">optional折线和多边形边框默认宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fill</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.fill</code></td>
<td style="text-align:left">optional多边形内部的默认颜色。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clampToGround</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.clampToGround</code></td>
<td style="text-align:left">optional决定几何要素是否贴地。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>credit</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional版权信息。</td>
</tr>
</tbody>
</table>
<p>返回值:将在数据加载时解析的Promise。</p>
<p><strong><a href="">load(data, options): Promise&lt;GeoJsonDataSource&gt;</a></strong></p>
<p>异步加载提供的GeoJSON或TopoJSON数据，替换任何现有数据。</p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Object</td>
<td style="text-align:left">url, GeoJSON对象, 或者要加载的TopoJSON对象。</td>
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
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional重写要用于解析相对链接的url。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>describe</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/GeoJsonDataSource.html#~describe" target="_blank" rel="noopener noreferrer">GeoJsonDataSource~describe<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.defaultDescribeProperty</code></td>
<td style="text-align:left">optional返回一个属性对象(或一个字符串)的函数，该函数将属性转换为html描述。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerSize</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerSize</code></td>
<td style="text-align:left">optional为每个点创建一个默认大小的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerSymbol</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerSymbol</code></td>
<td style="text-align:left">optional为每个点创建一个默认符号的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>markerColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.markerColor</code></td>
<td style="text-align:left">optional为每个点创建一个默认颜色的地图图钉（像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stroke</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.stroke</code></td>
<td style="text-align:left">optional折线和多边形边框默认颜色。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>strokeWidth</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.strokeWidth</code></td>
<td style="text-align:left">optional折线和多边形边框默认宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fill</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.fill</code></td>
<td style="text-align:left">optional多边形内部的默认颜色。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clampToGround</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>GeoJsonDataSource.clampToGround</code></td>
<td style="text-align:left">optional决定几何要素是否贴地。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>credit</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional版权信息。</td>
</tr>
</tbody>
</table>
<p>返回值: 将在数据加载时解析的Promise。</p>
</div></template>


