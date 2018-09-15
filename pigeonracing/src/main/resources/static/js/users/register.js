$(function () {
   $('#register').bootstrapValidator({
       message: 'This value is not valid',
       feedbackIcons: {
           valid: 'glyphicon glyphicon-ok',
           invalid: 'glyphicon glyphicon-remove',
           validating: 'glyphicon glyphicon-refresh'
       },
       fields: {
           username: {
               message: 'The username is not valid',

               validators: {
                   notEmpty: {//非空验证：提示消息
                       message: '用户名不能为空'
                   },
                   stringLength: {
                       min: 6,
                       max: 30,
                       message: '用户名长度必须在6到30之间'
                   }/*,
                   threshold :  6 , //有6字符以上才发送ajax请求，（input中输入一个字符，插件会向服务器发送一次，设置限制，6字符以上才开始）
                   remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}
                       url: '/exist',//验证地址
                       message: '用户已存在',//提示消息
                       delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                       type: 'POST'//请求方式
                       /!**自定义提交数据，默认值提交当前input value
                        *  data: function(validator) {
                               return {
                                   password: $('[name="passwordNameAttributeInYourForm"]').val(),
                                   whatever: $('[name="whateverNameAttributeInYourForm"]').val()
                               };
                            }
                        *!/
                   }*/,
                   regexp: {
                       regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: '用户名由数字字母下划线和.组成'
                   }
               }
           },
           phonenumber: {
               message: 'The phone is not valid',
               validators: {
                   notEmpty: {
                       message: '手机号码不能为空'
                   },
                   stringLength: {
                       min: 11,
                       max: 11,
                       message: '请输入11位手机号码'
                   },
                   regexp: {
                       regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                       message: '请输入正确的手机号码'
                   }
               }
           },
           password: {
               message:'密码无效',
               validators: {
                   notEmpty: {
                       message: '密码不能为空'
                   },
                   stringLength: {
                       min: 6,
                       max: 30,
                       message: '用户名长度必须在6到30之间'
                   },
                   identical: {//相同
                       field: 'password', //需要进行比较的input name值
                       message: '两次密码不一致'
                   },
                   different: {//不能和用户名相同
                       field: 'username',//需要进行比较的input name值
                       message: '不能和用户名相同'
                   },
                   regexp: {
                       regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: 'The username can only consist of alphabetical, number, dot and underscore'
                   }
               }
           },
           repassword: {
               message: '密码无效',
               validators: {
                   notEmpty: {
                       message: '用户名不能为空'
                   },
                   stringLength: {
                       min: 6,
                       max: 30,
                       message: '用户名长度必须在6到30之间'
                   },
                   identical: {//相同
                       field: 'password',
                       message: '两次密码不一致'
                   },
                   different: {//不能和用户名相同
                       field: 'username',
                       message: '不能和用户名相同'
                   },
                   regexp: {//匹配规则
                       regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: 'The username can only consist of alphabetical, number, dot and underscore'
                   }
               }
           }
       }
   });
});