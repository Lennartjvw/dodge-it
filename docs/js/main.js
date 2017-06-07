var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.getX = function () {
        return this.x;
    };
    GameObject.prototype.getY = function () {
        return this.y;
    };
    GameObject.prototype.setY = function (y) {
        this.y = y;
    };
    return GameObject;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        console.log("Dodge It has started!");
        this.player = new Player();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.player.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        var container = document.getElementById("container");
        this.div = document.createElement("player");
        container.appendChild(this.div);
        this.x = 50;
        this.y = 600;
        this.width = 100;
        this.height = 200;
        this.spacebar = 32;
        this.d = 68;
        this.behaviourJump = new Jumping(this);
        this.behaviourDuck = new Duck(this);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
    }
    Player.prototype.onKeyDown = function (event) {
        if (event.keyCode == 32) {
            this.behaviourJump.jumping();
        }
        else if (event.keyCode == 68) {
            this.behaviourDuck.duck();
        }
    };
    Player.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}(GameObject));
var Duck = (function () {
    function Duck(p) {
        this.player = p;
    }
    Duck.prototype.jumping = function () {
    };
    Duck.prototype.duck = function () {
        console.log("duck!");
    };
    return Duck;
}());
var Jumping = (function () {
    function Jumping(p) {
        this.goingDown = false;
        this.jumpLimit = 300;
        console.log("Behaviour Jump!");
        this.player = p;
        this.jump_y = this.player.getY();
        this.isJumping = false;
    }
    Jumping.prototype.jumping = function () {
        var _this = this;
        console.log("jump");
        var y = this.player.getY();
        if (!this.isJumping) {
            this.isJumping = true;
            this.timer = setInterval(function () {
                if (y > _this.jumpLimit && !_this.goingDown) {
                    y -= 10;
                    _this.player.setY(y);
                }
                else {
                    _this.goingDown = true;
                    y += 10;
                    _this.player.setY(y);
                    if (y == _this.jump_y) {
                        clearInterval(_this.timer);
                        _this.goingDown = false;
                        _this.isJumping = false;
                    }
                }
            }, 10);
        }
    };
    Jumping.prototype.duck = function () {
    };
    return Jumping;
}());
//# sourceMappingURL=main.js.map