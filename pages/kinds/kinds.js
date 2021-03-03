// pages/kinds/kinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kinds:[
      {
        'text': "梨树栽培",
        'url': "/images/trees_yellow.png",
        "newsCount": null
      },
      {
        'text': "病虫害用药",
        'url': "/images/medicine_yellow.png",
        "newsCount": null
      },
      {
        'text': "果园施肥",
        'url': "/images/manure_yellow.png",
        "newsCount": null
      },
      {
        'text': "其他",
        'url': "/images/others_yellow.png",
        "newsCount": null
      },
    ],
  },

  kindsClick: function(e){
    var index = parseInt(e.currentTarget.dataset.nid)
    wx.navigateTo({
      url: '/pages/newsByKinds/newsByKinds?kind=' + this.data.kinds[index].text,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getApp().globalData.urlPre+"api/getNewsCountByKind.php",
      header: getApp().globalData.header,
      success(res){
        for(var i=0, len = res.data.length; i < len; i++){
          if(res.data[i].text=="梨树栽培"){
            res.data[i].url = "/images/trees_yellow.png"
          }
          else if(res.data[i].text=="病虫害用药"){
            res.data[i].url = "/images/medicine_yellow.png"
          }
          else if(res.data[i].text=="果园施肥"){
            res.data[i].url = "/images/manure_yellow.png"
          }
          else{
            res.data[i].url = "/images/others_yellow.png"
          }
        }
        that.setData({
          kinds: res.data
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