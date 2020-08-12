import { ClientSession } from 'mongoose';
import Order from '../models/order';
import IOrder from '../interfaces/IOrder';

class OrderProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param menu data to by matched
     * @param user data to by matched
     * @param meals data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IOrder>, session?: ClientSession) {
        // populate array
        const populateArray = [
            
            {
                path: 'menu'
            },

            {
                path: 'userid',
            },
            {
                path: 'meals',
            }
                
        ];

        // check session
        if (session) {
            return await Order.findOne(query).populate(populateArray);
        } else {
            return await Order.findOne(query).populate(populateArray);
        }
    }
}

export default new OrderProvider() as OrderProvider;