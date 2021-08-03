import { log, onClick } from "./utils";

log(`Hello World`);

function test(ev: MouseEvent) {
    log(`click`);
}

onClick("testX", test);
onClick("testY", test);
