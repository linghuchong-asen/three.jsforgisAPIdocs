<template><div><h1 id="图元组-primitivegroup" tabindex="-1"><a class="header-anchor" href="#图元组-primitivegroup" aria-hidden="true">#</a> 图元组(PrimitiveGroup)</h1>
<p>可以向其中添加图元Primitive。本身也是一种图元，也可以向其中添加PrimitiveGroup</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PrimitiveGroup()</strong></p>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebGis<span class="token punctuation">.</span>PrimitiveGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">destroyPrimitives :boolean</a></strong></p>
<p>确定当<a href=""><code v-pre>PrimitiveGroup.destroy</code></a>删除或<a href=""><code v-pre>PrimitiveGroup.remove</code></a>删除 或<a href=""><code v-pre>PrimitiveGroup.removeAll</code></a>隐式删除集合中的图元时，该图元是否被销毁。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 例1. 默认情况下会销毁图元。</span>
<span class="token keyword">var</span> primitives <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PrimitiveCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> labels <span class="token operator">=</span> primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>LabelCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
primitives <span class="token operator">=</span> primitives<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> labels<span class="token punctuation">.</span><span class="token function">isDestroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 例2. 不销毁集合中的图元。</span>
<span class="token keyword">var</span> primitives <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PrimitiveCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
primitives<span class="token punctuation">.</span>destroyPrimitives <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> labels <span class="token operator">=</span> primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>LabelCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
primitives <span class="token operator">=</span> primitives<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> labels<span class="token punctuation">.</span><span class="token function">isDestroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
labels <span class="token operator">=</span> labels<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 显式销毁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>readOnly</code> <strong><a href="">length: number</a></strong></p>
<p>获取集合中图元的数量。</p>
<p><strong><a href="">show: boolean</a></strong></p>
<p>是否显示集合中的图元。默认值:<code v-pre>true</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">add(primitive, index) : Object</a></strong></p>
<p>向集合中添加图元。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">要添加的图元。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>index</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left">optional要添加图元的索引，如果省略将被添加到集合最底层。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>添加到集合中的图元。</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> billboards <span class="token operator">=</span> scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>BillboardCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><a href="">contains(primitive):  Boolean</a></strong></p>
<p>集合中是否包含此图元。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional需要查询的图元。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>如果找到该图元返回<code v-pre>true</code>，如果图元为undefined或者未找到则返回<code v-pre>false</code>。</p>
<p><strong><a href="">destroy()</a></strong></p>
<p>销毁此集合中每个图元持有的WebGL资源。 显式销毁这个集合允许WebGL资源的确定性释放，而不是依赖于垃圾收集器来销毁这个集合。</p>
<p>因为销毁一个集合会销毁所有包含的图元，所以只有在您确定没有其他代码仍在使用任何一个包含的图元时才销毁此集合。</p>
<p>一旦对象被销毁，它将不能在使用; 调用除<code v-pre>isDestroyed</code>之外的任何函数都会导致<a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer"><code v-pre>DeveloperError</code><ExternalLinkIcon/></a>异常。 因此，将返回值（<code v-pre>undefined</code>）赋给对象，如示例所示。</p>
<p><strong><a href="">get(index):  Object</a></strong></p>
<p>返回指定索引处的图元。</p>
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
<td style="text-align:left"><code v-pre>index</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left">传入的索引。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>返回的<code v-pre>index</code>处的图元。</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 切换集合中每个图元的show属性。</span>
<span class="token keyword">var</span> primitives <span class="token operator">=</span> scene<span class="token punctuation">.</span>primitives<span class="token punctuation">;</span>
<span class="token keyword">var</span> length <span class="token operator">=</span> primitives<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> p <span class="token operator">=</span> primitives<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  p<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span>p<span class="token punctuation">.</span>show<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="">isDestroyed():  Boolean</a></strong></p>
<p>如果该对象没被销毁，返回false。</p>
<p>如果该对象已经被销毁，使用<code v-pre>isDestroyed</code> 会触发 <a href="https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html" target="_blank" rel="noopener noreferrer"><code v-pre>DeveloperError</code><ExternalLinkIcon/></a> 异常.</p>
<p>Returns:</p>
<p>如果该对象没被销毁，返回false。</p>
<p><strong><a href="">lower(primitive)</a></strong></p>
<p>将图元在集合中的位置下移一位（如果所有图元都被绘制在地球上，这意味着在视觉上把图元向下移动了一位）。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional要被向下移动的图元。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">lowerToBottom(primitive)</a></strong></p>
<p>将图元在集合中的位置移到最下面（如果所有图元都被绘制在地球上，这意味着在视觉上把图元移到最下面）。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional被移到到最下面的图元。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">raise(primitive)</a></strong></p>
<p>将图元在集合中的位置上移一位（如果所有图元都被绘制在地球上，这意味着在视觉上把图元向上移动了一位）。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional要被向上移动的图元。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">raiseToTop(primitive)</a></strong></p>
<p>将图元在集合中的位置移到最上面 （如果所有图元都被绘制在地球上，这意味着在视觉上把图元移到最上面）。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional被移到到最上面的图元。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">remove(primitive):  Boolean</a></strong></p>
<p>从集合中移除图元。</p>
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
<td style="text-align:left"><code v-pre>primitive</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">optional将要被移除的图元。</td>
</tr>
</tbody>
</table>
<p>Returns:</p>
<p>如果图元被删除返回<code v-pre>true</code>，如果图元为undefined或者未找到则返回<code v-pre>false</code>。</p>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> billboards <span class="token operator">=</span> scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>BillboardCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="">removeAll()</a></strong></p>
<p>从集合中移除所有图元。</p>
</div></template>


