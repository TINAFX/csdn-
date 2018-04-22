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



var fubu=new Vue({
	el:'#app',
	data:{
		title:"",
		class_id:""
	},
	mounted:function(){
		var ue = UE.getEditor('container');
        this.getData()
	},

	methods:{
		getUeditorContent: function(){
    				return UE.getEditor('container').getContent()
    			},
        getData:function(){
             var userId = localStorage.getItem("user_id")
             var that=this
             $.ajax({
                url:"http://blog.com/api/blog/add",
                type:"get",
                dataType:"json",
                data:{
                    user_id:userId,
                    blog_id:getQuery().id,
                },
                success:function(res){
                    
                        // that.classify_List=res.data.classify_List,
                        // that.my_blog_info=res.data.my_blog_info;
                        that.title=res.data.my_blog_info.title;
                        that.classify_id=res.data.my_blog_info.classify_id;
			setimeout(function(){
				UE.getEditor('container').setContent(res.data.my_blog_info.content);
			},1000)
                    
                }
             })
        },
    	issue:function(){
    		 var that=this
             var userId = localStorage.getItem("user_id")
    		$.ajax({
    			url:"http://blog.com/api/blog/doAdd",
    			type:"post",
    			dataType:"json",
    			data:{
    				user_id:userId,
    				title:this.title,
    				"content": this.getUeditorContent(),
    				"classify_id": this.class_id,
                    
    			},
    			success:function(res){
                      if(res.error_code == 0){
    							alert("发布成功即将跳转。。。。。。");
    							window.location.href="./blog-list.html"
    						}else {
    							alert(res.message);
    						}
    			}
    		})
    	},
        editon:function(){
             var userId = localStorage.getItem("user_id")
            $.ajax({
                url:"http://blog.com/api/blog/doEdit",
                type:"post",
                dataType:"json",
                data:{
                    user_id:userId,
                    title:this.title,
                    "content": this.getUeditorContent(),
                    "classify_id": this.class_id,
                    blog_id:getQuery().id
                    
                },
                success:function(res){
                      if(res.error_code == 0){
                                alert("修改成功即将跳转。。。。。。");
                                window.location.href="./blog-list.html"
                            }else {
                                alert(res.message);
                            }
                }
            })

        }
	}
})
