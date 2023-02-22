import React from 'react'

function Eachuser(props) {
    console.log(props.name)
    return (
        // GRID WALA BELOW
        <div className='grid grid-cols-5 py-4  border-t-[1px] border-gray-200 font-medium   '>
            <div className='Name flex flex-wrap  text-center font-semibold '>
                <p className='w-[200px] text-left break-words'>
                    {props.name}
                </p>
            </div>
            <div className='Title flex-wrap  text-gray-500 ml-8 '>
                <p className='w-[220px] break-words '>
                    {props.title}
                </p>
            </div>
            <div className='Email flex-wrap text-gray-500  ml-16'>
                <p className='w-[220px] break-words'>
                    {props.email}
                </p>
            </div>
            <div className='Role  text-gray-500 ml-32'>
                <p>
                    {props.role}
                </p>
            </div>
            <div className={`Edit ${props.edit?"text-indigo-600":"text-gray-500"} font-semibold justify-self-end`}>
                Edit
            </div>
                
            
        </div>

        // TABLE WALA BELOW
        // <div>
        //     <tr>
        //         <td>{props.name}</td>
        //         <td>{props.title}</td>
        //         <td>{props.email}</td>
        //         <td>{props.role}</td>
        //         <td>Edit</td>
        //     </tr>
        // </div>




    )
}

export default Eachuser