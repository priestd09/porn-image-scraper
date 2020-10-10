var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { scrapeLink, dryRun } from "./scrapers";
import argv from "./args";
(() => __awaiter(void 0, void 0, void 0, function* () {
    let urls = argv._;
    if (!urls.length) {
        console.error("(ts-)node . url0 url1 ...");
        console.error("Run with --help for details");
        process.exit(1);
    }
    if (argv.dry) {
        console.log(yield dryRun(urls));
    }
    else {
        for (const url of urls) {
            yield scrapeLink(url);
        }
    }
    process.exit();
}))();
