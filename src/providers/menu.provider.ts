import { ClientSession } from 'mongoose';
import Menu from '../models/Menu';
import IMenu from '../interfaces/IMenu';

class MenuProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param menu data to by matched
     * @param userid data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IMenu>, session?: ClientSession) {
        // populate array
        const populateArray = [

                {
                    path: 'menu',
                },
                {
                    path: 'userid',
                },
            

        ];

        // check session
        if (session) {
            return await Menu.findOne(query).populate(populateArray);
        } else {
            return await Menu.findOne(query).populate(populateArray);
        }
    }
}

export default new MenuProvider() as MenuProvider;