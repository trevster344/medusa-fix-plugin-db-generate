import { model } from "@medusajs/framework/utils";

export const TestModel = model.define("testmodel", {
    id: model.id().primaryKey(), // template id
    a: model.text(),
    b: model.text(), // type of template
    c: model.text(),
});
