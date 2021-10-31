import * as PIXI from 'pixi.js';
import { Area } from './area';
import { areaConfig } from './config';

export class Game extends PIXI.Application {
    board: Area;
    constructor() {
        super({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x444444,
        });

        document.body.appendChild(this.view);

        this.ticker.add(this._update, this);
        this.ticker.start();
        this.loader.onComplete.add(this._onLoadComplete, this);
        this.loader.load();
    }

    _onLoadComplete() {
        this.buildBoard();
        console.warn('load complete');
    }

    _resize(width?, height?) {
        width = width || window.innerWidth;
        height = height || window.innerHeight;

        this._resizeCanvas(width, height);
        this._resizeRenderer(width, height);
    }

    _resizeCanvas(width, height) {
        const { style } = this.renderer.view;

        style.width = width + 'px';
        style.height = height + 'px';
    }

    _resizeRenderer(width, height) {
        this.renderer.resize(width, height);
    }
    buildBoard() {
        const { cell_width, cell_hight, line_style } = areaConfig;

        this.board = new Area();
        this.board.buildCell();
        this.board.buildLine();
        this.board.buildBall();
        this.board.gateBuild();
        this.board.pivot.set(cell_width, cell_hight);
        this.board.position.set(this.screen.width, this.screen.height);
        this.stage.addChild(this.board);
        this.board._checkWorldBounds();
    }

    _update() {
        //
    }
}
