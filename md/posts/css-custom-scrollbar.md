---
title: CSS自主义浏览器滚动条
date: 2017-05-05T10:58:00+08:00
category: css
tags:  [css, js]
description: CSS3新特性定义浏览器滚动条样式，彻底丢弃传统js添加html元素定义方式，简化自定义滚动条配置流程，统一各平台滚动条在浏览器中的表现形式，提升用户体验。
---

由于平台不同，或用户采用的浏览器不同，或因同浏览器版本不同，都或多或少存在一定的差别，造成与 UI 设计图有一定的差别，影响用户视觉体验。那么目前这类问题常采用的方法都有那些嗯？

### 纯 CSS 样式

由 CSS 样式来定义浏览器滚动条涉及到几条 CSS3 样式规则，当然其兼容性相对来说也不是太好，适用于对兼容性要求不高的场景。

* `::-webkit-scrollbar`: 滚动条整体部分
* `::-webkit-scrollbar-thumb`: 滚动条里面的小方块，能上下左右移动（取决于是垂直滚动条还是水平滚动条）
* `::-webkit-scrollbar-track`: 滚动条的轨道（里面装有 thumb）
* `::-webkit-scrollbar-button`: 滚动条轨道两端的按钮，允许通过点击微调小方块的位置
* `::-webkit-scrollbar-track-piece`: 内层轨道，滚动条中间部分（除去）
* `::-webkit-scrollbar-corner`: 边角，及两个滚动条的交汇处
* `::-webkit-resizer`: 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

#### 示例

如下：一个简单的自定义滚动条，若要更多的自定义，分别对其扩展即可，写法与常规 CSS 一样。

```css
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #eee;
}

/*定义滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #eee;
}

/*定义滑块 */
::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
```

### JavaScript 实现

JavaScript 实现相对其兼容性都比较高，现下浏览器基本都支持，依赖 JQuery，以下三款插件也是目前比较常用的解决方案，其优先级（文件重量级）为：SlimScroll > Nicescroll > mCustomScrollbar

* [SlimScroll](//rocha.la/jQuery-slimScroll)：非常小巧的一款滚动插件
* [Nicescroll](//nicescroll.areaaperta.com/)：较小的一款，带有一定的视觉动画效果
* [mCustomScrollbar](//manos.malihu.gr/jquery-custom-content-scroller/)：比较重量级，支持多种自己定义

#### SlimScroll 示例：

```javascript
$(function() {
  $("#inner-content-div").slimScroll({
    height: "250px"
  });
});
```

#### Nicescroll 示例：

```javascript
$(function() {
  $("html").niceScroll();
});
```

#### mCustomScrollbar 示例：

通过 JavaScript 初始化：

```javascript
(function($) {
  $(window).on("load", function() {
    $(".content").mCustomScrollbar();
  });
})(jQuery);
```

通过 html 初始化：

```html
<div class="mCustomScrollbar" data-mcs-theme="dark">
  <!-- your content -->
</div>
```
