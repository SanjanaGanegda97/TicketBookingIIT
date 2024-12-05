import React, {useEffect, useState, useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";
import { getLeaves } from '../../api/userApi';
import LeaveDetailsComponent from '../LeaveDetailsComponent/LeaveDetailsComponent';

const MyLeavesComponent = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [myLeaves, setmyLeaves] = useState([]);

    useEffect(() => {
        console.log("my res", user.user.name)
        const userID = user?._id || user?.user?._id;
        if(userID){
          getLeaves({name: user.user.name})
          .then((res) => {
            console.log(res.data.leaves)
            setmyLeaves(res.data.leaves)
          })
          .catch((err) => {
            console.log("erros", err)
          })
        }else{
          console.log("no user")
        }
    }, []);

  return (
    <div>
      <h3>My Leaves</h3>
      {myLeaves.length === 0 ? (
        <p>No leave applications found.</p>
      ) : (
        myLeaves.map((leave, index) => (
          <LeaveDetailsComponent key={index} leaveDetails={leave} />
        ))
      )}
    </div>
  )
}

export default MyLeavesComponent
