function getQuery(){
				var str = (window.location.search.length > 0 ?window.location.search.substring(1) : ''),

				args = {},
				items = str.length ? str.split("&") : [],
				item = null,
				name = null,
				value = null;
				for (i=0; i < items.length; i++){
					item = items[i].split("=");
					name = decodeURIComponent(item[0]);
					value = decodeURIComponent(item[1]);
					if (name.length) {
						args[name] = value;
					}
				}
				console.log(window.location.search),
				console.log(items)
				return args;
			}




var read=new Vue({
	el:'#app',
	data:{
		related_blog:{},
		blog_info:{},
		isshow:true,
		all:false,
	},
	mounted:function(){
		this.getData()
	},
	methods:{
		getData:function(){
			var that=this
			var nowId=getQuery().id
			var userId = window.localStorage.getItem("user_id");
             $.ajax({
             	url:"http://blog.com/api/blog/info",
             	type:"get",
             	dataType:"json",
             	data:{
                   id:nowId,
                   user_id:userId,
             	},
             	success:function(res){
                 that.blog_info=res.data.blog_info
                  that.related_blog=res.data.related_blog;
                 if( res.data.blog_info.collect_status == 1){
						that.$refs.collect.innerHTML = "已收藏";
					}
					else if ( res.data.blog_info.collect_status == -1){
						that.$refs.collect.innerHTML = "登录";
					};

             	},

             })
		},
		collect:function(){
			var that=this
			var nowId=getQuery().id
			var userId = window.localStorage.getItem("user_id");
			console.log(userId)
		
			 $.ajax({
             	url:"http://blog.com/api/collect/add",
             	type:"post",
             	dataType:"json",
             	data:{
                   blog_id:nowId,
                   user_id:userId,
             	},
             	success:function(res){
                   if ( res.error_code == 0 ) {
						that.$refs.collect.innerHTML = "已收藏";
					}
					else {
						that.$refs.collect.innerHTML = "收藏";
					}
				
             	},

             })
		},
		clickall:function(){
			this.all=true
			this.isshow=false
		},

	}
})