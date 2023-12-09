import {
    LogInWithAnonAadhaar,
    useAnonAadhaar,
    AnonAadhaarProof,
    
  } from "anon-aadhaar-react";
  import { useEffect,useState } from "react";
  import {phoneNumberExists,anonProofExists,addAadharNumber} from "../firebase"
  import { Button, Toast } from 'flowbite-react';
  
  import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
  export default function Home({phoneNo,isPhoneNo}) {
    const [anonAadhaar] = useAnonAadhaar();
    const [isExist,setIsExist]=useState()

      // Initialize Firebase
    useEffect(() => {
      console.log("Anon Aadhaar status: ", anonAadhaar.status);
      const checkQuery = async ()=>{
        if(anonAadhaar.status=='logged-in')
      {
       const isExists= await anonProofExists(anonAadhaar.pcd.claim.modulus)
       console.log("exist",isExists)
      setIsExist(isExist)
      }
      
      }
      checkQuery()
      console.log(isPhoneNo,isExist,anonAadhaar.status)
    }, [anonAadhaar]);
   
    const handleClick= async ()=>{
      if(anonAadhaar.status=='logged-in'&&phoneNo && !isExist && !isPhoneNo)
      {
        addAadharNumber(phoneNo,anonAadhaar.pcd.claim.modulus)
      }
    }
  
    return (
      <>
      <div>
        {<LogInWithAnonAadhaar />}
        
      </div>
      <div >
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            {/* <p>✅ Proof is valid</p> */}
            
            <div className="mt-3">
            <AnonAadhaarProof  code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
            </div>
          </>
          )}
          {
            isExist &&
            <>
            <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
        <Toast.Toggle />
      </Toast>
            </>

          }
          {
            !isExist &&
            <Button 
             onClick={handleClick}
            className="bg-green-500 mt-3">Submit</Button>
          }
      </div>
      </>
    );
  }