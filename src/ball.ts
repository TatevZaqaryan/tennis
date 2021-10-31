import { Graphics } from 'pixi.js';
import { areaConfig } from './config';

export class Ball extends Graphics {
    x: number;
    y: number;

    constructor() {
        super();
    }

    build() {
        const { ball_width } = areaConfig;

        this.beginFill(0xffffff);
        this.drawCircle(0, 0, ball_width);
        this.endFill();
    }
}
