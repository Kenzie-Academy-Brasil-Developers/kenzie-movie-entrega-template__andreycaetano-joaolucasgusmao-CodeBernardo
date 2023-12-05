import { useEffect } from "react";
import { GetUser } from "../../../contexts/user/user";
import { useNavigate } from "react-router-dom";

export const UserButtons = () => {
  const navigate = useNavigate()
  const {loading, user, loadUser} = GetUser(store => store)
  const userLogout = () => {
    localStorage.removeItem("@KenzieMovie:token")
    navigate("/")
  }
  
  useEffect(() => {
    loadUser()
  }, [])

  return (
    <>
      {
        loading ? 
        null : 
        <div className="flex flex-row items-center w-2/12 justify-between">
        <div className="flex flex-row items-center">
          <span className="bg-yellow rounded-full w-7 h-7 flex items-center justify-center mr-3 text-white font-Poppins font-bold">{user.name[0].toUpperCase()}</span>
          <span className="font-Poppins font-normal text-white">{user.name}</span>
        </div>
        <button onClick={() => userLogout()} className="font-Poppins font-bold text-white">Sair</button>
      </div>
      }
    </>
  );
};
