import React, { useState } from 'react'

export default function From({names,setnames}) {
    const onsubmit=(e)=>{
        e.preventDefault()
       { names.push(e.target.value)}
        console.log(e.target.value);
    }
    
    

  return (
    <div className='w-75 mx-auto mt-5'>
      <form onChange={()=>onsubmit} className='form d-flex gap-2'>
      <input type="text" className='form-control' placeholder='Add...'/>
      <button className='btn btn-primary'>Add</button>
    </form>
    </div>
  )
}
