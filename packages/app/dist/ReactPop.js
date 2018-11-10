"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 600px;\n"], ["\n  height: 600px;\n"])));
var Element = styled_components_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  margin-top: 20%;\n"], ["\n  position: relative;\n  margin-top: 20%;\n"])));
var Pop = styled_components_1.default('span')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: ", "px\n  left: ", "px\n  background-color: #2096f3;\n  width: 100px;\n  padding: 5px;\n  border-radius: 10px;\n  color: white;\n  position: absolute;\n  text-align: center;\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #2096f3 transparent transparent transparent;\n  }\n"], ["\n  top: ", "px\n  left: ", "px\n  background-color: #2096f3;\n  width: 100px;\n  padding: 5px;\n  border-radius: 10px;\n  color: white;\n  position: absolute;\n  text-align: center;\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #2096f3 transparent transparent transparent;\n  }\n"])), function (props) { return props.position.y - props.position.height - 100; }, function (props) { return props.position.x; });
var ReactPop = /** @class */ (function (_super) {
    __extends(ReactPop, _super);
    function ReactPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            position: false
        };
        return _this;
    }
    ReactPop.prototype.componentDidMount = function () {
        var element = this.props.element;
        var elementPosition = document.getElementById(element).getClientRects();
        console.log(elementPosition);
        this.setState({ position: elementPosition[0] });
    };
    ReactPop.prototype.render = function () {
        var position = this.state.position;
        return (React.createElement(Container, null,
            React.createElement(Element, { id: "element1" }, "testando se o popup aparece no elemento 1"),
            React.createElement(Element, { id: "element2" }, "ou se aparece no elemento 2"),
            React.createElement(Pop, { position: position }, "pop 1")));
    };
    return ReactPop;
}(React.Component));
exports.default = ReactPop;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ReactPop.js.map