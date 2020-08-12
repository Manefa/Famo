import { ClientSession } from 'mongoose';
import Transaction from '../models/transaction';
import ITransaction from '../interfaces/ITransaction';

class TransactionProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param transaction data to by matched
     * @param wallet data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<ITransaction>, session?: ClientSession) {
        // populate array
        const populateArray = [
            
            {
                path: 'transaction',
            },

            {
                path: 'wallet',
            }
        
        ];

        // check session
        if (session) {
            return await Transaction.findOne(query).populate(populateArray);
        } else {
            return await Transaction.findOne(query).populate(populateArray);
        }
    }
}

export default new TransactionProvider() as TransactionProvider;