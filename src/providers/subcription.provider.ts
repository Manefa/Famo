import { ClientSession } from 'mongoose';
import Subcription from '../models/Subcription';
import ISubcription from '../interfaces/ISubcription';

class SubcriptionProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param following user id
     * @param follower user id
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<ISubcription>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'following',
            },
            {
                path: 'follower',
            },
            {
                path: 'follower',
            },

        ];

        // check session
        if (session) {
            return await Subcription.findOne(query).populate(populateArray);
        } else {
            return await Subcription.findOne(query).populate(populateArray);
        }
    }
}

export default new SubcriptionProvider() as SubcriptionProvider;