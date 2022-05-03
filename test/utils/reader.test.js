const Reader = require("../../lib/utils/reader");

describe("Pruebas al reader", () => {
  test("1 Regresando un nombre de un explorer", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers[0].name).toBe("Woopa1");
  });
  test("2 Comprobando que un explorer tenga cierto stack", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers[1].stacks).toContain("javascript");
  });
  test("3 Regresando un explorer", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers[2]).toMatchObject({
      name: "Woopa3",
      githubUsername: "ajolonauta3",
      score: 3,
      mission: "node",
      stacks: ["elixir", "groovy", "reasonML"],
    });
  });
});
