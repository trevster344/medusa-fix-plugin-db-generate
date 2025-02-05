"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.TestModel = utils_1.model.define("testmodel", {
    id: utils_1.model.id().primaryKey(), // template id
    a: utils_1.model.text(),
    b: utils_1.model.text(), // type of template
    c: utils_1.model.text(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdG1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdGVzdC9tb2RlbHMvdGVzdG1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFrRDtBQUVyQyxRQUFBLFNBQVMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUMvQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLGNBQWM7SUFDM0MsQ0FBQyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDZixDQUFDLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFFLG1CQUFtQjtJQUNwQyxDQUFDLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtDQUNsQixDQUFDLENBQUMifQ==