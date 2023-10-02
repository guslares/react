import { useEffect, useState } from "react"

const CAT_END_POINT_IMAGE = 'https://cataas.com'


export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {

        if (!fact) return

        const firstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWords}?size=:560&json=true`)
            .then(res => res.json())
            .then(({ url }) => {
                setImageUrl(url)
                console.log(url)
            })
    }, [fact])
    return {imageUrl: `${CAT_END_POINT_IMAGE}${imageUrl}`}

}
