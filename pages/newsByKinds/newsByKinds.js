// pages/newsByKinds/newsByKinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  // 文章条目的点击响应
  newsClick: function(e){
    var index = parseInt(e.currentTarget.dataset.nid)
    wx.navigateTo({
      url: '/pages/news/news?newsId=' + this.data.newsList[index].id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置新闻分类
    var that = this
    var kind = options.kind
    that.setData({
      "kind": kind
    })

    // 请求分类文章列表
    wx.request({
      url: getApp().globalData.urlPre+"api/getNewsByKind.php",
      header: getApp().globalData.header,
      data: {
        "kind": that.data.kind
      },
      success(res){
        if(res.data == "NoNews"){
          return
        }
        else{
          var i = 0
          for(i=0; i < res.data.length; i++){
            res.data[i].titlePicture = getApp().globalData.urlPre+"aa_static/" + res.data[i].titlePicture
          }
          that.setData({
            newsList : res.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})