// 简单过渡动画
function animation(element, target, duration, interval) {
    var start = element.offsetLeft;

    element.timer && clearInterval(element.timer);

    element.timer = setInterval(function () {

        var step = Math.floor((target - start) / (duration / interval));

        if (step === 0) {
            step = target - start > 0 ? 1 : -1;
        }
        if (Math.abs(target - element.offsetLeft) <= Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timer);
        } else {
            element.style.left = element.offsetLeft + step + 'px';
        }
        console.log(element.timer, element.offsetLeft);
    }, interval);
}
