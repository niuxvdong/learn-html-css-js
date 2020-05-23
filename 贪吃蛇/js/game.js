(function () {
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }

    Game.prototype.INTERVAL = 300;
    Game.prototype.SPEEDUP = 1.2;

    Game.prototype.init = function () {
        this.food.init(this.map);

        this.snake.init(this.map);
        this.bindKey();

        runGame.call(this);
    }

    function runGame() {
        var interval = this.INTERVAL;

        var timer = setInterval(function () {
            this.snake.move(this.map, this.food);

            // 判断撞墙
            if (this.snake.head.x < 0 || this.snake.head.x >= map.offsetWidth
                || this.snake.head.y < 0 || this.snake.head.y >= map.offsetHeight) {
                clearInterval(timer);
                alert('游戏结束，刷新重试！');
            }

            if (this.snake.gotFood) {
                clearInterval(timer);
                interval = Math.ceil(interval / this.SPEEDUP);
                this.snake.gotFood = false;
                timer = setInterval(arguments.callee.bind(this), interval);
            }
         }.bind(this), interval)
    }

    Game.prototype.bindKey = function () {
        document.addEventListener('keydown', function (e) {
            console.log('key is press!', e.keyCode);
            // 上右下左： 38 39 40 37
            switch (e.keyCode) {
                case 38:
                    if (this.snake.direction !== 'down') {
                        this.snake.direction = 'up';
                    }
                    break;
                case 39:
                    if (this.snake.direction !== 'left') {
                        this.snake.direction = 'right';
                    }
                    break;
                case 40:
                    if (this.snake.direction !== 'up') {
                        this.snake.direction = 'down';
                    }
                    break;
                case 37:
                    if (this.snake.direction !== 'right') {
                        this.snake.direction = 'left';
                    }
                    break;
                default:
                    break;
            }
        }.bind(this));
    }
    window.Game = Game;
})();
