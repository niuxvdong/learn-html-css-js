(function () {
    // 蛇的宽度 长度 头颜色 身体颜色 方向
    function Snake(width, height, length, headBG, bodyBG, direction) {
        this.head = {
            backgroundColor: headBG || this.DEFAULTHEADBG
        }
        this.body = [];
        this.body.backgroundColor = bodyBG || this.DEFAULTBODYBG;
        this.width = width || this.DEFAULTWIDTH;
        this.height = height || this.DEFAULTHEIGHT;
        this.length = length || this.DEFAULTLENGTH;
        this.direction = direction || this.DEFAULTDIRECTION;
        this.gotFood = false;
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
                for (var i = 0; i < this.length - 1; i++){
                    var bodyBlock = {
                        x: this.head.x - (i + 1) * this.width,
                        y: this.head.y,
                        backgroundColor: this.body.backgroundColor || this.DEFAULTBODYBG,
                        divElement: null
                    }
                    this.body.push(bodyBlock);
                }
                break;
            case 'left':
                for (var i = 0; i < this.length - 1; i++){
                    var bodyBlock = {
                        x: this.head.x + (i + 1) * this.width,
                        y: this.head.y,
                        backgroundColor: this.body.backgroundColor || this.DEFAULTBODYBG,
                        divElement: null
                    }
                    this.body.push(bodyBlock);
                }
                break;
            case 'up':
                for (var i = 0; i < this.length - 1; i++){
                    var bodyBlock = {
                        x: this.head.x,
                        y: this.head.y + (i + 1) * this.height,
                        backgroundColor: this.body.backgroundColor || this.DEFAULTBODYBG,
                        divElement: null
                    }
                    this.body.push(bodyBlock);
                }
                break;
            case 'down':
                for (var i = 0; i < this.length - 1; i++){
                    var bodyBlock = {
                        x: this.head.x,
                        y: this.head.y - (i + 1) * this.height,
                        backgroundColor: this.body.backgroundColor || this.DEFAULTBODYBG,
                        divElement: null
                    }
                    this.body.push(bodyBlock);
                }
                break;
            default:
                console.error('direction is incorrect: ', this.direction);
                return false;
        }
        // 4. 调用repaint
        repaint.call(this, map);
    }

    // 根据要求，移动蛇，调整模型，调用repaint
    Snake.prototype.move = function (map, food) {

        // 判断是不是吃到食物
        if (this.head.x === food.x && this.head.y === food.y) {
            this.gotFood = true;

            food.init(map);
        }

        // 1. 移动蛇
        //      1.1 pop尾巴
        //      1.2 unshift(head)
        //      1.3 renew head
        if (!this.gotFood) {
            var tailBlock = this.body.pop();
            // 删除蛇尾
            tailBlock.divElement.remove();
        }


        var headBlock = {
            x: this.head.x,
            y: this.head.y,
            backgroundColor: this.head.backgroundColor,
            divElement: null
        };

        // 删除蛇头
        this.head.divElement.remove();
        this.head.divElement = null;
        this.head.backgroundColor = this.body.backgroundColor;
        // 将蛇头挨着的身体放到蛇头，即将蛇头变为身体
        this.body.unshift(this.head);


        // 处理蛇头位置
        switch (this.direction) {
            case 'right':
                headBlock.x += this.width;

                break;
            case 'left':
                headBlock.x -= this.width;
                break;
            case 'down':
                headBlock.y += this.height;
                break;
            case 'up':
                headBlock.y -= this.height;
                break;
            default:
                console.error('direction is incorrect: ', this.direction);
                return false;
        }

        this.head = headBlock;
        // 2. 是不是吃到食物，处理食物，调整蛇
        // 3. repaint
        repaint.call(this, map);

    }

    // 负责根据模型及divElement来操作DOM
    function repaint(map) {
        if (!this.head.divElement) {
            var div = document.createElement('div');
            div.className = this.CLASSNAME;
            div.style.left = this.head.x + 'px';
            div.style.top = this.head.y + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = this.head.backgroundColor;
            this.head.divElement = div;
            map.appendChild(div);
        }

        for (var i = 0; i < this.body.length; i++){
            if (!this.body[i].divElement) {
                var div = document.createElement('div');
                div.className = this.CLASSNAME;
                div.style.left = this.body[i].x + 'px';
                div.style.top = this.body[i].y + 'px';
                div.style.width = this.width + 'px';
                div.style.height = this.height + 'px';
                div.style.backgroundColor = this.body.backgroundColor;
                this.body[i].divElement = div;
                map.appendChild(div);
            }
        }
    }

    // function remove;
    window.Snake = Snake;
})();
