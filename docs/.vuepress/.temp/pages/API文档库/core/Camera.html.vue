<template><div><h1 id="相机-camera" tabindex="-1"><a class="header-anchor" href="#相机-camera" aria-hidden="true">#</a> 相机(Camera)</h1>
<p>由位置、方向和视锥体定义的相机。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Camera(scene: Scene)</strong></p>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebGis<span class="token punctuation">.</span>Camera</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">DEFAULT_OFFSET</a></strong></p>
<p>当相机拉近到物体包围球时，默认的heading/pitch/range值。</p>
<p><strong><a href="">DEFAULT_VIEW_FACTOR</a></strong></p>
<p>该值用来确定相机位置，当值为0是相机观察范围是整个<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>，大于0时远离<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>， 小于0时向<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>拉近。</p>
<p><strong><a href="">DEFAULT_VIEW_RECTANGLE</a></strong></p>
<p>相机在创建时查看的默认矩形位置。</p>
<p><strong><a href="">direction </a></strong></p>
<p>相机的观察方向。</p>
<p><strong><a href="">frustum </a></strong></p>
<p>视锥(平截头体)。可选值：<code v-pre>PerspectiveFrustum</code>，<code v-pre>OrthographicFrustum</code>;默认值<code v-pre>PerspectiveFrustum</code></p>
<p><strong><a href="">heading</a></strong></p>
<p>获取相机的偏航角，以弧度表示。</p>
<p><strong><a href="">pitch</a></strong></p>
<p>获取相机的俯仰角，以弧度表示。</p>
<p><strong><a href="">position</a></strong></p>
<p>相机的位置。</p>
<p><strong><a href="">roll</a></strong></p>
<p>获取相机的翻滚角，以弧度表示。</p>
<p><strong><a href="">up </a></strong></p>
<p>相机向上的方向。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">flyTo(options)</a></strong></p>
<p>options具有下列属性：</p>
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
<td style="text-align:left"><code v-pre>destination</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left">相机的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>orientation</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"><code v-pre>可选</code>optional包含相机偏航角、俯仰角、翻滚角的对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>duration</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>可选</code>optional飞行时间以秒为单位。</td>
</tr>
</tbody>
</table>
<p><strong><a href="">lookAt(target:Vector3)</a></strong></p>
<p>使用目标和偏移量设置相机的位置和方向，目标必须用世界坐标表示，偏移量可以是一个笛卡尔坐标，也可以是在以目标为中心的局部东北向上参考系中的heading/pitch/range。</p>
</div></template>


