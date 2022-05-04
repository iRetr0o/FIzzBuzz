class ExplorerService {
    static filterByMission(explorers, mission) {
        let nodeMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return nodeMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        let cantidad = explorers.filter((explorer) => explorer.mission == mission);
        return cantidad.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        let usuarios = explorers.filter((explorer) => explorer.mission == mission);
        let userList = usuarios.map((explorer) => explorer.githubUsername);
        return userList;
    }
}

module.exports = ExplorerService;
