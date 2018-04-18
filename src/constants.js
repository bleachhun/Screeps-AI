import murmurhash3_32_gc = require('utils.murmurhash3_32_gc');

const CONSTANTS = [
    /* Creeps profiles */
    'CP_WORKER',
    'CP_HAULER',
    'CP_ATTACKER',
    'CP_RANGED_ATTACKER',
    'CP_HEALER',
    'CP_CLAIM',
    /* * Creep profiles speed levels */
    'CPS_SLOW',  // doesn't scale with the number of parts (same as FAST for 2 part creep, CONST for 3 part, slower above)
    'CPS_CONST', // 1:2 move/non-move body parts (1 move / 2 turns on plain)
    'CPS_FAST',  // 1:1 move/non move body parts (1 move / turn on plain)
    'CPS_SWIFT', // 5:1 move/non-move body parts (1 move / turn on swamp)

    /* Agents types */
    'AT_HIVE_MIND',  // attached to a  list of colonies
    'AT_COLONY',  // attached to list of rooms and architects
    'AT_ARCHITECT',  // attached to a room and a list of managers
    'AT_MANAGER', // not actually used, pick a type below
    'AT_CONTROLLER_MANAGER',  // attached to controller actor and creep actors
    'AT_RAID_MANAGER',  // attached to creep actors
    'AT_SPAWN_MANAGER',  // attached to a spawn actor and creep actors
    'AT_SOURCE_MANAGER',  // attached to a source and creep actors
    'AT_BUILDING_MANAGER',  // attached to a list of building structs and creep actors
    'AT_ACTOR',  // not actually used, specify one of the types below
    'AT_CREEP_ACTOR',  // attached to a creep
    'AT_CONTROLLER_ACTOR',  // attached to a controller
    'AT_SPAWN_ACTOR',  // attached to a spawn
    'AT_TOWER_ACTOR',  // attached to a tower

    /* Objectives */
    /* * Hive mind */
    'O_INCREASE_GCL',
    'O_MAXIMIZE_DEFENSIVE_POWER',
    'O_MAXIMIZE_OFFENSIVE_POWER',
    /* * Colony */
    'O_INCREASE_RCLS'
    'O_INCREASE_EFFICIENCY',
    'O_EXTEND_MINING_OPERATIONS',
    'O_FORK_COLONY',
    /* * Architect */
    'O_INITIALIZE_ROOM',
    'O_EXPAND_ENERGY_STORAGE',
    'O_INCREASE_PROTECTION',
    'O_UPGRADE_RCL',
    /* * Manager */
    'O_BUILD_DEFENSIVE_OUTPOST',
    'O_BUILD_ENERGY_STORAGE',
    'O_BUILD_ROAD_CONNECTION',
    'O_UPGRADE_RCL',
    'O_DISTRIBUTE_ENERGY',
    'O_RENEW_POPULATION',
    'O_EXPAND_POPULATION',
    'O_STAY_FILLED_UP',

    /* Tasks */
    /* * Hive mind */
    'T_GET_FACTION_STARTED',
    'T_RENEW_POPULATION',
    'T_EXPAND_POPULATION',
    'T_EVALUATE_NEARBY_ROOMS',
    /* * Colony */
    'T_INITIALIZE_COLONY',
    /* * Architect */
    'T_POPULATE_INITIAL_GROUPS',
    'T_PLACE_CONSTRUCTION_SITE',
    /* * Manager */
    'T_BUILD_GROUP',
    'T_DISPATCH_ORDERS',
    'T_BE_HARVESTED',
    'T_FILLUP',
    /* * Actors */
    'T_STORE_ENERGY',
    'T_UPGRADE_RCL',
    'T_REPAIR_STRUCTURE',
    'T_BUILD_WALL',
    'T_BUILD_TOWER',
    'T_BUILD_ENERGY_STORAGE',
    'T_KILL_TARGET',
    'T_DEFEND_POSITION',
    'T_SPAWN',

    /* Actions */
    'A_HARVEST',
    'A_UPGRADE',
    'A_BUILD_STRUCTURE_FUNDATION',
    'A_BUILD_STRUCTURE',
    'A_HAUL',
    'A_MOVE',
    'A_ATTACK',
    'A_HEAL',
    'A_SPAWN'
]

const SEED = 'constants';

const LOOKUP = {};

/*
 * In debug mode, constants are stored as strings.
 * Disable to use integer hash and speed up comparisons
 */
const DEBUG = true;

for (var i = 0; i < constants.length; i++) {
    let rep = constants[i];
    let val = DEBUG ? rep : murmurhash3_32_gc(rep, SEED);
    module.exports[rep] = val;
    LOOKUP[val] = rep;
}

module.exports.pretty = (constant) => {
    return LOOKUP[constant];
}