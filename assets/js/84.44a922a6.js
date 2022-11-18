(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{364:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),s("p",[t._v("JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。")]),t._v(" "),s("blockquote",[s("p",[t._v("本文参考阮一峰相关文章"),s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"一般用户认证流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般用户认证流程"}},[t._v("#")]),t._v(" 一般用户认证流程")]),t._v(" "),s("ol",[s("li",[t._v("用户向服务器发送用户名和密码。")]),t._v(" "),s("li",[t._v("服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。")]),t._v(" "),s("li",[t._v("服务器向用户返回一个 session_id，写入用户的 Cookie。")]),t._v(" "),s("li",[t._v("用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),t._v(" "),s("li",[t._v("服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")])]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("扩展性不好。如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。")]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("ol",[s("li",[t._v("session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。")]),t._v(" "),s("li",[t._v("服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。")])]),t._v(" "),s("h2",{attrs:{id:"jwt的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt的原理"}},[t._v("#")]),t._v(" JWT的原理")]),t._v(" "),s("p",[t._v("服务器认证以后，生成一个 JSON 对象，发回给用户。\n用户与服务端通信的时候，都要发回这个 JSON 对象。")]),t._v(" "),s("p",[t._v("服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。")]),t._v(" "),s("h2",{attrs:{id:"jwt的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt的数据结构"}},[t._v("#")]),t._v(" JWT的数据结构")]),t._v(" "),s("ul",[s("li",[t._v("Header（头部）")]),t._v(" "),s("li",[t._v("Payload（负载）")]),t._v(" "),s("li",[t._v("Signature（签名）")])]),t._v(" "),s("p",[t._v("写成一行就是")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Signature\n")])])]),s("h3",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),s("p",[t._v("是一个"),s("code",[t._v("JSON")]),t._v("对象，描述 "),s("code",[t._v("JWT")]),t._v(" 的元数据，最后，将此"),s("code",[t._v("JSON")]),t._v("对象使用   "),s("code",[t._v("Base64URL")]),t._v("算法转成字符串")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示签名的算法（algorithm）,默认是 HMAC SHA256（写成 HS256）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//typ属性表示这个令牌（token）的类型（type），JWT 令牌统一写为JWT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),s("p",[t._v("也是一个 JSON 对象，用来存放实际需要传递的数据，JWT 默认是不加密的，任何人都可以读到，所以不要把秘密信息放在这个部分。")]),t._v(" "),s("blockquote",[s("p",[t._v("这个 JSON 对象也要使用 Base64URL 算法转成字符串。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 官方字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iss")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：签发人\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expiration time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：过期时间\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：主题\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aud")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audience"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：受众\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nbf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Not Before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：生效时间\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Issued At"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：签发时间\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jti")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JWT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：编号\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 私有字段 如")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),s("p",[t._v("对前两部分的签名，防止数据篡改")]),t._v(" "),s("p",[t._v("首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nsecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v('算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。')]),t._v(" "),s("h3",{attrs:{id:"base64url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base64url"}},[t._v("#")]),t._v(" Base64URL")]),t._v(" "),s("p",[t._v("Header 和 Payload 串型化的算法是 "),s("code",[t._v("Base64URL")]),t._v("。这个算法跟 Base64 算法基本类似，但有一些小的不同。")]),t._v(" "),s("p",[t._v("JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 api.example.com/?token=xxx）。")]),t._v(" "),s("p",[t._v("Base64 有三个字符+、/和=，在 URL 里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_ 。这就是 Base64URL 算法。")]),t._v(" "),s("h2",{attrs:{id:"jwt的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt的特点"}},[t._v("#")]),t._v(" JWT的特点")]),t._v(" "),s("ol",[s("li",[t._v("JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。")]),t._v(" "),s("li",[t._v("JWT 不加密的情况下，不能将秘密数据写入 JWT。")]),t._v(" "),s("li",[t._v("JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。")]),t._v(" "),s("li",[t._v("JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")]),t._v(" "),s("li",[t._v("JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。")]),t._v(" "),s("li",[t._v("为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);