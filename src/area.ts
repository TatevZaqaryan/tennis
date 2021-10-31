import { Container } from 'pixi.js';
import { Ball } from './ball';
import { Cell } from './cell';
import { areaConfig } from './config';
import { Gate } from './gate';
import { Line } from './line';
export class Area extends Container {
    ball: Ball;
    velocity: { x: number; y: number };
    constructor() {
        super();
        this.velocity = { x: 3, y: 3 };
    }

    buildCell() {
        const { cell_width, cell_hight } = areaConfig;

        const cell = new Cell();
        cell.build();

        cell.position.set(cell_width, cell_hight);
        this.addChild(cell);
    }

    // buildGate() {
    //     const gate = new Gate();
    //     gate.build();
    //     gate.position.set(500, 500);
    //     this.addChild(gate);
    // }
    buildLine() {
        const { cell_width, cell_hight, line_style } = areaConfig;

        const line = new Line();
        line.build();
        line.moveTo(line_style, cell_hight / 2);
        line.lineTo(cell_width - line_style, cell_hight * 0.5);
        //line.position.set(cell_width, cell_hight);
        // line.moveTo(line_style, cell_hight * 0.6 - line_style);
        // line.lineTo(cell_width - line_style, cell_hight * 0.6 - line_style);
        this.addChild(line);
    }
    buildBall() {
        const { cell_width, cell_hight, line_style } = areaConfig;

        this.ball = new Ball();
        this.ball.build();
        this.ball.position.set(cell_width / 2, cell_hight / 2);
        this.ball.pivot.set(0, 0);
        this.addChild(this.ball);
        this.eventBall();
    }
    eventBall() {
        this.ball.interactive = true;
        this.ball.on('pointerdown', this._onBallPointerDown, this);
        console.log(this.ball);
    }

    _onBallPointerDown() {
        const { cell_width, cell_hight, line_style } = areaConfig;
        setInterval(() => {
            this.ball.position.x += this.velocity.x;
            this.ball.position.y += this.velocity.y;
            this._checkWorldBounds();
        }, 10);
        console.log(100);
    }

    gateBuild() {
        const { cell_width, cell_hight, line_style } = areaConfig;

        const gate1 = new Gate();
        gate1.build();
        gate1.position.set(cell_width / 2, cell_hight - 2 * line_style);
        this.addChild(gate1);
        const gate2 = new Gate();
        gate2.build();
        gate2.position.set(cell_width / 2, 2 * line_style);
        this.addChild(gate2);
    }

    _checkWorldBounds() {
        const { cell_width, cell_hight, ball_width, line_style } = areaConfig;

        if (this.ball.position.x > cell_width - ball_width / 2 - line_style) {
            this.velocity.x = -3;
        }

        if (this.ball.position.x < ball_width / 2 + line_style) {
            this.velocity.x = 3;
        }

        if (this.ball.position.y > cell_hight - ball_width / 2 - line_style) {
            this.velocity.y = -3;
        }
        if (this.ball.position.y < ball_width / 2 + line_style) {
            this.velocity.y = 3;
        }
    }
}
