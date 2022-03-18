
import axios from "axios";
import React, { useEffect } from 'react'


  

const AAdhar = () => {
  const options = {
  method: 'POST',
  url: 'https://aadhaar-number-verification.p.rapidapi.com/Uidverifywebsvcv1/Uidverify',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': 'ca99d83f36mshc9f8cd509b5536dp19332ejsnd507cab6186c',
    'x-rapidapi-host': 'aadhaar-number-verification.p.rapidapi.com'
  },
  data: {
    captchaValue: 'TK6HXq',
    captchaTxnId: '58p5MxkQrNFp',
    method: 'uidvalidate',
    clientid: '111',
    txn_id: '4545533',
    consent: 'Y',
    uidnumber: '304888982672'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
   
    
    
  return (
    <div>AAdhar</div>
  )
}

export default AAdhar









