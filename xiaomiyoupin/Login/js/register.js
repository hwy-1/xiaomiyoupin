define(["jquery"], function ($) {

    // 判断手机号是否正确
    function Register() {
        // 注册
        // var oPhoneNumber = document.getElementById("PhoneNumber");
        // var oReminder = document.getElementById("reminder");

        $("#PhoneNumber").blur(function () {
            // 获取输入框的值
            // console.log($("#PhoneNumber").val())
            // console.log($("#reminder").text())
            // console.log($("#reminder").size())
            if (!($("#PhoneNumber").val())) {

                $("#reminder")
                    .html("❗请输入手机号码")
                    .css("display", "block");

            } else if (!opH($("#PhoneNumber").val())) {
                $("#reminder")
                    .html("❗手机格式错误")
                    .css("display", "block");

            } else {
                $("#reminder")
                    .html("手机号码正确")
                    .css("display", "block");
            }
        })

    }
    function opH(phone) {
        return /^1[3|4|5|8][0-9]\d{4,8}$/.test(phone);
    }
    // php链接跳转
    function php() {
        // var oBtn = document.querySelector(".nowRegion");
        // var aInputs = document.querySelectorAll(".panel-body input");
        // console.log(aInputs)
        // var aAlert = document.querySelector(".alert");

        //函数防抖
        $('.nowRegion').click(antiShake(download, 1000));
   
        function download() {
            $.ajax({
                type:"post",
                url: "php/register.php",
                // dataType:"text",
                data: {
                    username: $(".panel-body input").eq(0).val(),
                    password: $(".panel-body input").eq(1).val(),
                    repassword: $(".panel-body input").eq(2).val()
                    // createTime: (new Date().getTime())
                },
                success: function (result) {
                    console.log(result);
                    var obj = JSON.parse(result);
                    // aAlert.style.display = 'block';
                    // if (obj.code) {
                        //错误
                        // aAlert.className = 'alert alert-danger';
                        // aAlert.innerHTML = obj.msg;

                    // } else {
                        // aAlert.className = 'alert alert-success';
                        //成功
                        // aAlert.innerHTML = obj.msg;
                        // setTimeout(() => {
                            location.replace("http://localhost/php/xiaomiyoupin/Login/login.html");
                            // location.assign("../login.html");
                        // }, 500);
                    // }
                },
                error: function (msg) {
                    console.log(msg);
                }
            })
        }

        function antiShake(func, delay) {
            // console.log(func)  console.log(i++)这个函数    
            var timer = null;
            // 下面这个函数是为了给func防抖的
            // 我们最终的参数是为了传给func
            // 把参数展开成数组（我们要拿到事件对象）
            return function (...argus) {
                // console.log(...argus); // 事件对象
                // console.log(this); // button
                var _this = this;
                // 首先清除定时器
                clearTimeout(timer);
                timer = setTimeout(function () {
                    // 本来func的this指向window
                    // console.log(this); 
                    func.apply(_this, argus);
                }, delay);
            }
        }



    }

    return {
        Register: Register,
        opH: opH,
        php:php
    }
})




