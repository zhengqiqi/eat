//plan.js
var app = getApp()
Page({
  data: {
    userInfo: {},

    headPng: '../../image/breakfast.png',
    headName: '早餐',
    headCal: '400',

    listPng: '../../image/user.png',
    listFontName: '蒸龙利鱼',
    listFontStuff: '龙利鱼',
    listCal: '400',

    showView: true,
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    showView: (options.showView == "true" ? true : false)
  },

  onChangeShowState: function() {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },

  onClick: function(){
    wx.navigateTo({
      url: '../recipe/recipe'
    })
  },
})
