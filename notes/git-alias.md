### git 别名命令行配置

使用了oh-my-zsh命令行工具

里面自带了git alias配置

#### 进入git.plugin.zsh修改相关配置（mac）

```
 cd ~/.oh-my-zsh/plugins/git
 sudo vi git.plugin.zsh
```


#### 目前我加了以下配置

```
alias gprd='git pull origin $(git_develop_branch) --rebase'
alias gprt='git pull origin test --rebase'
alias gcskip='git commit -n --amend --no-edit'
alias gcskipm='git commit -n --amend -m'
alias gcnm='git commit -n -m'
alias gbddev='git branch -D $(git_develop_branch)'
alias gbdtest='git branch -D test'

alias gstatus='git status'
alias gstash='git stash'
alias gstashp='git stash pop'

//切换远程dev分支
alias gcodev='git checkout -b dev origin/dev'

//切换远程test分支
alias gcotest='git checkout -b test origin/test'
```