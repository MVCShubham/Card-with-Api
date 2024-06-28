import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard';

const Products = () => {

    const [user, setUser] = useState([])

    const getUsers = async () => {
        await fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setUser(data));
    }

    useEffect(() => {
        getUsers();
    }, [])


    return (
        <>
            <div className='bg-slate-900'>
                <div className='flex flex-wrap gap-3'>

                    {
                        user.map(user => (
                            <div className='col-span-3'>
                                <UserCard key={user.id} user={user} />
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Products
