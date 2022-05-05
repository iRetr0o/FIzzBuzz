const Reader = require("../../lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../../lib/services/Explorerservice");

describe("Pruebas para el ExplorerService", () => {
    test("1 Regresando el primer explorer que esta en java", () => {
        const explorersInJava = ExplorerService.filterByMission(explorers, "java");

        expect(explorersInJava[0]).toMatchObject({
            name: "Woopa6",
            githubUsername: "ajolonauta6",
            score: 6,
            mission: "java",
            stacks: ["elm"],
        });
    });
    test("2 Regresando el ultimo explorer que esta en node", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNode[9]).toMatchObject({
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
        });
    });
    test("3 Cantidad de explorers en java", () => {
        const javaExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "java"
        );

        expect(javaExplorers).toBe(5);
    });
    test("4 Cantidad de explorers en node", () => {
        const nodeExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "node"
        );

        expect(nodeExplorers).toBe(10);
    });
    test("5 Usernames de explorers que estan en node", () => {
        const usersInNode = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );

        expect(usersInNode).toMatchObject([
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15",
        ]);
    });
    test("6 Probando que sea un array", () => {
        const usersInJava = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "java"
        );

        expect(usersInJava).toHaveLength(5);
    });
    test("7 Filtrando explorers por stack", () => {
        const stackElixir = ExplorerService.filterByStack(
            explorers, 
            "elixir"
        );
        expect(stackElixir[0]).toContain("Woopa3");
    });
});
