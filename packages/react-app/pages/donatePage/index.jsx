import React, { useState } from 'react'
import { Card,TextInput,Label,Button } from 'flowbite-react'
const Index = () => {
  const [amount,setAmount] = useState(0)
  return (
    <>
      <div className='flex justify-center border-black-300'>
    <Card className="  sm:w-sm md:w-sm lg:w-md m-5 w-full lg:w-6/12 justify-center align-middle ">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Donate
      </h5>
      <div 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
      <form className="flex max-w-md flex-col gap-4 w-full ">

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Amount" />
        </div>
        <TextInput id="password1" 
         onChange={(e)=>setAmount(e.target.value)}
        type="text" required />
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