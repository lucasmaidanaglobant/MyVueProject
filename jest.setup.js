const { config } = require("@vue/test-utils");
const failOnConsole = require("jest-fail-on-console");

// Mock window.localStorage
jest.spyOn(window.localStorage.__proto__, "getItem");
window.localStorage.__proto__.getItem = jest.fn();
jest.spyOn(window.localStorage.__proto__, "setItem");
window.localStorage.__proto__.setItem = jest.fn();
config.global.mocks = {
  $t: (text) => text,
};
config.renderStubDefaultSlot = true;
failOnConsole();
