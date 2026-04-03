var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SvgTerm } from "./svg-term";
import { loadCast } from "./load-cast";
import { defaultTheme } from "./default-theme";
function main(window, document) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.createElement("div");
        document.body.appendChild(container);
        const data = yield fetch('/fixtures/example.json');
        const cast = loadCast(yield data.text());
        ReactDOM.render(React.createElement(SvgTerm, { cast: cast, theme: defaultTheme, decorations: false, paddingX: 10, paddingY: 10, cursor: true }), container);
    });
}
window.addEventListener("DOMContentLoaded", () => main(window, document));
//# sourceMappingURL=example.js.map