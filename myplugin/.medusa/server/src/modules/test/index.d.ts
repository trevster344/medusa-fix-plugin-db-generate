import TestService from "./service";
export declare const TEST_MODULE = "TEST";
declare const _default: import("@medusajs/types").ModuleExports<typeof TestService> & {
    linkable: {
        readonly testmodel: {
            id: {
                serviceName: "TEST";
                field: "testmodel";
                linkable: "testmodel_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "TEST";
                field: "testmodel";
                linkable: "testmodel_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
export { TestService };
