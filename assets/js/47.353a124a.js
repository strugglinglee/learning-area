(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{483:function(t,a,s){"use strict";s.r(a);var i=s(62),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"git-别名命令行配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-别名命令行配置"}},[t._v("#")]),t._v(" git 别名命令行配置")]),t._v(" "),s("p",[t._v("使用了oh-my-zsh命令行工具")]),t._v(" "),s("p",[t._v("里面自带了git alias配置")]),t._v(" "),s("h4",{attrs:{id:"进入git-plugin-zsh修改相关配置-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入git-plugin-zsh修改相关配置-mac"}},[t._v("#")]),t._v(" 进入git.plugin.zsh修改相关配置（mac）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" cd ~/.oh-my-zsh/plugins/git\n sudo vi git.plugin.zsh\n")])])]),s("h4",{attrs:{id:"目前我加了以下配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目前我加了以下配置"}},[t._v("#")]),t._v(" 目前我加了以下配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("alias gprd='git pull origin $(git_develop_branch) --rebase'\nalias gprt='git pull origin test --rebase'\nalias gcskip='git commit -n --amend --no-edit'\nalias gcskipm='git commit -n --amend -m'\nalias gcnm='git commit -n -m'\nalias gbddev='git branch -D $(git_develop_branch)'\nalias gbdtest='git branch -D test'\n\nalias gstatus='git status'\nalias gstash='git stash'\nalias gstashp='git stash pop'\n\n//切换远程dev分支\nalias gcodev='git checkout -b dev origin/dev'\n\n//切换远程test分支\nalias gcotest='git checkout -b test origin/test'\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);