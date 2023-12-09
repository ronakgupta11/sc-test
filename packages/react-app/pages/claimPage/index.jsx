import React from 'react'
import { Card ,Button} from 'flowbite-react'
const index = ({claimAmount,users,totalAmount}) => {

  return (
    <>
    <div 
     className='flex justify-center align-middle border-black-300 bg-blue-300 m-4'
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
        ${claimAmount>0||0.2} 
      </h5>
      
      </div>
      <div 
      style={{alignSelf:"center"}}>
      <Button className='bg-green-500 ' >Claim!</Button>
      </div>
      <div>
        <Card>
            <h5 className='text-l text-center font-bold tracking-tight text-gray-900 dark:text-white'>
                So Far Today :  {totalAmount||"$1000"} was divided among {users||"50000"} Users
            </h5>
        </Card>
      </div>
    </Card>
    </div>
    <div>

    </div>
    </>
  )
}

export default index