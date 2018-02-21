var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Dragact } from '../lib/dragact';
import './index.css';
var Words = [
    { content: 'You can do anything, but not everything.', img: 'http://pic.sc.chinaz.com/files/pic/pic9/201303/xpic10472.jpg' },
    { content: 'Those who dare to fail miserably can achieve greatly.', img: 'https://img00.deviantart.net/1163/i/2013/059/d/7/irish_views_by_ssquared_photography-d5wjnsk.jpg' },
    { content: 'You miss 100 percent of the shots you never take.', img: 'http://www.landsendhotel.co.uk/uploads/gallery/gallery/coastal_scenery_seascapes_6.jpg' },
    { content: 'Those who believe in telekinetics, raise my hand.', img: 'https://tctechcrunch2011.files.wordpress.com/2017/10/26099344353_18cd6fabb8_k.jpg?w=738' },
    { content: 'I’d rather live with a good question than a bad answer.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa26cLzh6PYUwY4LMpwbHyDHFmWi_w2JuqDzeOdm1IIEbBZO0Vg' }
];
var Card = function (props) {
    var item = props.item;
    var dataSet = props['data-set'];
    return (React.createElement("div", { className: 'layout-Item' },
        React.createElement("img", { src: item.img, style: { width: '100%', height: '60%' }, draggable: false, alt: 'card' }),
        React.createElement("div", { style: { padding: 5, textAlign: 'center', color: '#595959' } }, dataSet.handle ? React.createElement("div", { className: 'card-handle', id: "dragact-handle" }, "\u70B9\u6211\u62D6\u52A8") : item.content)));
};
var HandleLayout = /** @class */ (function (_super) {
    __extends(HandleLayout, _super);
    function HandleLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            layout: []
        };
        return _this;
    }
    HandleLayout.prototype.componentDidMount = function () {
        this.setState({
            layout: this.dragactNode.getLayout()
        });
    };
    HandleLayout.prototype.render = function () {
        var _this = this;
        var margin = [5, 5];
        var dragactInit = {
            width: 800,
            col: 12,
            rowHeight: 800 / 12,
            margin: margin,
            className: 'normal-layout'
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                React.createElement("div", null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "Handle Layout Demo"),
                    React.createElement(Dragact, __assign({}, dragactInit, { ref: function (node) { return node ? _this.dragactNode = node : null; } }),
                        React.createElement(Card, { item: Words[0], key: 0, "data-set": { GridX: 0, GridY: 0, w: 3, h: 3 } }),
                        React.createElement(Card, { item: Words[1], key: 1, "data-set": { GridX: 3, GridY: 0, w: 3, h: 3 } }),
                        React.createElement(Card, { item: Words[2], key: 2, "data-set": { GridX: 6, GridY: 0, w: 3, h: 3 } }),
                        React.createElement(Card, { item: Words[3], key: 3, "data-set": { GridX: 9, GridY: 0, w: 3, h: 3, handle: true } }))))));
    };
    return HandleLayout;
}(React.Component));
export { HandleLayout };
