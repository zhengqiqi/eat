//mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},

    ALL_SEX: ['男', '女'],
    sex: 0,//等于用户输入的性别

    ALL_RATE: ['1-3次/周','3-5次/周','6-7次/周','专业运动'],
    rate: 0,//等于用户输入的运动频率

    ALL_GOAL: ['减脂','塑身','增肌'],
    goal: 0,//等于用户输入的用餐目的

    showAgeDialog: false,
    showHighDialog: false,
    showWeightDialog: false,

    age: 25,
    high: 160,
    weight: 50,

    ALL_GOAL: ['减脂','塑身','增肌'],
    goal: 0,//等于用户输入的用餐目的
    showDialog: false,
    age: 25
  },

  onPickerChange(e) {
    var varName = e.target.dataset.varName;
    var newDataSet = {};
    newDataSet[varName] = e.detail.value;
    this.setData(newDataSet);
  },

  //dialog显示代码
  toggleAgeDialog() {
    this.setData({
      showAgeDialog: !this.data.showAgeDialog
    });
    var newDateSet = {};
    newDateSet[varName] = e.detail.value;
    this.setData(newDateSet);
  },
  toggleHighDialog() {
    this.setData({
      showHighDialog: !this.data.showHighDialog
    });
  },
  toggleWeightDialog() {
    this.setData({
      showWeightDialog: !this.data.showWeightDialog
    });
  },

  onSliderChange(e) {
    var varName = e.target.dataset.varName;
    var newDataSet = {};
    newDataSet[varName] = e.detail.value;
    this.setData(newDataSet);
  },

  /*sliderChange: function(e) {
    console.log('发生 change 事件，携带值为', e.detail.value)
    this.setData({
      age: e.detail.value
    });
  },*/
  //事件处理函数
  onLoad: function () {
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
