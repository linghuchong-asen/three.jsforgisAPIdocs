export const data = JSON.parse("{\"key\":\"v-30611967\",\"path\":\"/APIdocs/math/Quaternion.html\",\"title\":\"四元数（Quaternion）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"该类实现了 quaternion (http://en.wikipedia.org/wiki/Quaternion) 。 四元数在three.js中用于表示 rotation (https://en.wikipedia.org/wiki/Quaternionsandspatial_rotation) （旋转）。 对 Quaternion 实例进行遍历将...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/APIdocs/math/Quaternion.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"API文档--three.js封装\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"四元数（Quaternion）\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"该类实现了 quaternion (http://en.wikipedia.org/wiki/Quaternion) 。 四元数在three.js中用于表示 rotation (https://en.wikipedia.org/wiki/Quaternionsandspatial_rotation) （旋转）。 对 Quaternion 实例进行遍历将...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"headers\":[{\"level\":2,\"title\":\"代码示例\",\"slug\":\"代码示例\",\"link\":\"#代码示例\",\"children\":[]},{\"level\":2,\"title\":\"构造函数\",\"slug\":\"构造函数\",\"link\":\"#构造函数\",\"children\":[{\"level\":3,\"title\":\"Quaternion( x : Float, y : Float, z : Float, w : Float )\",\"slug\":\"quaternion-x-float-y-float-z-float-w-float\",\"link\":\"#quaternion-x-float-y-float-z-float-w-float\",\"children\":[]}]},{\"level\":2,\"title\":\"属性\",\"slug\":\"属性\",\"link\":\"#属性\",\"children\":[{\"level\":3,\"title\":\".isQuaternion : Boolean\",\"slug\":\"isquaternion-boolean\",\"link\":\"#isquaternion-boolean\",\"children\":[]},{\"level\":3,\"title\":\".x : Float\",\"slug\":\"x-float\",\"link\":\"#x-float\",\"children\":[]},{\"level\":3,\"title\":\".y : Float\",\"slug\":\"y-float\",\"link\":\"#y-float\",\"children\":[]},{\"level\":3,\"title\":\".z : Float\",\"slug\":\"z-float\",\"link\":\"#z-float\",\"children\":[]},{\"level\":3,\"title\":\".w : Float\",\"slug\":\"w-float\",\"link\":\"#w-float\",\"children\":[]}]},{\"level\":2,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[{\"level\":3,\"title\":\".angleTo ( q : Quaternion ) : Float\",\"slug\":\"angleto-q-quaternion-float\",\"link\":\"#angleto-q-quaternion-float\",\"children\":[]},{\"level\":3,\"title\":\".clone () : Quaternion\",\"slug\":\"clone-quaternion\",\"link\":\"#clone-quaternion\",\"children\":[]},{\"level\":3,\"title\":\".conjugate () : this\",\"slug\":\"conjugate-this\",\"link\":\"#conjugate-this\",\"children\":[]},{\"level\":3,\"title\":\".copy ( q : Quaternion ) : this\",\"slug\":\"copy-q-quaternion-this\",\"link\":\"#copy-q-quaternion-this\",\"children\":[]},{\"level\":3,\"title\":\".equals ( v : Quaternion ) : Boolean\",\"slug\":\"equals-v-quaternion-boolean\",\"link\":\"#equals-v-quaternion-boolean\",\"children\":[]},{\"level\":3,\"title\":\".dot ( v : Quaternion ) : Float\",\"slug\":\"dot-v-quaternion-float\",\"link\":\"#dot-v-quaternion-float\",\"children\":[]},{\"level\":3,\"title\":\".fromArray ( array : Array, offset : Integer ) : this\",\"slug\":\"fromarray-array-array-offset-integer-this\",\"link\":\"#fromarray-array-array-offset-integer-this\",\"children\":[]},{\"level\":3,\"title\":\".identity () : this\",\"slug\":\"identity-this\",\"link\":\"#identity-this\",\"children\":[]},{\"level\":3,\"title\":\".invert () : this\",\"slug\":\"invert-this\",\"link\":\"#invert-this\",\"children\":[]},{\"level\":3,\"title\":\".length () : Float\",\"slug\":\"length-float\",\"link\":\"#length-float\",\"children\":[]},{\"level\":3,\"title\":\".lengthSq () : Float\",\"slug\":\"lengthsq-float\",\"link\":\"#lengthsq-float\",\"children\":[]},{\"level\":3,\"title\":\".normalize () : this\",\"slug\":\"normalize-this\",\"link\":\"#normalize-this\",\"children\":[]},{\"level\":3,\"title\":\".multiply ( q : Quaternion ) : this\",\"slug\":\"multiply-q-quaternion-this\",\"link\":\"#multiply-q-quaternion-this\",\"children\":[]},{\"level\":3,\"title\":\".multiplyQuaternions ( a : Quaternion, b : Quaternion ) : this\",\"slug\":\"multiplyquaternions-a-quaternion-b-quaternion-this\",\"link\":\"#multiplyquaternions-a-quaternion-b-quaternion-this\",\"children\":[]},{\"level\":3,\"title\":\".premultiply ( q : Quaternion ) : this\",\"slug\":\"premultiply-q-quaternion-this\",\"link\":\"#premultiply-q-quaternion-this\",\"children\":[]},{\"level\":3,\"title\":\".rotateTowards ( q : Quaternion, step : Float ) : this\",\"slug\":\"rotatetowards-q-quaternion-step-float-this\",\"link\":\"#rotatetowards-q-quaternion-step-float-this\",\"children\":[]},{\"level\":3,\"title\":\".slerp ( qb : Quaternion, t : Float ) : this\",\"slug\":\"slerp-qb-quaternion-t-float-this\",\"link\":\"#slerp-qb-quaternion-t-float-this\",\"children\":[]},{\"level\":3,\"title\":\".slerpQuaternions ( qa : Quaternion, qb : Quaternion, t : Float ) : this\",\"slug\":\"slerpquaternions-qa-quaternion-qb-quaternion-t-float-this\",\"link\":\"#slerpquaternions-qa-quaternion-qb-quaternion-t-float-this\",\"children\":[]},{\"level\":3,\"title\":\".set ( x : Float, y : Float, z : Float, w : Float ) : this\",\"slug\":\"set-x-float-y-float-z-float-w-float-this\",\"link\":\"#set-x-float-y-float-z-float-w-float-this\",\"children\":[]},{\"level\":3,\"title\":\".setFromAxisAngle ( axis : Vector3, angle : Float ) : this\",\"slug\":\"setfromaxisangle-axis-vector3-angle-float-this\",\"link\":\"#setfromaxisangle-axis-vector3-angle-float-this\",\"children\":[]},{\"level\":3,\"title\":\".setFromEuler ( euler : Euler ) : this\",\"slug\":\"setfromeuler-euler-euler-this\",\"link\":\"#setfromeuler-euler-euler-this\",\"children\":[]},{\"level\":3,\"title\":\".setFromRotationMatrix ( m : Matrix4 ) : this\",\"slug\":\"setfromrotationmatrix-m-matrix4-this\",\"link\":\"#setfromrotationmatrix-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".setFromUnitVectors ( vFrom : Vector3, vTo : Vector3 ) : this\",\"slug\":\"setfromunitvectors-vfrom-vector3-vto-vector3-this\",\"link\":\"#setfromunitvectors-vfrom-vector3-vto-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".toArray ( array : Array, offset : Integer ) : Array\",\"slug\":\"toarray-array-array-offset-integer-array\",\"link\":\"#toarray-array-array-offset-integer-array\",\"children\":[]},{\"level\":3,\"title\":\".fromBufferAttribute ( attribute : BufferAttribute, index : Integer ) : this\",\"slug\":\"frombufferattribute-attribute-bufferattribute-index-integer-this\",\"link\":\"#frombufferattribute-attribute-bufferattribute-index-integer-this\",\"children\":[]}]},{\"level\":2,\"title\":\"静态方法\",\"slug\":\"静态方法\",\"link\":\"#静态方法\",\"children\":[{\"level\":3,\"title\":\".slerpFlat ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer, t : Float ) : undefined\",\"slug\":\"slerpflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-t-float-undefined\",\"link\":\"#slerpflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-t-float-undefined\",\"children\":[]},{\"level\":3,\"title\":\".multiplyQuaternionsFlat ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer ) : Array\",\"slug\":\"multiplyquaternionsflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-array\",\"link\":\"#multiplyquaternionsflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-array\",\"children\":[]}]}],\"readingTime\":{\"minutes\":7.15,\"words\":2144},\"filePathRelative\":\"APIdocs/math/Quaternion.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}