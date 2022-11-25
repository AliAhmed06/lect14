import { useRouter } from 'next/router'
import { useState } from 'react';



function Insert() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  function insertRecord(){
    console.log(name);
    console.log(marks);  
  }




  return (
    <div className="h-full pt-10  flex items-center justify-center flex-col">
      <div className="bg-gray-300 w-4/12 flex items-center justify-center flex-col gap-2 p-5">
        <h3 className='font-bold'>Add Details</h3>
        <input 
          type="text" 
          className='w-full border-none outline-none py-1 px-5' 
          placeholder='Enter Name'
          value={name}
          onChange={ (e) => setName(e.target.value) }
        />
        <input 
          type="text" 
          className='w-full border-none outline-none py-1 px-5' 
          placeholder='Enter Marks'
          value={marks}
          onChange={ (e) => setMarks(e.target.value) }
        />
        <button 
          className='bg-blue-400 text-white rounded-full w-full py-1 hover:bg-blue-500'
          onClick={insertRecord}
        >Insert</button>
      </div>
      <button
        onClick={ () => router.push('/') }
      >Back</button>
    </div>
  )
}

export default Insert