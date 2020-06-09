
(function (NXD) {
    function getStyle(ele, prop) {
        var value = '';
        if (!ele || !prop) {
            return value;
        }

        if (document.defaultView && document.defaultView.getComputedStyle) {
            var css = document.defaultView.getComputedStyle(ele, null);
            value = css ? css.getPropertyValue(prop) : null;
        }
        return value;
    }
    // 判断元素是否透明
    function isOpacity(ele) {
        var value = '';
        var opacity = true;

        value = getStyle(ele, 'opacity');
        if (value === 0) {
            return opacity;
        }

        value = getStyle(ele, 'visibility');
        if (value === 'hidden') {
            return opacity;
        }

        value = getStyle(ele, 'display');
        if (value === 'none') {
            return opacity;
        }

        value = getStyle(ele, 'background-color');
        var re = /\d+,\s+\d+,\s+\d+,\s+0/;
        if (re.test(value)) {
            return opacity;
        }

        return false;
    }

    // 获得眼睛看到的bgc
    // 解决透明与不透明问题
    function getRealBgc(ele) {
        var bgc = '';
        if (!isOpacity(ele)) {
            bgc = getStyle(ele, 'background-color');
        } else if (ele !== document.documentElement) {
            // 递归去找父级bgc
            bgc = getRealBgc(ele.parentNode);
        } else {
            bgc = 'rgba(0, 0, 0, 0)';
        }
        return bgc;
    }

    NXD.getRealBgc = getRealBgc;
    // 扔到NXD的名字空间，防污染
})(window.NXD || (window.NXD = {}));
