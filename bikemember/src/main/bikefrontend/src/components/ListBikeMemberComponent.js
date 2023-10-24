import React, { useEffect, useState } from 'react'
import BikeMemberService from '../servers/BikeMemberService'
import { Link } from 'react-router-dom';

const ListBikeMemberComponent = () => {
    const [bikemembers,setBikemembers]=useState([]);
    // 호출하게 되면 자바단에서 반응한다.
    useEffect(()=>{
        // then gelAllBikeMembers 메소드를 처리하고 난 다음에
        BikeMemberService.getAllBikeMembers().then((response)=>{
            setBikemembers(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className='container py-5'>
            <h2 className='text-center'>
                List Bike Members
            </h2>
            {/* add-bikemember 경로로 들어가기 */}
            <Link to='/add-bikemember' className='btn btn-success mb-2 fw-bold'>
                멤버 등록하기!
            </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email ID
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bikemembers.map(
                            bikemember=>
                            <tr key={bikemember.id}>
                                <td>{bikemember.id}</td>
                                <td>{bikemember.firstName}</td>
                                <td>{bikemember.lastName}</td>
                                <td>{bikemember.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListBikeMemberComponent;