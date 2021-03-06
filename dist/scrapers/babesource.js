"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BabesourceScraper = void 0;
const dom_1 = require("../dom");
class BabesourceScraper {
    constructor() {
        this.domain = "babesource.com";
    }
    getImageLinks(dom) {
        return Array.from(dom_1.qsAll(dom, ".thumbs.cf a:not(#startSlideshowAnchor)")).map((el) => {
            return el.getAttribute("href");
        });
    }
    scrape(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlSegments = url.split("/");
            const gallery = urlSegments.pop().replace(".html", "");
            const dom = yield dom_1.createDomFromURL(url);
            const links = this.getImageLinks(dom);
            return {
                gallery,
                links,
            };
        });
    }
}
exports.BabesourceScraper = BabesourceScraper;
