const {
    O_EXPAND_POPULATION,
    O_DISTRIBUTE_ENERGY,
    O_STAY_FILLED_UP,
    O_KEEP_UPGRADING_CONTROLLER,
    O_INITIALIZE_ROOM,
    O_CLEAR_ROOM_THREATS,
    O_GARRISONS,
    O_BUILD_MINING_CONTAINERS,
    O_MAINTAIN_BUILDINGS,
    O_UPGRADE_RCL_2,
    O_POPULATION_CONTROL
} = require('constants');

module.exports = {
    [O_KEEP_UPGRADING_CONTROLLER]: require('objectives.manager.KeepUpgradingController'),
    [O_INITIALIZE_ROOM]: require('objectives.architect.InitializeRoom'),
    [O_UPGRADE_RCL_2]: require('objectives.architect.UpgradeRCL2'),
    [O_STAY_FILLED_UP]: require('objectives.manager.StayFilledUp'),
    [O_DISTRIBUTE_ENERGY]: require('objectives.manager.DistributeEnergy'),
    [O_CLEAR_ROOM_THREATS]: require('objectives.manager.ClearRoomThreat'),
    [O_GARRISONS]: require('objectives.manager.Garrisons'),
    [O_BUILD_MINING_CONTAINERS]: require('objectives.manager.BuildMiningContainers'),
    [O_MAINTAIN_BUILDINGS]: require('objectives.manager.MaintainBuildings'),
    [O_EXPAND_POPULATION]: require('objectives.actor.ExpandPopulation'),
    [O_POPULATION_CONTROL]: require('objectives.colony.PopulationControl')
};
