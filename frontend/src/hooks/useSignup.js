import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useSignup = () =>{
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null);

    const signup = async (email, password)=>{
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({email, password})
        })
        const json = await response.json();
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // storing the user in localstorage
            localStorage.setItem('user', JSON.stringify(json))

            // updating the auth context, setting the user
            dispatch({type : 'LOGIN', payload :json})

            // disabling the setIsLoading
            setIsLoading(false)
        }
    
    }
    return {signup, error, isLoading}
}