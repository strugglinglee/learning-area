(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(s,t,a){s.exports=a.p+"assets/img/1.0d637454.png"},279:function(s,t,a){s.exports=a.p+"assets/img/2.9bc348d2.png"},336:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"oh-my-zsh使用总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh使用总结"}},[s._v("#")]),s._v(" oh-my-zsh使用总结")]),s._v(" "),t("h4",{attrs:{id:"前置知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[s._v("#")]),s._v(" 前置知识")]),s._v(" "),t("p",[s._v("你已经安装好好用的命令行工具oh-my-zsh")]),s._v(" "),t("blockquote",[t("p",[s._v("此处可以google搜索安装方法")])]),s._v(" "),t("h4",{attrs:{id:"zsh基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh基本配置"}},[s._v("#")]),s._v(" zsh基本配置")]),s._v(" "),t("p",[t("code",[s._v("vim ~/.zshrc")]),s._v("\nzshrc文件中就是基本的配置所在了")]),s._v(" "),t("p",[t("img",{attrs:{src:a(278),alt:"alt"}})]),s._v(" "),t("h4",{attrs:{id:"oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd ~/.oh-my-zsh\n")])])]),t("h4",{attrs:{id:"使用powerlevel10k主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用powerlevel10k主题"}},[s._v("#")]),s._v(" 使用powerlevel10k主题")]),s._v(" "),t("ol",[t("li",[s._v("下载主题")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("配置下列两行代码")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('ZSH_THEME="powerlevel10k/powerlevel10k"\nPOWERLEVEL9K_MODE="awesome-patched"\n\n')])])]),t("blockquote",[t("p",[s._v("配置完成之后可能会有一些乱码，是因为在已有的字体中有些符号找不到，故请下载MesloLGS NF字体\n"),t("a",{attrs:{href:"https://github.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"}},[s._v("MesloLGS NF字体下载链接"),t("OutboundLink")],1),s._v("\n终端和IDE中的相关配置都要改")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("执行"),t("code",[s._v("source $ZSH/oh-my-zsh.sh")])]),s._v(" "),t("li",[s._v("重新配置powerlevel10k")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("p10k configure\n")])])]),t("h4",{attrs:{id:"plugins配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins配置"}},[s._v("#")]),s._v(" Plugins配置")]),s._v(" "),t("p",[s._v("在此处 已有的配置git的基础上")]),s._v(" "),t("h5",{attrs:{id:"autojump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autojump"}},[s._v("#")]),s._v(" autojump")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("brew install autojump")])]),s._v(" "),t("li",[s._v("./zshrc文件中需配置")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh\n")])])]),t("h5",{attrs:{id:"自动补全工具zsh-autosuggestions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动补全工具zsh-autosuggestions"}},[s._v("#")]),s._v(" 自动补全工具"),t("code",[s._v("zsh-autosuggestions")])]),s._v(" "),t("h5",{attrs:{id:"高亮工具zsh-syntax-highlighting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高亮工具zsh-syntax-highlighting"}},[s._v("#")]),s._v(" 高亮工具"),t("code",[s._v("zsh-syntax-highlighting")])]),s._v(" "),t("ol",[t("li",[s._v("下载插件")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("zshrc中配置插件")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# Which plugins would you like to load?\n# Standard plugins can be found in $ZSH/plugins/\n# Custom plugins may be added to $ZSH_CUSTOM/plugins/\n# Example format: plugins=(rails git textmate ruby lighthouse)\n# Add wisely, as too many plugins slow down shell startup.\nplugins=(\n  git\n  autojump\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n)\n[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh\nsource $ZSH/oh-my-zsh.sh\n")])])]),t("h4",{attrs:{id:"成果展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成果展示"}},[s._v("#")]),s._v(" 成果展示")]),s._v(" "),t("p",[t("img",{attrs:{src:a(279),alt:"alt"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);