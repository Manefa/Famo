import { ClientSession } from 'mongoose';
import Payement from '../models/payement';
import IPayement from '../interfaces/IPayement';

class   FacturationProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param payement data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IPayement>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'payement',
            }, 
            {
                path: 'orderid',
            },
            {
                path: 'transactionid',
            },
            {
                path: 'operatorid',
            }

        ];

        // check session
        if (session) {
            return await Payement.findOne(query).populate(populateArray);
        } else {
            return await Payement.findOne(query).populate(populateArray);
        }
    }
}

export default new FacturationProvider() as FacturationProvider;