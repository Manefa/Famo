import { ClientSession } from 'mongoose';
import Meal from '../models/Meal';
import IMeal from '../interfaces/IMeal';

class MealProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param meal data to by matched
     * @param userid data to by matched
     * @param menuid data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IMeal>, session?: ClientSession) {
        // populate array
        const populateArray = [
            {
                path: 'meal',

                populate:[
                    {
                        path: 'userid',
                    },
                    {
                        path: 'menuid',
                    }
                ]
                
            }

        ];

        // check session
        if (session) {
            return await Meal.findOne(query).populate(populateArray);
        } else {
            return await Meal.findOne(query).populate(populateArray);
        }
    }
}

export default new MealProvider() as MealProvider;