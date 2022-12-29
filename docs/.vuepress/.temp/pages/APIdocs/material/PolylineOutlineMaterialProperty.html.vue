<template><div><h1 id="线边框材质-polylineoutlinematerialproperty" tabindex="-1"><a class="header-anchor" href="#线边框材质-polylineoutlinematerialproperty" aria-hidden="true">#</a> 线边框材质(PolylineOutlineMaterialProperty)</h1>
<p>线边框材质。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolylineOutlineMaterialProperty(options)</strong></p>
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
<td style="text-align:left"><code v-pre>color</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left">optional颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.BLACK</code></td>
<td style="text-align:left">optional边线颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a> 。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineWidth</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional边线宽度。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">color : Property</a></strong></p>
<p>设置/获取颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a> 。</p>
<p>默认值：<code v-pre>Color.WHITE</code></p>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。</p>
<p><code v-pre>readonly</code> <strong><a href="">isConstant : Boolean</a></strong></p>
<p>获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。</p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>默认值：<code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边线宽度。</p>
<p>默认值：<code v-pre>1.0</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">equals(other): Boolean</a></strong></p>
<p>将此属性与提供的属性进行比较。</p>
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
<td style="text-align:left"><code v-pre>other</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional其他属性。</td>
</tr>
</tbody>
</table>
<p>返回值: 如果相等。则为 <code v-pre>true</code> ，否则为 <code v-pre>false</code>。</p>
<p><strong><a href="">getType(time): String</a></strong></p>
<p>根据提供的时间获取材质的类型 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Material.html" target="_blank" rel="noopener noreferrer"><code v-pre>Material</code><ExternalLinkIcon/></a>。</p>
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
<td style="text-align:left">时间</td>
</tr>
</tbody>
</table>
<p>返回值: 材质类型。</p>
<p><strong><a href="">getValue(time, result): Object</a></strong></p>
<p>据提供的时间获取属性对象。</p>
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
<tr>
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional存储结果的对象（如果省略）将创建并返回一个新实例。</td>
</tr>
</tbody>
</table>
<p>返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。</p>
</div></template>


