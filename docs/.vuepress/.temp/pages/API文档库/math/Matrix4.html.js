export const data = JSON.parse("{\"key\":\"v-662092a6\",\"path\":\"/API%E6%96%87%E6%A1%A3%E5%BA%93/math/Matrix4.html\",\"title\":\"四维矩阵（Matrix4）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"注意行优先列优先的顺序。\",\"slug\":\"注意行优先列优先的顺序。\",\"link\":\"#注意行优先列优先的顺序。\",\"children\":[]},{\"level\":2,\"title\":\"提取位置(平移)、旋转和缩放\",\"slug\":\"提取位置-平移-、旋转和缩放\",\"link\":\"#提取位置-平移-、旋转和缩放\",\"children\":[]},{\"level\":2,\"title\":\"构造器（Constructor）\",\"slug\":\"构造器-constructor\",\"link\":\"#构造器-constructor\",\"children\":[{\"level\":3,\"title\":\"Matrix4()\",\"slug\":\"matrix4\",\"link\":\"#matrix4\",\"children\":[]}]},{\"level\":2,\"title\":\"属性（Properties）\",\"slug\":\"属性-properties\",\"link\":\"#属性-properties\",\"children\":[{\"level\":3,\"title\":\".elements : Array\",\"slug\":\"elements-array\",\"link\":\"#elements-array\",\"children\":[]}]},{\"level\":2,\"title\":\"方法（Methods）\",\"slug\":\"方法-methods\",\"link\":\"#方法-methods\",\"children\":[{\"level\":3,\"title\":\".clone () : Matrix4\",\"slug\":\"clone-matrix4\",\"link\":\"#clone-matrix4\",\"children\":[]},{\"level\":3,\"title\":\".compose ( position : Vector3, quaternion : Quaternion, scale : Vector3 ) : this\",\"slug\":\"compose-position-vector3-quaternion-quaternion-scale-vector3-this\",\"link\":\"#compose-position-vector3-quaternion-quaternion-scale-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".copy ( m : Matrix4 ) : this\",\"slug\":\"copy-m-matrix4-this\",\"link\":\"#copy-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".copyPosition ( m : Matrix4 ) : this\",\"slug\":\"copyposition-m-matrix4-this\",\"link\":\"#copyposition-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".decompose ( position : Vector3, quaternion : Quaternion, scale : Vector3 ) : this\",\"slug\":\"decompose-position-vector3-quaternion-quaternion-scale-vector3-this\",\"link\":\"#decompose-position-vector3-quaternion-quaternion-scale-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".determinant () : Float\",\"slug\":\"determinant-float\",\"link\":\"#determinant-float\",\"children\":[]},{\"level\":3,\"title\":\".equals ( m : Matrix4 ) : Boolean\",\"slug\":\"equals-m-matrix4-boolean\",\"link\":\"#equals-m-matrix4-boolean\",\"children\":[]},{\"level\":3,\"title\":\".extractBasis ( xAxis : Vector3, yAxis : Vector3, zAxis : Vector3 ) : this\",\"slug\":\"extractbasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this\",\"link\":\"#extractbasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".extractRotation ( m : Matrix4 ) : this\",\"slug\":\"extractrotation-m-matrix4-this\",\"link\":\"#extractrotation-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".fromArray ( array : Array, offset : Integer ) : this\",\"slug\":\"fromarray-array-array-offset-integer-this\",\"link\":\"#fromarray-array-array-offset-integer-this\",\"children\":[]},{\"level\":3,\"title\":\".invert () : this\",\"slug\":\"invert-this\",\"link\":\"#invert-this\",\"children\":[]},{\"level\":3,\"title\":\".getMaxScaleOnAxis () : Float\",\"slug\":\"getmaxscaleonaxis-float\",\"link\":\"#getmaxscaleonaxis-float\",\"children\":[]},{\"level\":3,\"title\":\".identity () : this\",\"slug\":\"identity-this\",\"link\":\"#identity-this\",\"children\":[]},{\"level\":3,\"title\":\".lookAt ( eye : Vector3, target : Vector3, up : Vector3 ) : this\",\"slug\":\"lookat-eye-vector3-target-vector3-up-vector3-this\",\"link\":\"#lookat-eye-vector3-target-vector3-up-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationAxis ( axis : Vector3, theta : Float ) : this\",\"slug\":\"makerotationaxis-axis-vector3-theta-float-this\",\"link\":\"#makerotationaxis-axis-vector3-theta-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeBasis ( xAxis : Vector3, yAxis : Vector3, zAxis : Vector3 ) : this\",\"slug\":\"makebasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this\",\"link\":\"#makebasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".makePerspective ( left : Float, right : Float, top : Float, bottom : Float, near : Float, far : Float ) : this\",\"slug\":\"makeperspective-left-float-right-float-top-float-bottom-float-near-float-far-float-this\",\"link\":\"#makeperspective-left-float-right-float-top-float-bottom-float-near-float-far-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeOrthographic ( left : Float, right : Float, top : Float, bottom : Float, near : Float, far : Float ) : this\",\"slug\":\"makeorthographic-left-float-right-float-top-float-bottom-float-near-float-far-float-this\",\"link\":\"#makeorthographic-left-float-right-float-top-float-bottom-float-near-float-far-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationFromEuler ( euler : Euler ) : this\",\"slug\":\"makerotationfromeuler-euler-euler-this\",\"link\":\"#makerotationfromeuler-euler-euler-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationFromQuaternion ( q : Quaternion ) : this\",\"slug\":\"makerotationfromquaternion-q-quaternion-this\",\"link\":\"#makerotationfromquaternion-q-quaternion-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationX ( theta : Float ) : this\",\"slug\":\"makerotationx-theta-float-this\",\"link\":\"#makerotationx-theta-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationY ( theta : Float ) : this\",\"slug\":\"makerotationy-theta-float-this\",\"link\":\"#makerotationy-theta-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeRotationZ ( theta : Float ) : this\",\"slug\":\"makerotationz-theta-float-this\",\"link\":\"#makerotationz-theta-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeScale ( x : Float, y : Float, z : Float ) : this\",\"slug\":\"makescale-x-float-y-float-z-float-this\",\"link\":\"#makescale-x-float-y-float-z-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeShear ( x : Float, y : Float, z : Float ) : this\",\"slug\":\"makeshear-x-float-y-float-z-float-this\",\"link\":\"#makeshear-x-float-y-float-z-float-this\",\"children\":[]},{\"level\":3,\"title\":\".makeTranslation ( x : Float, y : Float, z : Float ) : this\",\"slug\":\"maketranslation-x-float-y-float-z-float-this\",\"link\":\"#maketranslation-x-float-y-float-z-float-this\",\"children\":[]},{\"level\":3,\"title\":\".multiply ( m : Matrix4 ) : this\",\"slug\":\"multiply-m-matrix4-this\",\"link\":\"#multiply-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".multiplyMatrices ( a : Matrix4, b : Matrix4 ) : this\",\"slug\":\"multiplymatrices-a-matrix4-b-matrix4-this\",\"link\":\"#multiplymatrices-a-matrix4-b-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".multiplyScalar ( s : Float ) : this\",\"slug\":\"multiplyscalar-s-float-this\",\"link\":\"#multiplyscalar-s-float-this\",\"children\":[]},{\"level\":3,\"title\":\".premultiply ( m : Matrix4 ) : this\",\"slug\":\"premultiply-m-matrix4-this\",\"link\":\"#premultiply-m-matrix4-this\",\"children\":[]},{\"level\":3,\"title\":\".scale ( v : Vector3 ) : this\",\"slug\":\"scale-v-vector3-this\",\"link\":\"#scale-v-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".set ( n11 : Float, n12 : Float, n13 : Float, n14 : Float, n21 : Float, n22 : Float, n23 : Float, n24 : Float, n31 : Float, n32 : Float, n33 : Float, n34 : Float, n41 : Float, n42 : Float, n43 : Float, n44 : Float ) : this\",\"slug\":\"set-n11-float-n12-float-n13-float-n14-float-n21-float-n22-float-n23-float-n24-float-n31-float-n32-float-n33-float-n34-float-n41-float-n42-float-n43-float-n44-float-this\",\"link\":\"#set-n11-float-n12-float-n13-float-n14-float-n21-float-n22-float-n23-float-n24-float-n31-float-n32-float-n33-float-n34-float-n41-float-n42-float-n43-float-n44-float-this\",\"children\":[]},{\"level\":3,\"title\":\".setFromMatrix3 ( m : Matrix3 ) : this\",\"slug\":\"setfrommatrix3-m-matrix3-this\",\"link\":\"#setfrommatrix3-m-matrix3-this\",\"children\":[]},{\"level\":3,\"title\":\".setPosition ( v : Vector3 ) : this\",\"slug\":\"setposition-v-vector3-this\",\"link\":\"#setposition-v-vector3-this\",\"children\":[]},{\"level\":3,\"title\":\".setPosition ( x : Float, y : Float, z : Float ) : this // optional API\",\"slug\":\"setposition-x-float-y-float-z-float-this-optional-api\",\"link\":\"#setposition-x-float-y-float-z-float-this-optional-api\",\"children\":[]},{\"level\":3,\"title\":\".toArray ( array : Array, offset : Integer ) : Array\",\"slug\":\"toarray-array-array-offset-integer-array\",\"link\":\"#toarray-array-array-offset-integer-array\",\"children\":[]},{\"level\":3,\"title\":\".transpose () : this\",\"slug\":\"transpose-this\",\"link\":\"#transpose-this\",\"children\":[]}]}],\"git\":{\"updatedTime\":1672058592000,\"contributors\":[{\"name\":\"unknown\",\"email\":\"37468895@qq.com\",\"commits\":1}]},\"filePathRelative\":\"API文档库/math/Matrix4.md\"}")

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
