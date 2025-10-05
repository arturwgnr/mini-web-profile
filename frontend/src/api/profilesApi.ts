import axios from "axios";

export const getProfiles = async () => {
  
  try{
    const response = await axios.get("http://localhost:3000/profiles");

    return response.data;

  } catch(error) {
    console.error(error)
  }
}