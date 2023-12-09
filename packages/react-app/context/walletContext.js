

import { createContext,useEffect,useState } from "react";
import { ethers } from 'ethers'
import { LocalWallet, SmartWallet } from "@thirdweb-dev/wallets";
const walletContext = createContext()
import { BaseGoerli } from "@thirdweb-dev/chains";



const WalletContextProvider = ({children})=>{

  const [wallet,setWallet] = useState()
  const [smartWalletAcc,setSmartWallet] = useState()
  const [address,setAddress] = useState()





const loginWeb3Auth = async ()=>{
const personalWallet = new LocalWallet();
// await personalWallet.generate();
await personalWallet.loadOrCreate({
  strategy:"encryptedJson",password:"123456"
});
await personalWallet.save({strategy:"encryptedJson",password:"123456"});

// Setup the Smart Wallet configuration
const config= {
    chain: BaseGoerli, // the chain where your smart wallet will be or is deployed
    factoryAddress: "0xdA24263fFDB0EE1a5fcDE9076A274d5E9C2cC895", // your own deployed account factory address
    clientId: "7f2127dd415d652bbc52100bae279f8e", // Use client id if using on the client side, get it from dashboard settings// Use secret key if using on the server, get it from dashboard settings
    gasless: true, // enable or disable gasless transactions
  };

const wallet = new SmartWallet(config);
await wallet.connect({
  personalWallet,
});
// const personalWalletAdd = wallet.getPersonalWallet();
console.log(wallet)
const isSaved = await personalWallet.isSaved();
console.log(isSaved)
// const walletload = await personalWallet.loadOrCreate({
//   strategy:"encryptedJson",password:"123456"
// });
// console.log(walletload)
const address = personalWallet.ethersWallet.address
setAddress(address)
setWallet(personalWallet)
setSmartWallet(wallet)
// return {address}
}



  const state={
    
    loginWeb3Auth,
wallet,
smartWalletAcc,
    address
  }
return (
    <walletContext.Provider value={state}>
      {children}
    </walletContext.Provider>
)

}


export {walletContext,WalletContextProvider}