import { useSocialConnect } from "@/SocialConnect/useSocialConnect";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useContext, useEffect } from "react";
import AnonAadharProof from '../components/AnonAadharProof'
import {walletContext} from "../context/walletContext"
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  const { account } = useSocialConnect();
  const [anonAadhaar] = useAnonAadhaar();
  const {loginWeb3Auth:handle} = useContext(walletContext)

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <>
    <main className="w-full flex justify-center text-gray-800 text-lg font-bold">
      {/* {!account
        ? "Connect your wallet to use SocialConnect"
        : "Click on SocialConnect to get started"} */}
      <h1 onClick={handle}>home</h1>
      {/* <ConnectWallet/> */}
      
    </main>
    </>
  );
}
