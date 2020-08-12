import { ClientSession } from 'mongoose';
import Facturation from '../models/facturation';
import IFacturation from '../interfaces/ILike';

class   FacturationProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param facturation data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IFacturation>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'facturation',
                
            }

        ];

        // check session
        if (session) {
            return await Facturation.findOne(query).populate(populateArray);
        } else {
            return await Facturation.findOne(query).populate(populateArray);
        }
    }
}

export default new FacturationProvider() as FacturationProvider;