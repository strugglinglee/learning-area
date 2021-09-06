### oh-my-zsh使用总结

#### 前置知识

你已经安装好好用的命令行工具oh-my-zsh
> 此处可以google搜索安装方法

#### zsh基本配置

`vim ~/.zshrc`
zshrc文件中就是基本的配置所在了

![alt](./images/1.png)

#### oh-my-zsh
```
cd ~/.oh-my-zsh
```

#### 使用powerlevel10k主题

1. 下载主题

```
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. 配置下列两行代码

```
ZSH_THEME="powerlevel10k/powerlevel10k"
POWERLEVEL9K_MODE="awesome-patched"

```
> 配置完成之后可能会有一些乱码，是因为在已有的字体中有些符号找不到，故请下载MesloLGS NF字体
> [MesloLGS NF字体下载链接](https://github.com/romkatv/powerlevel10k)
> 终端和IDE中的相关配置都要改


3. 执行`source $ZSH/oh-my-zsh.sh`
4. 重新配置powerlevel10k

```
p10k configure
```

#### Plugins配置
在此处 已有的配置git的基础上
##### autojump

1. `brew install autojump`
2. ./zshrc文件中需配置
```
[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh
```

##### 自动补全工具`zsh-autosuggestions`

##### 高亮工具`zsh-syntax-highlighting`

1. 下载插件

```
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

2. zshrc中配置插件

```
# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
)
[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh
source $ZSH/oh-my-zsh.sh
```

#### 成果展示

![alt](./images/2.png)