---
title: 正则表达式
date: 2015-05-05T10:50:58+08:00
category: regexp
tags: [regexp, js]
description: 收录工作中常用的用户名、密码、邮箱、URL、IP、时间、数字等JS正则表达式，以及正则表达式知识介绍和工具推荐，提升工作开发中的效率。
---

以下正则表达式均从各博客收集整理得来，目前还未作测试，请谨慎使用，若有错误麻烦各位及时反馈给我！
联系方式：[whenhan@foxmail.com](mailto:whenhan@foxmail.com)

### 正则工具

* [regexbuddy](//www.regexbuddy.com/)
* [WEB 前端助手（FeHelper）](//www.baidufe.com/fehelper) --- 一个非常不错的工具，包含了大部分前端开发所需要用到的小工具,可在线使用，也可安装[谷歌浏览器插件](//chrome.google.com/webstore/search/FEhelper?hl=zh-CN)

### 参考资料

* [ECAMScript2015 正则的扩展](//es6.ruanyifeng.com/#docs/regex)
* [元字符速查表](//hemin.cn/jq/regexp.html)

---

### 常用规则

金额：
```js
// 校验大于0的金额，（校验包括：不等于0，0.）
/^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/

// 合法金额数字，包括 0 0.00
/^(\d+)((?:\.\d+)?)$/
```

用户名/帐号(自定义)：

```javascript
// 字母开头，允许5-16字节，允许字母数字下划线
^[a-zA-Z][_a-zA-Z0-9]{4,15}$
```

密码：

```javascript
^[a-zA-Z]\w{5,17}$                       // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$  // 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
```

电子邮箱/Email:

```javascript
^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$
^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$

// 待定
^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$
\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
```

URL:

```javascript
// 常规URL
^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$

// 非常规URL
^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$
```

IP 地址:

```javascript
((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)
^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$

// 待定
// /(\d+)\.(\d+)\.(\d+)\.(\d+)/
```

Code：

```javascript
^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$  // HTML标签

(?<!http:|\S)//.*$        // 删除代码\\注释
```

时间：

```javascript
// 年-月-日
^(d{2}|d{4})-((0([1-9]{1}))|(1[1|2]))-(([0-2]([1-9]{1}))|(3[0|1]))$

// 月/日/年
^((0([1-9]{1}))|(1[1|2]))/(([0-2]([1-9]{1}))|(3[0|1]))/(d{2}|d{4})$
```

电话号码（移动电话、座机）：

```javascript
(\d{3}-|\d{4}-)?(\d{8}|\d{7})?                                                  // 国内电话号码
^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$   // 电话号码
^((\+?[0-9]{2,4}\-[0-9]{3,4}\-)|([0-9]{3,4}\-))?([0-9]{7,8})(\-[0-9]+)?$        // 电话号码
^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$                                             // 手机号码
^0\d{2,3}$                                                                      // 电话区号
```

数字：

```javascript
/^[0-9]*[1-9][0-9]*$/  // 正整数
/^\d+$/              // 非负整数
/^(-?\d+)(\.\d+)?$/    // 浮点数

^((-\d+)|(0+))$      // 非正整数
^-[0-9]*[1-9][0-9]*$ // 负整数
^-?\d+$              // 整数
^\d+(\.\d+)?$        // 非负浮点数
```

SQL 语句：

```javascript
^(select|drop|delete|create|update|insert).*$
```

网页表单里的文本框输入内容：

```javascript
// 只能输入中文
onkeyup = "value=value.replace(/[^u4E00-u9FA5]/g,'')";
onbeforepaste =
  "clipboardData.setData('text',clipboardData.getData('text').replace(/[^u4E00-u9FA5]/g,''))";

// 只能输入全角字符
onkeyup = "value=value.replace(/[^uFF00-uFFFF]/g,'')";
onbeforepaste =
  "clipboardData.setData('text',clipboardData.getData('text').replace(/[^uFF00-uFFFF]/g,''))";

// 只能输入数字
onkeyup = "value=value.replace(/[^d]/g,'')";
onbeforepaste =
  "clipboardData.setData('text',clipboardData.getData('text').replace(/[^d]/g,''))";

// 只能输入数字和英文
onkeyup = "value=value.replace(/[W]/g,'')";
onbeforepaste =
  "clipboardData.setData('text',clipboardData.getData('text').replace(/[^d]/g,''))";
```

其它：

```javascript
[\u2E80-\u9FFF]     // Unicode编码中的汉字范围(部分中文标点符号) 已验证
[\u0391-\uFFE5]     // 匹配中文（包括中文标点符号） 已验证
[\u4e00-\u9fa5]     // 匹配中文（不包含中文标点符号） 已验证
[\x00-\xff]         // 匹配双字节字符 已验证
(^\s*)|(\s*$)       // 匹配首尾空格的正则表达式
\n[\s| ]*\r         // 匹配空行

^[A-Za-z]+$         // 英文字符串
^[A-Z]+$            // 英文大写串
^[a-z]+$            // 英文小写串
^[A-Za-z0-9]+$      // 英文字符数字串
^\w+$               // 英数字加下划线串：

^[1-9]\d{5}$        // 邮政编码
```
