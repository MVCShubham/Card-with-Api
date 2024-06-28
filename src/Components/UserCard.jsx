import React from 'react'
import pic from '../assets/react.svg'

const UserCard = ({ user }) => {
    const { name, email, username, address } = user
    return (
        <>

            <div className='w-[250px] m-5 bg-slate-200/70 rounded-lg p-3 '>
                <div className="flex flex-col items-center">.
                    <img src={pic} alt="" className='justify-center items-center w-[150px] mb-5' />
                    <h2 className='text-xl font-semibold'>UserName:  {username}</h2>
                    <h2 className='text-xl font-semibold capitalize text-center'> <span className='text-sky-600 font-bold'>{`${name.firstname} ${name.lastname}`}</span> </h2>
                    <p className='font-semibold '>Email: <span className='text-sky-600'>{email}</span> </p>
                    <p className='font-semibold'>City: {`${address.city}`}</p>
                </div>
            </div>
        </>


    )
}

export default UserCard
