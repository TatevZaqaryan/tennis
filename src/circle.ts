import { Graphics } from 'pixi.js';
import { areaConfig } from './config';

export class Circle extends Graphics {
    constructor() {
        super();
    }
    build() {
        const { circle_width } = areaConfig;

        this.lineStyle(2, 0x333333);
        this.drawCircle(0, 0, circle_width);
        this.endFill();
    }
}
