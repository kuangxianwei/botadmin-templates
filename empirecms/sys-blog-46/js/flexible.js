!
function(e) {
	function t() {
		var t = o.getBoundingClientRect().width;
		t / i > 540 && (t = 540 * i), e.rem = t / 10, o.style.fontSize = e.rem + "px"
	}
	var i, n, a, r = e.document,
		o = r.documentElement,
		l = r.querySelector('meta[name="viewport"]'),
		d = r.querySelector('meta[name="flexible"]');
	if (l) {
		console.warn("将根据已有的meta标签来设置缩放比例");
		var s = l.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
		s && (n = parseFloat(s[2]), i = parseInt(1 / n))
	} else if (d) {
		var s = d.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
		s && (i = parseFloat(s[2]), n = parseFloat((1 / i).toFixed(2)))
	}
	if (!i && !n) {
		var m = (e.navigator.appVersion.match(/android/gi), e.navigator.appVersion.match(/iphone/gi)),
			i = e.devicePixelRatio;
		i = m ? i >= 3 ? 3 : i >= 2 ? 2 : 1 : 1, n = 1 / i
	}
	if (o.setAttribute("data-dpr", i), !l) if (l = r.createElement("meta"), l.setAttribute("name", "viewport"), l.setAttribute("content", "initial-scale=" + n + ", maximum-scale=" + n + ", minimum-scale=" + n + ", user-scalable=no"), o.firstElementChild) o.firstElementChild.appendChild(l);
	else {
		var c = r.createElement("div");
		c.appendChild(l), r.write(c.innerHTML)
	}
	e.dpr = i, e.addEventListener("resize", function() {
		clearTimeout(a), a = setTimeout(t, 300)
	}, !1), e.addEventListener("pageshow", function(e) {
		e.persisted && (clearTimeout(a), a = setTimeout(t, 300))
	}, !1), "complete" === r.readyState ? r.body.style.fontSize = 12 * i + "px" : r.addEventListener("DOMContentLoaded", function(e) {
		r.body.style.fontSize = 12 * i + "px"
	}, !1), t()
}(window);