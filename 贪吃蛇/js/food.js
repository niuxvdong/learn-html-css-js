// 使用立即执行函数将其变成闭包，使用window.Food = Food 传出外面
// 使用prototype将公用的东西挂到原型
// 解决了名字空间污染问题

(function () {
    function Food(width, height, backgroundColor){
        this.width = width || this.DEFAULTWIDTH;
        this.height = height || this.DEFAULTHEIGHT;
        this.backgroundColor = backgroundColor || this.DEFAULTBG;
        this.divElement = null;
    }
    // 使用的CSS类名
    Food.prototype.CLASSNAME = 'food';
    Food.prototype.DEFAULTWIDTH = 20;
    Food.prototype.DEFAULTHEIGHT = 20;
    Food.prototype.DEFAULTBG = '#f00';

    // 清除上一个事物，初始化下一个新的事物
    // map: 上级element
    Food.prototype.init = function(map) {
        // 1. 有map
        // 2. creat a div, 配置样式
        var element = document.createElement('div');

        // 3. 随机产生一个x和y位置
        element.className = this.CLASSNAME;
        element.style.width = this.width + 'px';
        element.style.height = this.height + 'px';
        element.style.backgroundColor = this.backgroundColor;

        // 算出来的是food的宽度的倍数 = (0 ~ n) * food.width
        this.x = Math.floor(Math.random() * Math.floor((map.offsetWidth / this.width))) * this.width;
        this.y = Math.floor(Math.random() * Math.floor((map.offsetHeight / this.height))) * this.height;
        element.style.left = this.x + 'px';
        element.style.top = this.y + 'px';

        // 清除上次的food
        remove.apply(this);

        // 4. 把div画出来
        map.appendChild(element);
        this.divElement = element;
    }

    // 清除上一个事物
    function remove() {
        var element = this.divElement;
        if (element) {
            element.parentNode.removeChild(element);
            this.divElement = null;
        }
    }
    window.Food = Food;
})();
