import { Graphics } from 'pixi.js';
import { areaConfig } from './config';

export class Cell extends Graphics {
    constructor() {
        super();
    }

    build() {
        const { cell_width, cell_hight, line_style } = areaConfig;
        this.lineStyle(line_style, 0x000000, 1, 0);
        this.beginFill(0x228b22);
        this.drawRect(0, 0, cell_width, cell_hight);
        this.endFill();

        this.pivot.x = cell_width;
        this.pivot.y = cell_hight;
    }
}
