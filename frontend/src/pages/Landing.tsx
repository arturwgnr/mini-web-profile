import { useNavigate } from "react-router-dom";

export default function Landing() {

  const nav = useNavigate();

  return (
    <div>
      <h1>Welcome to Trend Network</h1>
      <button onClick={() => nav("/profiles")} >Acess 🔒</button>
    </div>
  )
}
