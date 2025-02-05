import { Module } from "@medusajs/framework/utils";
import TestService from "./service";

export const TEST_MODULE = "TEST";

export default Module(TEST_MODULE, {
    service: TestService,
});

export { TestService };
