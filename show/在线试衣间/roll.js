// 禁止滚轮滚动
window.addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });

// 使用按钮控制页面定位
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 示例：假设有一个按钮和一个要定位到的元素
// <button onclick="scrollToElement('targetElement')">滚动到元素</button>
// <div id="targetElement">目标元素</div>

// 禁止网页文字被选中
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// 禁止点击和滑动空白处的操作
document.addEventListener('mousedown', function(e) {
  if (!e.target.closest('button')) {
    e.preventDefault();
  }
});

// 禁用点击空白处滑动翻页
document.addEventListener('mousedown', function(e) {
  e.preventDefault();
});


// 使用按钮控制页面定位
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 示例：假设有一个按钮和一个要定位到的元素
// <button onclick="scrollToElement('targetElement')">滚动到元素</button>
// <div id="targetElement">目标元素</div>
