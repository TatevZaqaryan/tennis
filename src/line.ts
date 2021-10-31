import { Graphics } from 'pixi.js';
import { areaConfig } from './config';

export class Line extends Graphics {
    constructor() {
        super();
    }
    build() {
        const { line_style, cell_width } = areaConfig;
        this.lineStyle(3, 0x333333);
    }
}
