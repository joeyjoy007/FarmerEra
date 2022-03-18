import {createContext, useContext, useEffect, useState} from 'react'


const FarmerContext = createContext()


const ContextApis = ({children})=>{
 
    const [user, setUser] = useState("")
    const [userType, setUserType] = useState("seller")
    const [addProduct, setAddProduct] = useState(false)
 

    // useEffect(() => {
    //   const userInfo =JSON.parse(localStorage.getItem('userInfo'))
    //   setUser(userInfo);
    

     
    // }, [])
   

    return <FarmerContext.Provider value={{userType,setUserType,addProduct,setAddProduct}}>{children}</FarmerContext.Provider>
}

export const FarmerState = ()=>{
    return useContext(FarmerContext)
}


export default ContextApis