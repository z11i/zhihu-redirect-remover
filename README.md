# 知乎重定向消除工具 Zhihu Redirect Remover
这是一个简单的 Chrome extension，用于知乎的所有页面。
## 它是干什么的
知乎页面的任何外部链接都会被强制从知乎重定向。比如，如果你在答案里附了一个维基百科的链接 https://www.wikipedia.org/ ，这个链接在发布之后就会变成 https://link.zhihu.com/?target=https%3A//www.wikipedia.org/ 。

这个 extension 把知乎的重定向删掉，让你可以直接访问原作者的链接。
## 为什么要删除重定向
最大的问题当然是慢，尤其海外党可以明显体会到空白屏的等待时间。本来是可以秒开的页面变成了一两秒才能打开，很恶心。

同时也是为了拒绝知乎的 tracking；Tracking 也很恶心。

另外，如果过快访问的话，知乎会对 IP 进行短暂封锁。WTF 知乎？我访问一个外部链接的速度跟你有什么关系？
## 怎么使用
在 [Release](https://github.com/zhongwei-z/zhihu-redirect-remover/releases) 里下载 `.crx` 文件，拖进 Chrome 的 extension 页(chrome://extensions/)即可。
## To-do
Firefox 与 Safari 的版本。
## 参考
灵感来源自 [Don't track me Google](https://chrome.google.com/webstore/detail/dont-track-me-google/gdbofhhdmcladcmmfjolgndfkpobecpg)，代码参考了 @ponychicken 的 [google-redirect-remover](https://github.com/ponychicken/google-redirect-remover)。
