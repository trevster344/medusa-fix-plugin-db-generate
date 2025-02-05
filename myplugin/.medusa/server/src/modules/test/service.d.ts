declare const TestModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly TestModel: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        a: import("@medusajs/framework/utils").TextProperty;
        b: import("@medusajs/framework/utils").TextProperty;
        c: import("@medusajs/framework/utils").TextProperty;
    }>, "testmodel">;
}>>;
declare class TestModuleService extends TestModuleService_base {
}
export default TestModuleService;
