
var land=new Vue({
	el:'#app',
	data:{
		phone:"",
		user:{},
		pass:"",
	},
	mounted:function(){
		// this.button()
	},
	methods:{
		button:function(){
			var username=this.phone
			var userimg=this.pass
			var that=this
			if(username==""||userimg==""){
				alert("登陆失败")
			}
			else{
				$.ajax({
				url:"http://blog.com/api/user/doLogin",
				dataType:"json",
				type:"post",
				data:{
					phone:username,
					password:userimg,
				},
				success:function(res){
					that.user=res.data.user
						
						if(res.error_code==0){
							console.log(res.data.user.userid);
								window.localStorage.setItem("userid",res.data.user.userid);
								window.localStorage.setItem("username",res.data.user.username);
								window.localStorage.setItem("userimg",res.data.user.userimg);
							location.href="./cdn.html?id="+res.data.user.userid
						
						}
						else{
							alert("登陆失败")
						}
                        console.log(11)
					
				},
				error:function(res){
                  alert("登陆失败")
				}

			    })
			}
		},
		
	},
})