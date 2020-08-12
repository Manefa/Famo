import { ClientSession } from 'mongoose';
import Rating from '../models/Rating';
import IRating from '../interfaces/IRating';

class RatingProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param rating data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IRating>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'rating',
                
            }

        ];

        // check session
        if (session) {
            return await Rating.findOne(query).populate(populateArray);
        } else {
            return await Rating.findOne(query).populate(populateArray);
        }
    }
}

export default new RatingProvider() as RatingProvider;