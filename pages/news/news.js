// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置文章编号
    var that = this
    var newsId = options.newsId
    that.setData({
      newsId: newsId
    })

    // 加载文章富文本
    wx.request({
      url: getApp().globalData.urlPre+"api/getNews.php",
      header: getApp().globalData.header,
      data:{
        id: that.data.newsId
      },
      success(res){
        // 处理头图链接
        res.data.titlePicture = getApp().globalData.urlPre+"aa_static/" + res.data.titlePicture
        // 处理内容链接
        for(var i=0, len = res.data.nodes.length; i < len; i++){
          if(res.data.nodes[i].kind=="image" || res.data.nodes[i].kind=="video"){
            res.data.nodes[i].text = getApp().globalData.urlPre+"aa_static/" + res.data.nodes[i].text
          }
        }
        // 写入data
        that.setData({
          news: res.data
        })
        console.log(res.data)
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