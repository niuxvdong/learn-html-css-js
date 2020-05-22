(function () {
    // 蛇的宽度 长度 头颜色 身体颜色 方向
    function Snake(width, height, length, headBG, bodyBG, direction) {
        this.head = {
            headBG: headBG || this.DEFAULTBODYBG
        }
        this.body = [];
        this.body.bodyBG = bodyBG || this.DEFAULTBODYBG;
        this.width = width || this.DEFAULTWIDTH;
        this.height = height || this.DEFAULTHEIGHT;
        this.length = length || this.DEFAULTLENGTH;
        this.direction = direction || this.DEFAULTDIRECTION;
    }

    Snake.prototype.CLASSNAME = 'snake';
    Snake.prototype.DEFAULTWIDTH = 20;
    Snake.prototype.DEFAULTHEIGHT = 20;
    Snake.prototype.DEFAULTLENGTH = 3;
    Snake.prototype.DEFAULTHEADBG = '#f00';
    Snake.prototype.DEFAULTBODYBG = '#ff0';
    Snake.prototype.DEFAULTDIRECTION = 'right';

    // 初始化，调整模型，调用repaint
    Snake.prototype.init = function (map) {
        // 1. 检查head正确性
        this.head.x = this.length * this.width;
        this.head.y = this.height;

        // 2. 检查其他参数正确性
        // 3. 根据head length direction 判断蛇初始位置会不会越界
        //      head越界：调整
        //      身体越界：报错
        switch (this.direction) {
            case 'right':
                break;
        }
        // 4. 调用repaint
    }

    // 根据要求，移动蛇，调整模型，调用repaint
    Snake.prototype.move = function (map, food) {
        // 1. 移动蛇
        // 2. 是不是吃到食物，处理食物，调整蛇
        // 3. repaint
    }

    // 负责根据模型及divElement来操作DOM
    Snake.prototype.repaint = function (map) {

    }

    window.Snake = Snake;
})();
