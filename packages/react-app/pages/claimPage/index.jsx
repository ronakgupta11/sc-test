import React from 'react'
import { Card ,Button} from 'flowbite-react'
const index = () => {
  return (
    <>
    <div 
     className='flex justify-center align-middle border-black-300'
    >
    <Card href="#" className=" flex sm:w-sm md:w-sm lg:w-md m-5 w-full lg:w-6/12 justify-center align-middle">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Claim Your Share
      </h5>
      <div style={
        {
            display:"flex",
            border:"1px solid black",
            width:"100px",
            height:"100px",
            borderRadius:"100%",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center"
        }
      }>
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        $1
      </h5>
      </div>
      <div 
      style={{alignSelf:"center"}}>
      <Button className='bg-green-500 ' >Claim!</Button>
      </div>
    </Card>
    </div>
    <div>

    </div>
    </>
  )
}

export default index