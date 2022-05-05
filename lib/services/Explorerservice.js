class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorerMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorerMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const cantidad = explorers.filter((explorer) => explorer.mission == mission);
        return cantidad.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const usuarios = explorers.filter((explorer) => explorer.mission == mission);
        const userList = usuarios.map((explorer) => explorer.githubUsername);
        return userList;
    }
    static filterByStack(explorers, stack) {
        const explorersStack = explorers.filter(
            (explorer) => explorer.stacks.find((lenguaje) => {
                lenguaje == stack;
            })
        );
        return explorersStack;
    }
}
module.exports = ExplorerService;