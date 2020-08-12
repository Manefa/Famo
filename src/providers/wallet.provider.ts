import { ClientSession } from 'mongoose';
import Wallet from '../models/wallet';
import IWallet from '../interfaces/IWallet';

class WalletProvider {
    /**
     * Load user by id and populate all related data
     * @param query data to by matched
     * @param wallet data to by matched
     * @param userid data to by matched
     * @param session mongoose client session
     */
    async loadFullSubcription(query: Partial<IWallet>, session?: ClientSession) {
        // populate array
        const populateArray = [
            
            {
                path: 'wallet'
            },
  
            {
                path: 'userid'
                
            },

        ];

        // check session
        if (session) {
            return await Wallet.findOne(query).populate(populateArray);
        } else {
            return await Wallet.findOne(query).populate(populateArray);
        }
    }
}

export default new WalletProvider() as WalletProvider;