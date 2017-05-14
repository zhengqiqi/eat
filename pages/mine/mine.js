//mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},

    usersex: ['男', '女'],
    indexsex: 0,//等于用户输入的性别

    userrate: ['1-3次/周','3-5次/周','6-7次/周','专业运动'],
    indexrate: 0,//等于用户输入的运动频率

    usergoal: ['减脂','塑身','增肌'],
    indexgoal: 0,//等于用户输入的用餐目的

    showDialog: false,

    valueage: 25,

  },

  bindPickerChange1: function(e) {
    console.log('发生 picker 事件，携带值为', e.detail.value)
    this.setData({
      indexsex: e.detail.value
    });
  },

  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  sliderchange: function(e) {
    console.log('发生 change 事件，携带值为', e.detail.value)
    this.setData({
      valueage: e.detail.value
    });
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
  },

  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  }
})
