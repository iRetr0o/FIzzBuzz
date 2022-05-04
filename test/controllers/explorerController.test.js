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
});