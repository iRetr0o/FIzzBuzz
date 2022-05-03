const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Prueba FizzBuzz", () => {
  test("Ver si se agrega la propiedad trick", () => {
    const explorerP1 = { name: "ExplorerP1", score: 0 };
    const explorerP1Trick =
      FizzbuzzService.applyValidationInExplorer(explorerP1);

    expect(explorerP1Trick).toHaveProperty("trick");
  });
  test("Comprobando las propiedades del explorer", () => {
    const explorerP = { name: "ExplorerP", score: 1 };
    const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorerP);

    expect(explorerTrick).toEqual({
      name: "ExplorerP",
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
