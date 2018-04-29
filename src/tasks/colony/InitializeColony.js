const BaseTask = require('tasks.BaseTask');
const {
    T_INITIALIZE_COLONY,
    AT_COLONY,
    CP_WORKER
} = require('constants');
const InitializeRoom = require('objectives.architect.InitializeRoom');
const ExpandPopulation = require('objectives.actor.ExpandPopulation');
const {
    CREEP_PER_MINING_SPOT,
    INITIAL_ROOM_DEFENSE
} = require('settings');
const logger = require('log').getLogger('tasks.colony.InitializeColony', '#B0CA34');

/**
 * This task will compute the number of creeps needed to initialize the
 * colony, and schedule the `ExpandPopulation` task on the spawn actor accordingly.
 * On top of that, it will schedule the 'InitializeRoom' task on the
 * architect dedicated to the spawn room.
 */
class InitializeColony extends BaseTask {
    constructor(memory={}) {
        super(T_INITIALIZE_COLONY, AT_COLONY, memory);
    }

    execute(colony) {
        const architect = colony.agent('spawnRoomArchitect');
        const nbSpots = architect.countMiningSpots();

        const nbCreeps = nbSpots * CREEP_PER_MINING_SPOT;
        let profiles = [];

        for (var i = 0; i < nbCreeps; i++) {
            profiles.push(CP_WORKER);
        }

        profiles = profiles.concat(INITIAL_ROOM_DEFENSE);

        logger.debug('Constructing ExpandPopulation objective with profiles: ' +
                     profiles.join(', '));
        colony.agent('spawnActor').setObjective(
            new ExpandPopulation({params: {profiles, handlerId: architect.id}}));
        architect.setObjective(new InitializeRoom());
    }
}

module.exports = InitializeColony;
