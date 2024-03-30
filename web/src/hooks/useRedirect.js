import { useNavigate , useLocation } from "react-router";
import SD from "../SD";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// sync redirection with redux game state 
export default function useRedirect(){
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const gameState = useSelector(state => state.game.gameState)
    useEffect(()=>{
        if(pathname != "/home/gate" && gameState == SD.gameStates.home){
            navigate('/home/gate')
        }
        else if(pathname != "/home/search" && gameState == SD.gameStates.search){
            navigate('/home/search')
        }
        else if(pathname != "game" && gameState == SD.gameStates.match){
            navigate('/game')
        }
        else if(pathname != "end" && gameState == SD.gameStates.end){
            navigate('/end')
        }
    },[gameState,pathname,navigate])

}