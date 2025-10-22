const { main } = require("../run");

jest.mock("../src/satellite", () => ({
  getTable: jest.fn(() => console.log("Mocked satellite.getTable called"))
}));

jest.mock("../src/iridium", () => ({
  getTable: jest.fn(() => console.log("Mocked iridium.getTable called"))
}));

describe("run.js", () => {
  test("should have a main function", () => {
    expect(main).toBeDefined();
  });

  test("should call satellite.getTable safely", () => {
    const satellite = require("../src/satellite");
    main();
    expect(satellite.getTable).toHaveBeenCalled();
  });
});
