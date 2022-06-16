(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{517:function(e,s,_){"use strict";_.r(s);var t=_(65),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,_=e._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"微信登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信登录"}},[e._v("#")]),e._v(" 微信登录")]),e._v(" "),_("h2",{attrs:{id:"小程序登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序登录"}},[e._v("#")]),e._v(" 小程序登录")]),e._v(" "),_("ol",[_("li",[e._v("调用 "),_("code",[e._v("wx.login()")]),e._v(" 获取 临时登录凭证code ，并回传到开发者服务器。")]),e._v(" "),_("li",[e._v("调用 "),_("code",[e._v("auth.code2Session")]),e._v(" 接口，换取 "),_("code",[e._v("用户唯一标识 OpenID")]),e._v(" 、 "),_("code",[e._v("用户在微信开放平台帐号下的唯一标识UnionID")]),e._v("（若当前小程序已绑定到微信开放平台帐号） 和 "),_("code",[e._v("会话密钥 session_key")]),e._v("。")]),e._v(" "),_("li",[e._v("开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。")])]),e._v(" "),_("blockquote",[_("p",[e._v("会话密钥 "),_("code",[e._v("session_key")]),e._v(" 是对用户数据进行 "),_("code",[e._v("加密签名")]),e._v(" 的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。\n临时登录凭证 code 只能使用一次")])]),e._v(" "),_("h2",{attrs:{id:"公众号h5登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公众号h5登录"}},[e._v("#")]),e._v(" 公众号H5登录")]),e._v(" "),_("h3",{attrs:{id:"关于网页授权的两种scope的区别说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于网页授权的两种scope的区别说明"}},[e._v("#")]),e._v(" 关于网页授权的两种scope的区别说明")]),e._v(" "),_("h4",{attrs:{id:"一、静默授权"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、静默授权"}},[e._v("#")]),e._v(" 一、静默授权")]),e._v(" "),_("p",[e._v("以"),_("code",[e._v("snsapi_base")]),e._v("为"),_("code",[e._v("scope")]),e._v("发起的网页授权，是用来获取进入页面的用户的"),_("code",[e._v("openid")]),e._v("的，并且是静默授权并自动跳转到回调页的。用户感知的就是直接进入了回调页（往往是业务页面）")]),e._v(" "),_("blockquote",[_("p",[e._v("可以算是一种基础的授权方式，只获取了用户的openid，无法获取用户的其他基本信息")])]),e._v(" "),_("h4",{attrs:{id:"二、主动授权"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、主动授权"}},[e._v("#")]),e._v(" 二、主动授权")]),e._v(" "),_("p",[e._v("以"),_("code",[e._v("snsapi_userinfo")]),e._v("为scope发起的网页授权，是用来获取用户的基本信息的。但这种授权"),_("strong",[e._v("需要用户手动同意")]),e._v("，并且由于用户同意过，所以无须关注，就可在授权后获取该用户的基本信息。")]),e._v(" "),_("blockquote",[_("p",[e._v("用户管理类接口中的“获取用户基本信息接口”，是在"),_("code",[e._v("用户和公众号产生消息交互或关注后事件")]),e._v("推送后，才能根据用户OpenID来获取用户基本信息。这个接口，包括其他微信接口，都是需要该用户（即openid）关注了公众号后，才能调用成功的。")])]),e._v(" "),_("h3",{attrs:{id:"关于网页授权access-token和普通access-token的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于网页授权access-token和普通access-token的区别"}},[e._v("#")]),e._v(" 关于网页授权access_token和普通access_token的区别")]),e._v(" "),_("p",[e._v("微信网页授权是通过OAuth2.0机制实现的，在用户授权给公众号后，公众号可以获取到一个网页授权特有的接口调用凭证（网页授权access_token），通过网页授权access_token可以进行授权后接口调用，如获取用户基本信息；")]),e._v(" "),_("p",[e._v("其他微信接口，需要通过基础支持中的“获取access_token”接口来获取到的普通access_token调用。")]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("OAuth2.0")]),e._v(" 是一类基于回调的授权协议，在授权码模式中，整个授权需要分为两步进行，第一步下发授权码，第二步根据第一步拿到的授权码请求授权服务器下发访问令牌。\n"),_("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰-OAuth2.0的一个简单解释"),_("OutboundLink")],1)])]),e._v(" "),_("h3",{attrs:{id:"关于unionid机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于unionid机制"}},[e._v("#")]),e._v(" 关于UnionID机制")]),e._v(" "),_("ol",[_("li",[e._v("请注意，网页授权获取用户基本信息也遵循UnionID机制。即如果开发者有在多个公众号，或在公众号、移动应用之间统一用户帐号的需求，需要前往微信开放平台（open.weixin.qq.com）绑定公众号后，才可利用UnionID机制来满足上述需求。")]),e._v(" "),_("li",[e._v("UnionID机制的作用说明：如果开发者拥有多个移动应用、网站应用和公众帐号，可通过获取用户基本信息中的unionid来区分用户的唯一性，因为同一用户，对同一个微信开放平台下的不同应用（移动应用、网站应用和公众帐号），unionid是相同的。")])]),e._v(" "),_("h3",{attrs:{id:"关于特殊场景下的静默授权"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于特殊场景下的静默授权"}},[e._v("#")]),e._v(" 关于特殊场景下的静默授权")]),e._v(" "),_("ol",[_("li",[e._v("上面已经提到，对于以snsapi_base为scope的网页授权，就静默授权的，用户无感知；")]),e._v(" "),_("li",[e._v("对于"),_("strong",[e._v("已关注公众号的用户")]),e._v("，如果用户从公众号的会话或者自定义菜单进入本公众号的网页授权页，即使是scope为snsapi_userinfo，也是"),_("strong",[e._v("静默授权")]),e._v("，用户无感知。")])]),e._v(" "),_("h3",{attrs:{id:"网页授权流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网页授权流程"}},[e._v("#")]),e._v(" 网页授权流程")]),e._v(" "),_("p",[e._v("具体而言，网页授权流程分为四步：")]),e._v(" "),_("ol",[_("li",[e._v("引导用户进入授权页面同意授权，获取code")]),e._v(" "),_("li",[e._v("通过code换取网页授权access_token（与基础支持中的access_token不同）")]),e._v(" "),_("li",[e._v("如果需要，开发者可以刷新网页授权access_token，避免过期")]),e._v(" "),_("li",[e._v("通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）")])])])}),[],!1,null,null,null);s.default=a.exports}}]);