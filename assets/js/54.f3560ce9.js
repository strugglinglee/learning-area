(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{347:function(t,s,e){"use strict";e.r(s);var o=e(13),_=Object(o.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"登录认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录认证"}},[t._v("#")]),t._v(" 登录认证")]),t._v(" "),s("h2",{attrs:{id:"什么是认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是认证"}},[t._v("#")]),t._v(" 什么是认证")]),t._v(" "),s("p",[t._v("验证当前用户的身份")]),t._v(" "),s("ul",[s("li",[t._v("用户名密码认证")]),t._v(" "),s("li",[t._v("邮箱发送登录链接")]),t._v(" "),s("li",[t._v("手机号接收验证码")])]),t._v(" "),s("h2",{attrs:{id:"什么是授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是授权"}},[t._v("#")]),t._v(" 什么是授权")]),t._v(" "),s("p",[t._v("用户授予第三方访问该用户某些资源的权限")]),t._v(" "),s("h3",{attrs:{id:"实现授权的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现授权的方式"}},[t._v("#")]),t._v(" 实现授权的方式")]),t._v(" "),s("ul",[s("li",[t._v("cookie")]),t._v(" "),s("li",[t._v("session")]),t._v(" "),s("li",[t._v("token")]),t._v(" "),s("li",[t._v("OAuth")])]),t._v(" "),s("h2",{attrs:{id:"什么是凭证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是凭证"}},[t._v("#")]),t._v(" 什么是凭证")]),t._v(" "),s("p",[t._v("实现认证和授权的前提，是需要一种媒介（证书）来标记访问者的身份。")]),t._v(" "),s("ul",[s("li",[t._v("用户登录成功后，服务器就会给浏览器颁发一个令牌（token）,用来表明你的身份，每次浏览器发送请求就会携带这个令牌。")])]),t._v(" "),s("h2",{attrs:{id:"什么是cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是cookie"}},[t._v("#")]),t._v(" 什么是cookie")]),t._v(" "),s("ul",[s("li",[t._v("cookie是服务端发送到用户浏览器并保存在本地的一小块数据，会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上")]),t._v(" "),s("li",[t._v("cookie不可跨域，每个cookie都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（通过domain）")])]),t._v(" "),s("h2",{attrs:{id:"什么是session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是session"}},[t._v("#")]),t._v(" 什么是session")]),t._v(" "),s("p",[t._v("session是基于cookie实现的，session存储在服务器端，sessionId会存在客户端cookie中")]),t._v(" "),s("p",[t._v("sessionId是cookie和session的一道桥梁，大部分系统都是根据这个原理来验证用户登录状态。")]),t._v(" "),s("h2",{attrs:{id:"session和cookie的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session和cookie的区别"}},[t._v("#")]),t._v(" session和cookie的区别")]),t._v(" "),s("ul",[s("li",[t._v("session更安全，session是存储在服务器端，cookie是存储在客户端")]),t._v(" "),s("li",[t._v("session可以存任意数据类型，cookie只能存字符串，其他类型数据需要将其转换成字符串")]),t._v(" "),s("li",[t._v("有效期不同：cookie可设置为长时间保持，session超时会失效")]),t._v(" "),s("li",[t._v("存储大小不同：单个cookie保存的数据不能超过4k,session可存储数据远高于cookie，但是访问量过多会占用过多的服务器资源")])]),t._v(" "),s("h2",{attrs:{id:"什么是令牌-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是令牌-token"}},[t._v("#")]),t._v(" 什么是令牌(token)")]),t._v(" "),s("p",[t._v("访问资源接口（API）时所需要的资源凭证")]),t._v(" "),s("h3",{attrs:{id:"简单-token-的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单-token-的组成"}},[t._v("#")]),t._v(" 简单 token 的组成")]),t._v(" "),s("ul",[s("li",[t._v("uid(用户唯一的身份标识)")]),t._v(" "),s("li",[t._v("time(当前时间的时间戳)")]),t._v(" "),s("li",[t._v("sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）")])]),t._v(" "),s("h3",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("ul",[s("li",[t._v("服务端无状态化、可扩展性好")]),t._v(" "),s("li",[t._v("支持移动端设备")]),t._v(" "),s("li",[t._v("安全")]),t._v(" "),s("li",[t._v("支持跨程序调用")])]),t._v(" "),s("h3",{attrs:{id:"过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),s("ul",[s("li",[t._v("客户端使用用户名跟密码请求登录")]),t._v(" "),s("li",[t._v("服务端收到请求，去验证用户名与密码")]),t._v(" "),s("li",[t._v("验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端")]),t._v(" "),s("li",[t._v("客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里")]),t._v(" "),s("li",[t._v("客户端每次向服务端请求资源的时候需要带着服务端签发的 token")]),t._v(" "),s("li",[t._v("服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据")])]),t._v(" "),s("blockquote",[s("p",[t._v("每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里\n基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库\ntoken 完全由应用管理，所以它可以避开同源策略")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-oauth2.0"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-JWT"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);