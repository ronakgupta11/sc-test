import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, TextInput,FileInput} from 'flowbite-react';
import AnonAadharProof from '../../components/AnonAadharProof'
import { phoneNumberExists } from '../../firebase';
const index = ({loggedIn}) => {

  const [phone,setPhone]=useState("")
  const [isPhone,setIsPhone]=useState("")
  useEffect(()=>{
    if(phone)
    {
      const isPhoneExist= async()=>{
        const isExist= await phoneNumberExists(phone)
        setIsPhone(isExist)
        console.log(isExist)
      }
      isPhoneExist()
    
    }
  },[phone])



  return (
   <>
   <div 
    style={{
       display:"flex",
       alignItems:"center",
       justifyContent:"center"
    }}
   >
   <form 
    style={{
        border:'1px solid black',
        width:"100%",
        padding:"2rem"
    }}
   className="flex justify-center align-middle max-w-md flex-col gap-4 ">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Phone" />
        </div>
        <TextInput 
         onChange={(e)=>setPhone(e.target.value)}
        id="base" type="text" placeholder="+91" required />

      </div>
    
      <div>
        <AnonAadharProof phoneNo={"9007298206"} isPhoneNo={isPhone}/>
      </div>
      
    </form>
   </div>
   </>
  )
}

export default index