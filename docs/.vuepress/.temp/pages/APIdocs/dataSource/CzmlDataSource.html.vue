<template><div><h1 id="czml数据-czmldatasource" tabindex="-1"><a class="header-anchor" href="#czml数据-czmldatasource" aria-hidden="true">#</a> CZML数据(CzmlDataSource)</h1>
<p>CZML数据源。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>CzmlDataSource(name)</strong></p>
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
<td style="text-align:left">optional数据源的可选名称。如果加载的文档包含名称，则该值将被覆盖。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>static</code> <strong><a href="">CzmlDataSource.updaters : Array</a></strong></p>
<p>获取CZML处理函数的数组。</p>
<p><strong><a href="">changedEvent : Event</a></strong></p>
<p>获取在基础数据更改时引发的事件。</p>
<p><strong><a href="">clock : DataSourceClock</a></strong></p>
<p>获取加载的CZML定义的时钟设置。如果在CZML中没有显式定义时钟， 则返回所有对象的组合可用性。如果仅存在静态数据，则此值未定义。</p>
<p><strong><a href="">clustering : EntityCluster</a></strong></p>
<p>获取或设置此数据源的聚类选项。该对象可以在多个数据源之间共享。</p>
<p><strong><a href="">credit : Credit</a></strong></p>
<p>获取要显示的版权信息。</p>
<p><strong><a href="">entities : EntityCollection</a></strong></p>
<p>获取实体<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>实例的集合。</p>
<p><strong><a href="">errorEvent : Event</a></strong></p>
<p>获取在处理过程中遇到错误时将引发的事件。</p>
<p><strong><a href="">isLoading : Boolean</a></strong></p>
<p>获取/设置数据源当前是否正在加载数据。</p>
<p><strong><a href="">loadingEvent : Event</a></strong></p>
<p>获取一个isLoading的值更改时将引发的事件。</p>
<p><strong><a href="">name : String</a></strong></p>
<p>为该实例获取可读的名字。</p>
<p><strong><a href="">show : Boolean</a></strong></p>
<p>获取是否应显示此数据源。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><code v-pre>static</code> <strong><a href="">CzmlDataSource.load(czml, options): Promise&lt;CzmlDataSource&gt;</a></strong></p>
<p>创建对使用提供的CZML数据加载的新实例的Promise。</p>
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
<td style="text-align:left"><code v-pre>czml</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Object</td>
<td style="text-align:left">将被处理的url或czml对象。</td>
</tr>
</tbody>
</table>
<p>options对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left">optional重写要用于解析相对链接的url。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>credit</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | String</td>
<td style="text-align:left">optional用于显示在Canvas的版权信息。</td>
</tr>
</tbody>
</table>
<p>返回值: 处理数据后解析到新实例的Promise。</p>
<p><code v-pre>static</code> <strong><a href="">CzmlDataSource.processMaterialPacketData(object, propertyName, packetData, interval, sourceUri, entityCollection)</a></strong></p>
<p>自定义CZML更新器（updater）函数使用的帮助函数,它从CZML包创建或更新材质属性<a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html" target="_blank" rel="noopener noreferrer"><code v-pre>MaterialProperty</code><ExternalLinkIcon/></a>。</p>
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
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">将在其上添加或更新属性的对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>propertyName</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">对象的属性名。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>packetData</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">正在被处理的czml包。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>interval</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html" target="_blank" rel="noopener noreferrer">TimeInterval<ExternalLinkIcon/></a></td>
<td style="text-align:left">A constraining interval for which the data is valid.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">正在处理的数据的原始uri。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>entityCollection</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html" target="_blank" rel="noopener noreferrer">EntityCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left">正在处理的实体集合。</td>
</tr>
</tbody>
</table>
<p><code v-pre>static</code> <strong><a href="">CzmlDataSource.processPacketData(type, object, propertyName, interval, sourceUri, entityCollection)</a></strong></p>
<p>自定义CZML更新器（updater）函数使用的帮助函数，它从CZML包创建或更新属性<a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer"><code v-pre>Property</code><ExternalLinkIcon/></a>。</p>
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
<td style="text-align:left"><code v-pre>type</code></td>
<td style="text-align:left">function</td>
<td style="text-align:left">正在处理的属性的构造函数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">此对象拥有以下属性：</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>propertyName</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">对象的属性名。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>interval</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html" target="_blank" rel="noopener noreferrer">TimeInterval<ExternalLinkIcon/></a></td>
<td style="text-align:left">A constraining interval for which the data is valid.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">正在处理的数据的原始uri。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>entityCollection</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html" target="_blank" rel="noopener noreferrer">EntityCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left">正在处理的实体集合。</td>
</tr>
</tbody>
</table>
<p><code v-pre>static</code> <strong><a href="">CzmlDataSource.processPositionPacketData(object, propertyName, packetData, interval, sourceUri, entityCollection)</a></strong></p>
<p>自定义CZML更新器（updater）函数使用的帮助函数,它从CZML包创建或更新位置属性<a href="https://www.vvpstk.com/public/Cesium/Documentation/PositionProperty.html" target="_blank" rel="noopener noreferrer"><code v-pre>PositionProperty</code><ExternalLinkIcon/></a>。</p>
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
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">此对象拥有以下属性：</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>propertyName</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">对象的属性名。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>packetData</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">正在被处理的czml包。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>interval</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html" target="_blank" rel="noopener noreferrer">TimeInterval<ExternalLinkIcon/></a></td>
<td style="text-align:left">A constraining interval for which the data is valid.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sourceUri</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">正在处理的数据的原始uri。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>entityCollection</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html" target="_blank" rel="noopener noreferrer">EntityCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left">正在处理的实体集合。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">load(czml, options): Promise&lt;CzmlDataSource&gt;</a></strong></p>
<p>处理提供的url或CZML对象，替换现有数据。</p>
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
<td style="text-align:left"><code v-pre>czml</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Object</td>
<td style="text-align:left">要处理的url或CZML对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>options</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional此对象拥有以下属性：NameTypeDescription<code v-pre>sourceUri</code>Stringoptional重写要用于解析相对链接的url。<code v-pre>credit</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Credit.html" target="_blank" rel="noopener noreferrer">Credit<ExternalLinkIcon/></a> | Stringoptional版权信息。</td>
</tr>
</tbody>
</table>
<p>返回值: 处理数据后解析到此实例的Promise。</p>
<p><strong><a href="">process(czml, options): Promise&lt;CzmlDataSource&gt;</a></strong></p>
<p>处理提供的url或CZML对象，而不清除任何现有数据。</p>
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
<td style="text-align:left"><code v-pre>czml</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Resource.html" target="_blank" rel="noopener noreferrer">Resource<ExternalLinkIcon/></a> | String | Object</td>
<td style="text-align:left">要处理的url或CZML对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>options</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional此对象拥有以下属性：NameTypeDescription<code v-pre>sourceUri</code>Stringoptional重写要用于解析相对链接的url。</td>
</tr>
</tbody>
</table>
<p>返回值: 处理数据后解析到此实例的Promise。</p>
</div></template>


