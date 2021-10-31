import { Graphics } from 'pixi.js';
import { areaConfig } from './config';

export class Gate extends Graphics {
    constructor() {
        super();
    }
    build() {
        this.beginFill(0x0000ff);
        const { gate_width, gate_hight } = areaConfig;
        this.drawRect(0, 0, gate_width, gate_hight);
        this.endFill();

        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;
    }
}
