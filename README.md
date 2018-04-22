# csdn-
##整个csdn博客的项目是用Vue设计的
##用ajax调用接口
##用vue进行数据渲染页面
##通过地址栏传递参数id，参数id是通过函数 getquery获取得到 其具体实现：
-function getQuery(){
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

## 登录
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=user&a=doLogin 

 `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |电话号|
|password |是  |string |密码|
|format |是  |string |类型 接口调用传json|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "user" : 
            {
                "userid"   : "",
                "username" : "",
                "userimg"  : "",
            },
    }
  }
```
## 注册
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=user&a=doReg `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |电话号|
|password |是  |string |密码|
|uname |是  |string |用户名|
|format |是  |string |类型 接口调用传json|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```
## 个人中心
**简要描述：** 
个人博客中心更新博客页面接口  http://blog.com/api/blog/add 

 **请求方式：**
- get
 	|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
|blog_id |否 |int |更新blog的id|
  **返回示例** //如果有blog_id才有my_blog_info否则只有classify_lists
 	``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	classify_lists: [
			{
			classify_id: "", //分类id
			classify_name: ""//分类名
			},
			{
			classify_id: "",
			classify_name: ""
			},
		],
		my_blog_info: {
			title: "有意思",
			content: "萨达所大所",
			classify_id: "4",
			createtime: "2018-04-15 14:44:50"
		}
    }
  }
```


## 更新
更新按钮接口

**请求URL：** 
- ` http://blog.com/api/blog/doEdit

 `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登录用户id|
|blog_id |是  |int |更新博客id|
|title 	|是  |string ||
|content |是  |string ||
classify_id|是  |int |分类id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
 ##个人博客删除接口
个人博客中心删除博客接口  http://blog.com/api/blog/del
 **请求方式：**
- post
 	|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
|blog_id |是  |int |删除blog的id|
  **返回示例**
 	``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	
    }
  }
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***

