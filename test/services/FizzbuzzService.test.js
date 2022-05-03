const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Prueba FizzBuzz", () => {
  test("Agregando trick", () => {
    const explorerP = { name: "Explorer1", score: 1 };
    const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorerP);

    expect(explorerTrick).toMatchObject({
      name: "Explorer1",
      score: 1,
      trick: 1,
    });
  });
});
