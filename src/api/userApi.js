import {api} from '../api/api'

export const getUser = ({ _id }) => {
    console.log(_id)
    return api.get("api/user/basic-details", {
        params: {
            _id: _id
        },
    });
};

export const applyLeave = ({ leaveDetails }) => {
    console.log("inside api", leaveDetails)
    
    return api.post("api/user/apply-leave", {
            //userID: leaveDetails.userID,
            name: leaveDetails.name,
            leaveType: leaveDetails.leaveType, 
            dayType: leaveDetails.dayType,
            startDate: leaveDetails.startDate,
            endDate: leaveDetails.endDate,
            reason: leaveDetails.reason,
            appliedOn: leaveDetails.now
    });
};

export const getLeaves = ({ name }) => {
    console.log("in api", name)
    return api.get("api/user/get-leaves", {
        params: {
            name: name
        },
    });
};

export const getAllUsers = () => {
    return api.get("api/user/get-allusers")
};

export const updateUserType = ({userId, userType}) => {
    //console.log(userId)
    //console.log(userType)
    return api.put('api/user/updateusertype', {
        params: {
            _id: userId,
            userType: userType
        },
    })
}
