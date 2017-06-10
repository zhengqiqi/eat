//recipe.js
var app = getApp()
Page({
  data: {
    userInfo: {},

    coverPng: '../../image/user.png',
    calorie: '174',
    joule: '485',

    carbohydrate: '10',
    protein: '1.7',
    fat: '0.4',

    intro: '减脂期间非常推荐吃粗粮，热量低不说了，还蠕动肠胃，可以很好的“嗯嗯”~ 口感确实不太好，但我很好的发挥了小强精神，搭配出一个口感吃起来还不错的组合~',

    listData: [
      { "ingre": "糙米", "weight": "90克", "calorie": "140千卡/400千焦" },
      { "ingre": "大麦米", "weight": "10克", "calorie": "20千卡/35千焦" },
      { "ingre": "黑米", "weight": "30克", "calorie": "14千卡/50千焦" }, 
      { "ingre": "水", "weight": "200克", "calorie": "0千卡/0千焦" }
      ],

    step:[
      { "png": '../../image/user.png' ,"num": "1", "content": "准备好食材后将它们冲洗至水不浑浊为止，再泡2~3个小时。"},
      { "png": '../../image/user.png', "num": "2", "content": "泡好后倒入电饭锅，加入200克水，盖上盖子等待时间到就OK了。" }
    ],

    tip: '米饭吃之前最好泡2~3小时，这样做出来的米饭才会比较好嚼哦~',


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

    wx.setNavigationBarTitle({
      title: '杂粮饭',
    })

    /*that.setData({
      mername: options.mername//options为页面路由过程中传递的参数
    })
    wx.setNavigationBarTitle({
      title: that.data.mername//页面标题为路由参数
    })*/
  
  },



})