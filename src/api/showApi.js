import {api} from '../api/api'

export const addShow = ({eventDetails}) => {
    console.log("inside addShow API", eventDetails);

    //Log FormData entries for debugging
  for (let pair of eventDetails.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

    
    // Directly use eventDetails as it is already FormData
    return api.post("api/shows/add-event", eventDetails, {
        headers: {
            'Content-Type': 'multipart/form-data' // Set the content type for file upload
        }
    });
};


export const getMyShows = ({ userID }) => {
    console.log("in api my shows", userID)
    return api.get("api/shows/get-myShows", {
        params: {
            userID: userID
        },
    });
};

export const getAllShows = () => {
    return api.get("api/shows/get-myAllShows")
}