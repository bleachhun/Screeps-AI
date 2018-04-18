const BaseManager = require('agents.BaseManager');
const {
    AT_SOURCE_MANAGER
} = require('constants');

/**
 * The SourceManager is instanciated on request of an architect and deals with
 * the concern of guiding creeps to the source, making sure they don't prevent each other
 */
class SourceManager extends BaseManager {
    /**
     * Initialize the building manager
     * @param {Source} source - the source this manager is attached to
     * @param {Array} creepActorIds - list of ids of creep actors that should
     *                be managed by this agent
     */
    initialize(source, creepActorIds=[]) {
        super(`SourceManager ${source.id}`,
              AT_SOURCE_MANAGER, creepActorIds, {}, {
                source: sourceActor.id
              }
        );
        this.nbMiningSpots = 0;
    }

    load(state) { super(state); this.nbMiningSpots = state.nbMiningSpots; }

    save(state) { super(state); state.nbMiningSpots = this.nbMiningSpots; }

    /**
     * Get the number of mining spots on the attached source.
     * The number of mining spots is the number of non-wall terrain around the source.
     * The result is memorized so calling this function multiple times doesn't
     * lead to unecessary duplicated computations.
     * @return {Integer} - the number of mining spots
     */
    getNbMiningSpots() {
        if (this.nbMiningSpots) { return this.nbMiningSpots; }
        this.nbMiningSpots = this.source.room.lookAtArea(
            this.source.pos.y - 1, this.source.pos.x - 1,
            this.source.pos.y + 1, this.source.pos.x + 1, true
        ).filter((lookObj) => {
            return (
                lookObj.type === 'terrain' &&
                lookObj[lookObj.type] !== 'wall'
            );
        }).length;
    }
}

module.exports = SourceManager;