import React, { useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export const Certification = () => {
    useEffect(() =>{
        const querydb=getFirestore();
        const queryColection = collection(querydb,'experiencia,');
        getDocs(queryColection)
        .then(res=> console.log(res));
    },[])
  return (
    <div>Certification</div>
  )
}

export default Certification