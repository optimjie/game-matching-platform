const GAME_OBJECT = [];

export class GameObject {
    constructor() {
        GAME_OBJECT.push(this);
        this.started = false;
        this.timedelta = 0;
    }

    start() {  // 第一帧运行

    }

    update() {  // 每一帧执行一次，除了第一帧

    }

    onDestory() {  // 删除前执行

    }

    destory() {
        this.onDestory();
        for (let i in GAME_OBJECT) {
            let obj = GAME_OBJECT[i];
            if (obj === this) {
                GAME_OBJECT.splice(i);
                break;
            }
        }
    }
}

let lastTimestamp;
const step = (timestamp) => {
    for (let obj of GAME_OBJECT) {
        if (!obj.started) {
            obj.started = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - lastTimestamp;
            obj.update();
        }
    }
    lastTimestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)