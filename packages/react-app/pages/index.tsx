import { useSocialConnect } from "@/SocialConnect/useSocialConnect";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";
import AnonAadharProof from '../components/AnonAadharProof'
export default function Home() {
  const { account } = useSocialConnect();
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <>
    <main className="w-full flex justify-center text-gray-800 text-lg font-bold">
      {/* {!account
        ? "Connect your wallet to use SocialConnect"
        : "Click on SocialConnect to get started"} */}
      
    </main>
    </>
  );
}
