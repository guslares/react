const CAT_END_POINT_RANDON_FACT = 'https://catfact.ninja/fact'


export const getRandonFact = async () => {
    const response = await fetch(CAT_END_POINT_RANDON_FACT)
    const { fact } = await response.json()
    return fact
}