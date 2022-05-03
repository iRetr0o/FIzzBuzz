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
  test("Trick = score si el resto entre 5 y 3 no es 0", () => {
    const explorer1 = { name: "Explorer1", score: 1 };
    const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);

    expect(explorerTrick.trick).toBe(1);
  });
});
