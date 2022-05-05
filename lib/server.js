const ExplorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernamesMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: usernamesMission});
});
app.get("/v1/fizzbuzz/:number", (request, response) => {
    const score = request.params.number;
    const trick = ExplorerController.getValidationService(score);
    response.json({score: request.params.number, trick: trick});
});
app.get("/v1/explorers/stack/:stack", (request, response) => {
    const lenguaje = request.params.stack;
    const explorerStack = ExplorerController.getExplorersByStack(lenguaje);
    response.json({stack: lenguaje, explorers: explorerStack});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost ${port}`);
});