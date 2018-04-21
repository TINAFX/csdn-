
var land=new Vue({
	el:'#app',
	data:{
		data:{}
	},
	mounted:function(){
		// this.button()
	},
	methods:{
		button:function(){
			var uname=$(".unname").val();
			var username=$(".name").val();
			var userimg=$(".pass").val();
			if(uname==""||username==""||userimg==""){
				alert("注册失败")
			}
			else{
				$.ajax({
				url:"http://blog.com/api/user/doReg",
				dataType:"json",
				type:"post",
				data:{
					uname:uname,
					phone:username,
					password:userimg,
				},
				success:function(res){
					that.user=res.data
					if(res.error_code==0){
							location.href="./cdn.html"
						}
						else{
							alert("注册失败")
						}
                        console.log(11)
					
				},
				error:function(res){
                  alert("注册失败")
				}

			})
			}
			var that=this
			

		},
		
	},
})