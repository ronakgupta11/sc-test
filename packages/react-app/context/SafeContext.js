

import { createContext,useEffect,useState } from "react";
import { ethers } from 'ethers'
// import AccountAbstraction from '@safe-global/account-abstraction-kit-poc'
import {  SafeAuthPack } from '@safe-global/auth-kit'
import Safe, { EthersAdapter } from '@safe-global/protocol-kit'

const SafeContext = createContext()

const SafeContextProvider = ()=>{
      // owner address from the email  (provided by web3Auth)
  const [ownerAddress, setOwnerAddress] = useState<string>('')

  // safes owned by the user
  const [safes, setSafes] = useState([])

  // selected token to be used for fee payments (native token by default)
  const [tokenAddress, setTokenAddress] = useState(ethers.ZeroAddress)

  // chain selected
  const [chainId, setChainId] = useState()
  // web3 provider to perform signatures
  const [web3Provider, setWeb3Provider] = useState()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const chain = getChain(chainId)

  // reset React state when you switch the chain
  useEffect(() => {
    setOwnerAddress('')
    setSafes([])
    setChainId(chain.id)
    setWeb3Provider(undefined)
    setSafeSelected('')
  }, [chain])


   // authClient
   const [safeAuthPack, setSafeAuthPack] = useState()


   useEffect(() => {
    ;(async () => {
      if (safeAuthPack) {
        safeAuthPack.destroy()
      }

      const options = {
        enableLogging: true,
        showWidgetButton: false,
        chainConfig: {
          chainId: chain.id,
          rpcTarget: chain.rpcUrl
        }
      }

      const authPack = new SafeAuthPack({
        txServiceUrl: chain.transactionServiceUrl
      })

      await authPack.init(options)

      setSafeAuthPack(authPack)

      // If the provider has an account the we can try to sign in the user
      authPack.subscribe('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
          const { safes, eoa } = await authPack.signIn()
          const provider = authPack.getProvider()

          // we set react state with the provided values: owner (eoa address), chain, safes owned & web3 provider
          setChainId(chain.id)
          setOwnerAddress(eoa)
          setSafes(safes || [])
          if (provider) {
            setWeb3Provider(new ethers.BrowserProvider(provider))
          }
          setIsAuthenticated(true)
        }
      })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain])

  // auth-kit implementation
  const loginWeb3Auth = async () => {
    if (!safeAuthPack) return

    try {
      const { safes, eoa } = await safeAuthPack.signIn()
      const provider = safeAuthPack.getProvider()

      // we set react state with the provided values: owner (eoa address), chain, safes owned & web3 provider
      setChainId(chain.id)
      setOwnerAddress(eoa)
      setSafes(safes || [])
      setWeb3Provider(new ethers.BrowserProvider(provider))
      setIsAuthenticated(true)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  const logoutWeb3Auth = () => {
    safeAuthPack?.signOut()
    setOwnerAddress('')
    setSafes([])
    setChainId(chain.id)
    setWeb3Provider(undefined)
    setSafeSelected('')
    setGelatoTaskId(undefined)
    setIsAuthenticated(false)
    closeMoneriumFlow()
  }


  const state={
    ownerAddress,
    chainId,
    chain,
    safes,
    tokenAddress,
    isAuthenticated,
    web3Provider,
    loginWeb3Auth,
    logoutWeb3Auth,
    setChainId
  }
return (
    <SafeContext.Provider value={state}>
      {children}
    </SafeContext.Provider>
)

}


export {SafeContext,SafeContextProvider}