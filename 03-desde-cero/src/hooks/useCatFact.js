import { useState, useEffect } from "react"
import { getRandonFact } from "../services/facts"

export function useCatFact(){
    const [fact, setFact] = useState('Lorem ipsu cat fact')

    const refreshFact = ()=>{
        getRandonFact().then(setFact)
    }
   useEffect(refreshFact, [])
    return {fact , refreshFact}
}