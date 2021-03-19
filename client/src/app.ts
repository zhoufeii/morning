import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'

import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import './app.scss'

class App extends Component {

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
