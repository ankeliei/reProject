// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headPictures: [],
    newsList: []
  },

  picturesClick: function(e){
    var index = parseInt(e.currentTarget.dataset.nid)
    console.log(index)
    wx.navigateTo({
      url: '/pages/news/news?newsId=' + this.data.headPictures[index].link,
    })
  },

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
    var that = this
    wx.request({
      url: getApp().globalData.urlPre+"api/getHeadPictures.php",
      header: getApp().globalData.header,
      success(res){
        var i = 0
        for(i=0; i < res.data.length; i++){
          res.data[i].url = getApp().globalData.urlPre+"aa_static/" + res.data[i].url
        }
        that.setData({
          headPictures: res.data
        })
      }
    })




    wx.request({
      url: getApp().globalData.urlPre+"api/getNewsList.php",
      header: getApp().globalData.header,
      success(res){
        var i = 0
        for(i=0; i < res.data.length; i++){
          res.data[i].titlePicture = getApp().globalData.urlPre+"aa_static/" + res.data[i].titlePicture
        }
        that.setData({
          newsList : res.data
        })
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