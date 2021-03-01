// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userCount: null,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindHomeTap() {
    wx.reLaunch({
      url: '../home/home'
    })
  },
  onLoad() {
    // 设置小程序头图url
    this.setData({
      headImage: app.globalData.urlPre+"aa_static/apphead.jpg"
    })
    
    // 获取您是第几位用户
    var that = this
    wx.request({
      url: app.globalData.urlPre+"api/userCount.php",
      header:getApp().globalData.header,
      success(res){
        that.setData({
          userCount : res.data
        })
        console.log(res.data)
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(this.data.userInfo)
  }
})
