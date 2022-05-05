const Reader = require("../utils/reader");
const ExplorerService = require("../services/Explorerservice");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersMission = ExplorerService.filterByMission(explorers, mission);
        return explorersMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const userListMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return userListMission;
    }
    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmount;
    }
    static getValidationService(number) {
        const score = FizzbuzzService.applyValidationInNumber(number);
        return score;
    }
    static getExplorersByStack(stack) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersStack = ExplorerService.filterByStack(explorers, stack);
        return explorersStack;
    } 
}
module.exports = ExplorerController;