import React, { useEffect, useState } from "react";
import { Input, useToast } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const PanVerification = () => {

    const [number, setNumber] = useState("")
    const [alert, setAlert] = useState(false)
        
    const toast = useToast()

    const verifyPan = ()=>{
        if(number === ""){
            toast({
          title: 'Enter Pan Number',
         position:"top",
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })
        }

        var PAN_Card_No = number.toUpperCase();
        console.log(PAN_Card_No);
         var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (PAN_Card_No.length == 10) {
        if (PAN_Card_No.match(regex)) {
            console.log("Valid Pan Number"); 
        } else {
            console.log("InValid Pan Number"); 
        }
    } else {
    
        console.log("Enter Valid Pan Number");
    }
};

    
    

  return (
      <div>
    
     
    <div className="login">
    
      <h1 className="loginTitle">Pan Verification</h1>
      <div className="wrapper">
    
      
        <div className="right">
        <Input htmlSize={20} width='auto' placeholder="pancard" onChange={e=>setNumber(e.target.value)} />
        <Button
        marginTop={2}
        // isLoading
        // loadingText='verifying...'
        colorScheme='teal'
        variant='outline'
        onClick={verifyPan}
      >
        verify 
      </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PanVerification;
