// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        var code=res.code;
        if(res.code)
        {
          console.log('code'+res.code);
          wx.request({
            url: this.globalData.urlPre+'onLogin.php',
            data:{
              code:res.code
            },
            success(res){
              // getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data.sessionid;
              getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data;
              console.log(getApp().globalData.header);
              console.log("res.data == "+res.data);
            }
          })
        }
        else{
          console.log('获得用户登录态失败！'+res.errMsg)
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    // 定时心跳到服务器
    setInterval(function(){
      wx.request({
        url: getApp().globalData.urlPre+"api/onHeartbeat.php",
        header: getApp().globalData.header,
        success(){
        }
      })
    }, 60000);
  },

  globalData: {
    // urlPre: "https://www.ankeliei.cn/",
    urlPre: "http://47.98.151.130:5000/",
    userInfo: null,
    header: {
      "content-type": "application/x-www-form-urlencoded",
      'Cookie': ''
     }
  }
})