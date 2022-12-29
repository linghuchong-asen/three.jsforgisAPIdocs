# 三维几何线段（Line3）

用起点和终点表示的几何线段。

## 构造器（Constructor）

### Line3( start : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), end : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) )

[start](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的起始点。默认值为 (0, 0, 0)。
[end](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的终点。默认值为 (0, 0, 0)。

创建一个三维几何线段 Line3。

## 属性（Properties）

### .[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示线段的起点。

### .[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示线段的终点

## 方法（Methods）

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Line3.applyMatrix4) ( matrix : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

对此线段应用矩阵变换。

### .[at](https://threejs.org/docs/index.html#api/zh/math/Line3.at) ( t : Float, target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

t - 使用值0-1返回沿线段的位置。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 计算结果会被拷贝到target。

返回一个线段某一位置的向量，当 t = 0的时候返回起始点，当t = 1的时候返回终点。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Line3.clone) () : [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3)

返回一个与此线段拥有相同起始点 [start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) 和 终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) 的线段。

### .[closestPointToPoint](https://threejs.org/docs/index.html#api/zh/math/Line3.closestPointToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), clampToLine : Boolean, target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 用于计算线段上到该点最近的点。
clampToLine - 是否将结果限制在线段起始点和终点之间。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果会拷贝到target。

返回线段上到point最近的点。如果参数 clampToLine 为true。返回值将会在线段之间。

### .[closestPointToPointParameter](https://threejs.org/docs/index.html#api/zh/math/Line3.closestPointToPointParameter) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), clampToLine : Boolean ) : Float

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 用于计算返回值的点
clampToLine - 结果是否处于 [0, 1]之间。

返回一个基于点投影到线段上的点的参数。如果 clampToLine 为true则返回值将在0到1之间。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Line3.copy) ( line : [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3) ) : this

拷贝传入线段的起始点 [start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) 和终点 [end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) 向量到当前线段。

### .[delta](https://threejs.org/docs/index.html#api/zh/math/Line3.delta) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会拷贝到target。

返回线段的向量。（终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end)向量减去起始点[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start)向量）。

### .[distance](https://threejs.org/docs/index.html#api/zh/math/Line3.distance) () : Float

Returns the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) (straight-line distance) between the line's [start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) and [end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) points.

### .[distanceSq](https://threejs.org/docs/index.html#api/zh/math/Line3.distanceSq) () : Float

返回起始点[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start)和终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end)的欧几里得距离[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)。（直线距离）

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Line3.equals) ( line : [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3) ) : Boolean

[line](https://threejs.org/docs/index.html#api/zh/math/Line3) - [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3) to compare with this one.

如果给定线段与当前线段的起始点[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start)和终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end)都相同则返回true。

### .[getCenter](https://threejs.org/docs/index.html#api/zh/math/Line3.getCenter) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果会写入target。

返回线段的中心点。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Line3.set) ( start : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), end : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[start](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 设置线段的起点 [start point](https://threejs.org/docs/index.html#api/zh/math/Line3.start)。
[end](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 设置线段的终点 [end point](https://threejs.org/docs/index.html#api/zh/math/Line3.end)。

将传入的向量设置到线段的起始点和终点。