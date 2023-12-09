import React, { useContext, useState } from 'react'
import { Card ,Button,Checkbox,Label,TextInput} from 'flowbite-react';
import {walletContext} from  "../../context/walletContext"

const Index = () => {
   const [phone,setPhone]=useState()
   const [amount,setAmount]=useState()
   const {address} = useContext(walletContext)
   const handleSubmit=async ()=>{

   }
  return (
    <>
    <div className='flex justify-center border-black-300'>
    <Card className="  sm:w-sm md:w-sm lg:w-md m-5 w-full lg:w-6/12 justify-center align-middle ">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Send Payment
        add:{address}
      </h5>
      <div 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
      <form className="flex max-w-md flex-col gap-4 w-full ">
      <div >
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Phone No." />
        </div>
        <TextInput id="email1" 
         onChange={(e)=>setPhone(e.target.value)}
        type="email" placeholder="+91" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Amount" />
        </div>
        <TextInput id="password1" 
         onChange={(e)=>setAmount(e.target.value)}
        type="text" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button className="bg-green-500" type="submit">Submit</Button>
    </form>
      </div>
    </Card>
        

    </div>
    </>
  )
}

export default Index