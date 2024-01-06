import React, { useState } from 'react'
import { uid } from 'uid'
import Form from './Form'
export default function Table() {
    const [names, setnames]=useState([{name:"Ali"}])
    const id=uid()


    


  return (
    <>
        <Form names={names} setnames={setnames}/>
        <table className=' table striped bordered hover w-75 mx-auto'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody className=''>
                    {
                        names.map((name)=>{
                            return(
                                <tr key={id}>
                                <td>{name.name}</td>
                                <td><button className='btn btn-success'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                                </td>
                                </tr>
                                
                            )
                        })
                    }


            </tbody>
        </table>
    </>
  )
}
