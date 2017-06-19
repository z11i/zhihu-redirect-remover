chrome.extension.sendMessage({}, function (response) {
	const zhUrlReg = /https?:\/\/.+zhihu.+/gi;
	const zhRedReg = /https?:\/\/link.zhihu.com\/\?target=(.*)/;
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			if (document.location.href.match(zhUrlReg)) {
				var eles = document.querySelectorAll('a.external');
				for (var i = 0; i < eles.length; i++) {
					var ele = eles[i];
					var found = eles[i].getAttribute('href').match(zhRedReg);
					if (found) {
						var realUrl = decodeURIComponent(found[1]);
						ele.href = realUrl;
					}
				}
			}

		}
	}, 10);
});