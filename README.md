# csdn-
整个csdn博客的项目是用Vue设计的
用ajax调用接口
用vue进行数据渲染页面
通过地址栏传递参数id，参数id是通过函数 getquery获取得到 其具体实现：
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
