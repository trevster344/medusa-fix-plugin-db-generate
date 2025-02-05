import { MedusaService } from "@medusajs/framework/utils";
import { TestModel } from "./models/testmodel";

class TestModuleService extends MedusaService({
    TestModel,
}) {}

export default TestModuleService;
