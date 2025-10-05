import { useState, useEffect } from "react";
import { getProfiles } from "../api/profilesApi";

export default function Profiles() {

  type Profile = {
  id: number;
  name: string;
  username: string;
  bio?: string;
  profession?: string;
  online: boolean;
};

const [users, setUsers] = useState<Profile[]>([]);

  useEffect(() => {
    async function fetchingProfile() {
      try{
        const data = await getProfiles();

      setUsers(data);

      } catch(error) {
        console.error(error)
      }
    }
    fetchingProfile();
  }, [])

  console.log(users)

  return (
    <div>
      <h1>
        Profile List:
      </h1>
      <div>
  {users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.profession}</p>
      <small>{user.username}</small>
      <hr />
    </div>
  ))}
</div>
    </div>
  )
}
