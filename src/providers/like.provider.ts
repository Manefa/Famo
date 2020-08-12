import { ClientSession } from 'mongoose';
import Like from '../models/Like';
import ILike from '../interfaces/ILike';

class   LikeProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param like data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<ILike>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'like', 
            },
        ];

        // check session
        if (session) {
            return await Like.findOne(query).populate(populateArray);
        } else {
            return await Like.findOne(query).populate(populateArray);
        }
    }
}

export default new LikeProvider() as LikeProvider;