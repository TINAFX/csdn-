var blog=new Vue({
	el:'#app',
	data:{
		banner:[],
		blog_lists:[],
	},
	mounted:function(){
       this.getData()
	},
	methods:{
        getData:function(){
             var that=this
             var user_id = localStorage.getItem("userid")
             console.log(user_id)
             
        	$.ajax({
        		url:"http://blog.com/api/index/index",
        		dataType:"json",
        		type:"get",
                data:{
                    userid:this.user_id
                },
        		success:function(res){
        		that.banner=res.data.banner
        	    that.blog_lists=res.data.blog_lists
        		}
        	})
        	
        },
	}
})