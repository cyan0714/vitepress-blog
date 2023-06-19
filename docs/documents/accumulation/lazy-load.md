# 手写懒加载

HTML:

```html
<img class="colleage-img" :data-src="`http://1.png`" style="width:600px;min-height:400px" />
<img class="colleage-img" :data-src="`http://2.png`" style="width:600px;min-height:400px" />
<img class="colleage-img" :data-src="`http://3.png`" style="width:600px;min-height:400px" />
```

JS:

```js
const imgs = document.querySelectorAll('.colleage-img');
const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const data_src = img.getAttribute('data-src');
      img.setAttribute('src', data_src);
      observer.unobserve(img);
    }
  });
};
const observer = new IntersectionObserver(callback);
imgs.forEach(image => {
  observer.observe(image);
});
```
