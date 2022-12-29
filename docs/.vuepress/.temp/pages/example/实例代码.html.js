export const data = JSON.parse("{\"key\":\"v-3c36747c\",\"path\":\"/example/%E5%AE%9E%E4%BE%8B%E4%BB%A3%E7%A0%81.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1672058592000,\"contributors\":[{\"name\":\"unknown\",\"email\":\"37468895@qq.com\",\"commits\":1}]},\"filePathRelative\":\"example/实例代码.md\"}")

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
