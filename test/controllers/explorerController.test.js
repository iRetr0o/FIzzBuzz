const ExplorerController = require("../../lib/controllers/explorerController");

describe("Prueba al ExplorerController", () => {
    test("1 Regresando un explorer de una misión", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");

        expect(explorersInNode[1]).toMatchObject({
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": ["javascript", "groovy", "elm"]
        });
    });
    test("2 Regresando una username de los explorers que están en una misión", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("java");

        expect(usernames).toContain("ajolonauta10");
    });
    test("3 Regresando la cantidad de explorers que están en una misión", () => {
        const explorersAmount = ExplorerController.getExplorersAmountByMission("node");

        expect(explorersAmount).toEqual(10);
    });
    test("4 Probando el metodo fizzbuzz", () => {
        const numero = 0;
        const trick = ExplorerController.getValidationService(numero);

        expect(trick).toBe("Fizzbuzz");
    });
    test("5 Probando el metodo de filtrar por stack", () => {
        const stack = ExplorerController.getExplorersByStack("groovy");

        expect(stack[0]).toMatchObject({
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": ["javascript", "groovy", "elm"]
        });
    });
});