console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    // parabola: "parabola", //抛物线方程不支持AMD规范
    banner: "banner",
    bannerpic: "bannerpic",
    seckill: "seckill",
    dailyNew: "dailyNew",
    ExclusiveRecommended: "ExclusiveRecommended",
    head: "head",
    Top: "Top",
    // 注册
    register: "register",
    // 登录
    login: "login"
  },
  // shim: {
  //   //设置依赖关系
  //   "jquery-cookie": ["jquery"],
  //   //某一个模块，不遵从AMD
  //   parabola: {
  //     exports: "_",
  //   },
  // },
});

//调用模块
require(["banner", "bannerpic", "seckill", "dailyNew", "ExclusiveRecommended", "head", "register", "login"], function (banner, bannerpic, seckill, dailyNew, ExclusiveRecommended, head, register, login) {
  banner.download();
  banner.goOut();

  bannerpic.downPic();

  seckill.downSeckillPic();

  dailyNew.downDailyPic();

  ExclusiveRecommended.ExclusiveRecommendedDownPic();

  head.Head();
  head.Top();
  head.download();
  head.goOut();


  register.Register();
  register.php();

  login.Login()
});
























// <!-- 隐藏的部分 -->
// <div class="hidden">
//     <div class="section">
//         <div class="title">${arr[i].title[0]}</div>
//         <div class="title-content">
//             <span class= "subtitle">为你推荐 ></span>
//             <span >
//                 <a href="#">空调</a>
//             </span>
//         </div>
//         <div class="title-content">
//             <span>精品专区 ></span>
//             <span>
//                 <a href="#">回购榜单</a>
//             </span>
//         </div>
//     </div>
//     <div class="section">
//         <div class="title">${arr[i].title[1]}</div>
//         <div class="title-content">
//             <span >频道精选 ></span>
//             <span>
//                 <a href="#">热卖爆款</a>
//             </span>
//         </div>
//         <div class="title-content">
//             <span>电视></span>
//             <span>
//                 <a href="#">小米电视5</a>
//             </span>
//         </div>
//     </div>

// </div>