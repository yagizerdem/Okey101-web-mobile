import { useEffect } from "react";

export default function useKey(userkey , callback){
    useEffect(()=>{
        function execute({key}){
            if(key.toUpperCase() === userkey.toUpperCase()) callback()
        }
        document.addEventListener('keydown', execute )
        return ()=> document.removeEventListener('keydown',execute)
    },[userkey,callback])
}