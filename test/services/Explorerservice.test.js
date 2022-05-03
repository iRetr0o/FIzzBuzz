const Reader = require("../../lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../../lib/services/Explorerservice");

describe("Pruebas para el ExplorerService", () => {
  test("Regresando el primer explorer que esta en java", () => {
    const explorersInJava = ExplorerService.filterByMission(explorers, "java");

    expect(explorersInJava[0]).toMatchObject({
      name: "Woopa6",
      githubUsername: "ajolonauta6",
      score: 6,
      mission: "java",
      stacks: ["elm"],
    });
  });
  test("Regresando el ultimo explorer que esta en node", () => {
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");

    expect(explorersInNode[9]).toMatchObject({
      name: "Woopa15",
      githubUsername: "ajolonauta15",
      score: 15,
      mission: "node",
      stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
    });
  });
  test("Cantidad de explorers en java", () => {
    const javaExplorers = ExplorerService.getAmountOfExplorersByMission(
      explorers,
      "java"
    );

    expect(javaExplorers).toBe(5);
  });
  test("Cantidad de explorers en node", () => {
    const javaExplorers = ExplorerService.getAmountOfExplorersByMission(
      explorers,
      "node"
    );

    expect(javaExplorers).toBe(10);
  });
});
