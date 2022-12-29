

# 视窗(Viewer)

视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。

## 构造器

**Viewer(containerId,options)**

| Name        | Type              | Description                       |
| :---------- | :---------------- | :-------------------------------- |
| `container` | Element \| String | 将容纳Viewer的HTML DOM 元素或ID。 |

对象，具有以下属性：


| Name                                                         | Type                                                         | Default                                    | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------- | :----------------------------------------------------------- |
| `animation`                                                  | Boolean                                                      | `true`                                     | optional是否创建Animation部件。                              |
| `baseLayerPicker`                                            | Boolean                                                      | `true`                                     | optional是否创建BaseLayerPicker部件。                        |
| `fullscreenButton`                                           | Boolean                                                      | `true`                                     | optional如果设置为false，则不会创建FullscreenButton部件。    |
| `vrButton`                                                   | Boolean                                                      | `false`                                    | optional如果设置为true，将创建VRButton部件。                 |
| `geocoder`                                                   | Boolean \| Array.<[GeocoderService](https://www.vvpstk.com/public/Cesium/Documentation/GeocoderService.html)> | `true`                                     | optional如果设置为false，则不会创建Geocoder部件。            |
| `homeButton`                                                 | Boolean                                                      | `true`                                     | optional如果设置为false，则不会创建HomeButton部件。          |
| `infoBox`                                                    | Boolean                                                      | `true`                                     | optional如果设置为false，则不会创建InfoBox部件。             |
| `sceneModePicker`                                            | Boolean                                                      | `true`                                     | optional如果设置为false，将不会创建SceneModePicker部件。     |
| `selectionIndicator`                                         | Boolean                                                      | `true`                                     | optional如果设置为false，则不会创建SelectionIndicator部件。  |
| `timeline`                                                   | Boolean                                                      | `true`                                     | optional如果设置为false，则不会创建Timeline部件。            |
| `navigationHelpButton`                                       | Boolean                                                      | `true`                                     | optional如果设置为false，将不会创建NavigationHelpButton。    |
| <div style="width:150px">`navigationInstructionsInitiallyVisible`</div> | Boolean                                                      | `true`                                     | optional如果导航指令最初应该是可见的，则为True；如果在用户显式单击按钮之前不应该显示，则为false。 |
| `scene3DOnly`                                                | Boolean                                                      | `false`                                    | optional当`true`时，为了节省GPU内存，每个几何实例只会在3D下被渲染。 |
| `shouldAnimate`                                              | Boolean                                                      | `false`                                    | optional如果时钟默认尝试使仿真时间前进，则为`true`，否则为`false`。此选项优先于设置[`Viewer#clockViewModel`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#clockViewModel)。 |
| `clockViewModel`                                             | [ClockViewModel](https://www.vvpstk.com/public/Cesium/Documentation/ClockViewModel.html) | `new ClockViewModel(options.clock)`        | optional用于控制当前时间的ClockViewModel。                   |
| <div style="width:100px">`selectedImageryProviderViewModel`</div> | [ProviderViewModel](https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html) |                                            | optional如果没有提供第一个可用的基本图层，则使用当前基本图像层的视图模型。此值仅在options.baseLayerPicker设置为true时有效。 |
| <div style="width:100px">`imageryProviderViewModels`</div>   | Array.<[ProviderViewModel](https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html)> | `createDefaultImageryProviderViewModels()` | optional可从BaseLayerPicker中选择的ProviderViewModels数组。此值仅在options.baseLayerPicker设置为true时有效。 |
| <div style="width:100px">`selectedTerrainProviderViewModel`</div> | [ProviderViewModel](https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html) |                                            | optional当前基本地形图层的视图模型，如果没有提供，则使用第一个可用的基本图层。此值仅在options.baseLayerPicker设置为true时有效。 |
| <div style="width:100px">`terrainProviderViewModels`</div>   | Array.<[ProviderViewModel](https://www.vvpstk.com/public/Cesium/Documentation/ProviderViewModel.html)> | `createDefaultTerrainProviderViewModels()` | optional可从BaseLayerPicker中选择的ProviderViewModels数组。 此值仅在options.baseLayerPicker设置为true时有效。 |
| `imageryProvider`                                            | [ImageryProvider](https://www.vvpstk.com/public/Cesium/Documentation/ImageryProvider.html) | `createWorldImagery()`                     | optional要使用的 imageryProvider。此值仅在options.baseLayerPicker设置为false时有效。 |
| `terrainProvider`                                            | [TerrainProvider](https://www.vvpstk.com/public/Cesium/Documentation/TerrainProvider.html) | `new EllipsoidTerrainProvider()`           | optional要使用的 terrainProvider。                           |
| `skyBox`                                                     | [SkyBox](https://www.vvpstk.com/public/Cesium/Documentation/SkyBox.html) |                                            | optional用于渲染星辰的天空盒，未定义时，使用默认星辰效果。   |
| `skyAtmosphere`                                              | [SkyAtmosphere](https://www.vvpstk.com/public/Cesium/Documentation/SkyAtmosphere.html) |                                            | optional环绕地球边缘的蓝天和光晕效果，设置为`false`可将其关闭。 |
| `fullscreenElement`                                          | Element \| String                                            | `document.body`                            | optional当按下全屏按钮时，要放置到全屏模式的元素或id。       |
| `useDefaultRenderLoop`                                       | Boolean                                                      | `true`                                     | optional如果此部件需要控制渲染循环，则为true，否则为false。  |
| `targetFrameRate`                                            | Number                                                       |                                            | optional使用默认渲染循环时的目标帧速率。                     |
| `showRenderLoopErrors`                                       | Boolean                                                      | `true`                                     | optional如果为true，如果出现渲染循环错误，此部件将自动向用户显示包含错误的HTML面板。 |
| <div style="width:100px">`useBrowserRecommendedResolution`</div> | Boolean                                                      | `false`                                    | optional如果为true，则按照浏览器推荐的分辨率渲染，忽略`window.devicePixelRatio`。 |
| <div style="width:100px">`automaticallyTrackDataSourceClocks`</div> | Boolean                                                      | `true`                                     | optional如果为true，此部件将自动跟踪新添加的数据源的时钟设置，并在数据源的时钟发生更改时进行更新。如果想要独立配置时钟，请将此设置为false。 |
| `contextOptions`                                             | Object                                                       |                                            | optionalContext 和 WebGL 的创建属性，与传递给[`Scene`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html)的`options`相一致。 |
| `sceneMode`                                                  | [SceneMode](https://www.vvpstk.com/public/Cesium/Documentation/SceneMode.html) | `SceneMode.SCENE3D`                        | optional初始场景模式（SceneMode）。                          |
| `mapProjection`                                              | [MapProjection](https://www.vvpstk.com/public/Cesium/Documentation/MapProjection.html) | `new GeographicProjection()`               | optional在2D和哥伦布视图模式中使用的地图投影。               |
| `globe`                                                      | [Globe](https://www.vvpstk.com/public/Cesium/Documentation/Globe.html) | `new Globe(mapProjection.ellipsoid)`       | optional场景中使用的地球。如果设置为`false`，则不添加地球。  |
| <div style="width:100px">`orderIndependentTranslucency`</div> | Boolean                                                      | `true`                                     | optional如果为true，且设备支持，则使用与顺序无关的半透明性。 |
| `creditContainer`                                            | Element \| String                                            |                                            | optional包含[`CreditDisplay`](https://www.vvpstk.com/public/Cesium/Documentation/CreditDisplay.html)的DOM元素或ID。如果没有指定，认证（credits）将添加到部件本身的底部。 |
| `creditViewport`                                             | Element \| String                                            |                                            | optional包含由[`CreditDisplay`](https://www.vvpstk.com/public/Cesium/Documentation/CreditDisplay.html)创建的认证（credit）弹出窗口的DOM元素或ID。如果没有指定，它将出现在部件本身上。 |
| `dataSources`                                                | [DataSourceCollection](https://www.vvpstk.com/public/Cesium/Documentation/DataSourceCollection.html) | `new DataSourceCollection()`               | optional由部件可视化的数据源集合。如果提供了该参数，则假定该实例为调用者所有，并且不会在销毁查看器（viewer）时销毁该实例。 |
| `terrainExaggeration`                                        | Number                                                       | `1.0`                                      | optional用于设置地形夸张系数。请注意，地形夸张不会修改任何其他图元，因为它们的位置相对于椭球体。 |
| `shadows`                                                    | Boolean                                                      | `false`                                    | optional确定阴影是否由太阳投射形成。                         |
| `terrainShadows`                                             | [ShadowMode](https://www.vvpstk.com/public/Cesium/Documentation/ShadowMode.html) | `ShadowMode.RECEIVE_ONLY`                  | optional确定地形是否投射或接收来自太阳的阴影。               |
| `mapMode2D`                                                  | [MapMode2D](https://www.vvpstk.com/public/Cesium/Documentation/MapMode2D.html) | `MapMode2D.INFINITE_SCROLL`                | optional确定2D地图是可旋转的，还是可以在水平方向上无限滚动。 |
| `projectionPicker`                                           | Boolean                                                      | `false`                                    | optional如果设置为true，则会创建ProjectionPicker部件。       |
| `requestRenderMode`                                          | Boolean                                                      | `false`                                    | optional如果为true，渲染帧将只在需要时发生，由场景中的变化决定。启用可减少应用程序的CPU/GPU使用量， 并减少移动设备上的电池消耗，但需要使用[`Scene#requestRender`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender)在此模式下显式渲染新帧。在许多情况下，在API的其他部分对场景进行更改之后，这将是必要的。 请参考[Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |
| <div style="width:100px">`maximumRenderTimeChange`</div>     | Number                                                       | `0.0`                                      | optional如果requestRenderMode为true，则此值定义在渲染被请求之前允许的最大仿真时间更改。 请参考[Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |

## 代码实例

::: code-tabs#Viewer

@tab html

```html
<div id="containerId"></div>
```
@tab ts

```ts
const viewer = new WebGis.Viewer(containerId)
```

:::

## 属性

### **[camera]()**

获取或设置相机

### **[Scene]()**

获取场景Scene

### [**Entities: EntityGroup**]()

获取未关联到特定数据源的实体集合

## 方法

### **[flyTo (target:Entity|Primitive, options:Object ): boolean]()**

相机定位到指定实体或者图元处，相机移动过程有一个动画效果。

