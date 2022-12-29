<template><div><h1 id="视窗-viewer" tabindex="-1"><a class="header-anchor" href="#视窗-viewer" aria-hidden="true">#</a> 视窗(Viewer)</h1>
<p>视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Viewer(containerId,options)</strong></p>
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
<td style="text-align:left"><code v-pre>container</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left">将容纳Viewer的HTML DOM 元素或ID。</td>
</tr>
</tbody>
</table>
<p>对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>animation</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional是否创建Animation部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>baseLayerPicker</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional是否创建BaseLayerPicker部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fullscreenButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建FullscreenButton部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vrButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional如果设置为true，将创建VRButton部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>geocoder</code></td>
<td style="text-align:left">Boolean | Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/GeocoderService.html" target="_blank" rel="noopener noreferrer">GeocoderService<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建Geocoder部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>homeButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建HomeButton部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>infoBox</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建InfoBox部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sceneModePicker</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，将不会创建SceneModePicker部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>selectionIndicator</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建SelectionIndicator部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>timeline</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，则不会创建Timeline部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>navigationHelpButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果设置为false，将不会创建NavigationHelpButton。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:150px"><code v-pre>navigationInstructionsInitiallyVisible</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果导航指令最初应该是可见的，则为True；如果在用户显式单击按钮之前不应该显示，则为false。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scene3DOnly</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional当<code v-pre>true</code>时，为了节省GPU内存，每个几何实例只会在3D下被渲染。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shouldAnimate</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional如果时钟默认尝试使仿真时间前进，则为<code v-pre>true</code>，否则为<code v-pre>false</code>。此选项优先于设置<a href="https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#clockViewModel" target="_blank" rel="noopener noreferrer"><code v-pre>Viewer#clockViewModel</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clockViewModel</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ClockViewModel.html" target="_blank" rel="noopener noreferrer">ClockViewModel<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new ClockViewModel(options.clock)</code></td>
<td style="text-align:left">optional用于控制当前时间的ClockViewModel。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>selectedImageryProviderViewModel</code></div></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html" target="_blank" rel="noopener noreferrer">ProviderViewModel<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional如果没有提供第一个可用的基本图层，则使用当前基本图像层的视图模型。此值仅在options.baseLayerPicker设置为true时有效。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>imageryProviderViewModels</code></div></td>
<td style="text-align:left">Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html" target="_blank" rel="noopener noreferrer">ProviderViewModel<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left"><code v-pre>createDefaultImageryProviderViewModels()</code></td>
<td style="text-align:left">optional可从BaseLayerPicker中选择的ProviderViewModels数组。此值仅在options.baseLayerPicker设置为true时有效。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>selectedTerrainProviderViewModel</code></div></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html" target="_blank" rel="noopener noreferrer">ProviderViewModel<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional当前基本地形图层的视图模型，如果没有提供，则使用第一个可用的基本图层。此值仅在options.baseLayerPicker设置为true时有效。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>terrainProviderViewModels</code></div></td>
<td style="text-align:left">Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html" target="_blank" rel="noopener noreferrer">ProviderViewModel<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left"><code v-pre>createDefaultTerrainProviderViewModels()</code></td>
<td style="text-align:left">optional可从BaseLayerPicker中选择的ProviderViewModels数组。 此值仅在options.baseLayerPicker设置为true时有效。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>imageryProvider</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ImageryProvider.html" target="_blank" rel="noopener noreferrer">ImageryProvider<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>createWorldImagery()</code></td>
<td style="text-align:left">optional要使用的 imageryProvider。此值仅在options.baseLayerPicker设置为false时有效。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>terrainProvider</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/TerrainProvider.html" target="_blank" rel="noopener noreferrer">TerrainProvider<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new EllipsoidTerrainProvider()</code></td>
<td style="text-align:left">optional要使用的 terrainProvider。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>skyBox</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/SkyBox.html" target="_blank" rel="noopener noreferrer">SkyBox<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional用于渲染星辰的天空盒，未定义时，使用默认星辰效果。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>skyAtmosphere</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/SkyAtmosphere.html" target="_blank" rel="noopener noreferrer">SkyAtmosphere<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional环绕地球边缘的蓝天和光晕效果，设置为<code v-pre>false</code>可将其关闭。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fullscreenElement</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left"><code v-pre>document.body</code></td>
<td style="text-align:left">optional当按下全屏按钮时，要放置到全屏模式的元素或id。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>useDefaultRenderLoop</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果此部件需要控制渲染循环，则为true，否则为false。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>targetFrameRate</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional使用默认渲染循环时的目标帧速率。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>showRenderLoopErrors</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为true，如果出现渲染循环错误，此部件将自动向用户显示包含错误的HTML面板。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>useBrowserRecommendedResolution</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional如果为true，则按照浏览器推荐的分辨率渲染，忽略<code v-pre>window.devicePixelRatio</code>。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>automaticallyTrackDataSourceClocks</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为true，此部件将自动跟踪新添加的数据源的时钟设置，并在数据源的时钟发生更改时进行更新。如果想要独立配置时钟，请将此设置为false。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>contextOptions</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left">optionalContext 和 WebGL 的创建属性，与传递给<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html" target="_blank" rel="noopener noreferrer"><code v-pre>Scene</code><ExternalLinkIcon/></a>的<code v-pre>options</code>相一致。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sceneMode</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/SceneMode.html" target="_blank" rel="noopener noreferrer">SceneMode<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>SceneMode.SCENE3D</code></td>
<td style="text-align:left">optional初始场景模式（SceneMode）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapProjection</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MapProjection.html" target="_blank" rel="noopener noreferrer">MapProjection<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new GeographicProjection()</code></td>
<td style="text-align:left">optional在2D和哥伦布视图模式中使用的地图投影。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>globe</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Globe.html" target="_blank" rel="noopener noreferrer">Globe<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new Globe(mapProjection.ellipsoid)</code></td>
<td style="text-align:left">optional场景中使用的地球。如果设置为<code v-pre>false</code>，则不添加地球。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>orderIndependentTranslucency</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional如果为true，且设备支持，则使用与顺序无关的半透明性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>creditContainer</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional包含<a href="https://www.vvpstk.com/public/Cesium/Documentation/CreditDisplay.html" target="_blank" rel="noopener noreferrer"><code v-pre>CreditDisplay</code><ExternalLinkIcon/></a>的DOM元素或ID。如果没有指定，认证（credits）将添加到部件本身的底部。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>creditViewport</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left"></td>
<td style="text-align:left">optional包含由<a href="https://www.vvpstk.com/public/Cesium/Documentation/CreditDisplay.html" target="_blank" rel="noopener noreferrer"><code v-pre>CreditDisplay</code><ExternalLinkIcon/></a>创建的认证（credit）弹出窗口的DOM元素或ID。如果没有指定，它将出现在部件本身上。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>dataSources</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/DataSourceCollection.html" target="_blank" rel="noopener noreferrer">DataSourceCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new DataSourceCollection()</code></td>
<td style="text-align:left">optional由部件可视化的数据源集合。如果提供了该参数，则假定该实例为调用者所有，并且不会在销毁查看器（viewer）时销毁该实例。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>terrainExaggeration</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional用于设置地形夸张系数。请注意，地形夸张不会修改任何其他图元，因为它们的位置相对于椭球体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional确定阴影是否由太阳投射形成。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>terrainShadows</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ShadowMode.html" target="_blank" rel="noopener noreferrer">ShadowMode<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ShadowMode.RECEIVE_ONLY</code></td>
<td style="text-align:left">optional确定地形是否投射或接收来自太阳的阴影。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapMode2D</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MapMode2D.html" target="_blank" rel="noopener noreferrer">MapMode2D<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>MapMode2D.INFINITE_SCROLL</code></td>
<td style="text-align:left">optional确定2D地图是可旋转的，还是可以在水平方向上无限滚动。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>projectionPicker</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional如果设置为true，则会创建ProjectionPicker部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>requestRenderMode</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional如果为true，渲染帧将只在需要时发生，由场景中的变化决定。启用可减少应用程序的CPU/GPU使用量， 并减少移动设备上的电池消耗，但需要使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#requestRender</code><ExternalLinkIcon/></a>在此模式下显式渲染新帧。在许多情况下，在API的其他部分对场景进行更改之后，这将是必要的。 请参考<a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>maximumRenderTimeChange</code></div></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left">optional如果requestRenderMode为true，则此值定义在渲染被请求之前允许的最大仿真时间更改。 请参考<a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
</tbody>
</table>
<h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2>
<CodeTabs id="682" :data='[{"title":"html"},{"title":"ts"}]' tab-id="Viewer">

<template #tab0="{ title, value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>containerId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebGis</span><span class="token punctuation">.</span><span class="token function">Viewer</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> <strong><a href="">camera</a></strong></h3>
<p>获取或设置相机</p>
<h3 id="scene" tabindex="-1"><a class="header-anchor" href="#scene" aria-hidden="true">#</a> <strong><a href="">Scene</a></strong></h3>
<p>获取场景Scene</p>
<h3 id="entities-entitygroup" tabindex="-1"><a class="header-anchor" href="#entities-entitygroup" aria-hidden="true">#</a> <a href=""><strong>Entities: EntityGroup</strong></a></h3>
<p>获取未关联到特定数据源的实体集合</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="flyto-target-entity-primitive-options-object-boolean" tabindex="-1"><a class="header-anchor" href="#flyto-target-entity-primitive-options-object-boolean" aria-hidden="true">#</a> <strong><a href="">flyTo (target:Entity|Primitive, options:Object ): boolean</a></strong></h3>
<p>相机定位到指定实体或者图元处，相机移动过程有一个动画效果。</p>
</div></template>


