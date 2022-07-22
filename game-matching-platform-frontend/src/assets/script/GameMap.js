import { GameObject } from "./GameObject";
import { Wall } from "./Wall";

export class GameMap extends GameObject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;

        this.L = 0;  // 小正方形的边长
        this.rows = 13;
        this.cols = 13;

        this.wallNum = 30;
        this.dx = [-1, 0, 1, 0];
        this.dy = [0, 1, 0, -1];

        this.walls = [];
    }

    createWalls() {
        // 给四周创建墙
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (r === 0 || r === this.rows - 1 || c === 0 || c === this.cols - 1) {
                    let wall = new Wall(r, c, this);
                    this.walls.push(wall);
                }
            }
        }
        // 在地图中设置障碍物
        for (let i = 0; i < 10000; i++) {
            let t = this.wallNum;
            let g = [];
            for (let u = 0; u < this.rows; u++) {
                g[u] = [];
                for (let v = 0; v < this.cols; v++) {
                    g[u].push(false);
                }
            }
            for (let j = 0; j < 1000 && t > 0; j++) {
                let r = parseInt(Math.random() * this.rows - 2) + 1;  // 0 ~ rows - 1  应该是：1 ~ rows - 2
                let c = parseInt(Math.random() * this.cols - 2) + 1;
                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2) continue;  // 不能放在蛇头的位置
                if (g[r][c] || g[c][r]) continue;
                g[r][c] = g[c][r] = true;
                t -= 2;
            }
            if (t != 0) continue;
            // 检查是否联通
            let gBackup = []
            for (let u = 0; u < this.rows; u++) {
                gBackup[u] = [];
                for (let v = 0; v < this.cols; v++) {
                    gBackup[u].push(g[u][v]);
                }
            }
            if (this.checkMap(gBackup, this.rows - 2, 1, 1, this.cols - 2)) {
                for (let r = 1; r < this.rows - 1; r++) {
                    for (let c = 1; c < this.cols - 1; c++) {
                        if (g[r][c]) {
                            this.walls.push(new Wall(r, c, this));
                        }
                    }
                }
                break;
            }
        }
    }

    checkMap(g, a, b, x, y) {
        if (a == x && b == y) return true;
        g[a][b] = true;
        for (let i = 0; i < 4; i++) {
            let xx = a + this.dx[i], yy = b + this.dy[i];
            if (xx == 0 || xx == this.rows - 1 || yy == 0 || yy == this.cols - 1) continue;
            if (g[xx][yy]) continue;
            if (this.checkMap(g, xx, yy, x, y)) {
                return true;
            }
        }
        return false;
    }

    start() {
        this.createWalls();
    }

    updateSize() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update() {
        this.updateSize();
        this.render();
    }

    render() {
        const colorEven = '#A2D149', colorOdd = '#AAD751';
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if ((r + c) % 2 == 0) {
                    this.ctx.fillStyle = colorEven;
                } else {
                    this.ctx.fillStyle = colorOdd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }
}