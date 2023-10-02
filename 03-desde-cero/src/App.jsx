import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"




export function App() {

    const  {fact, refresFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
        refresFact()
    }
    
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>

            {/* <section> */}
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen obtenida por ${fact}`}></img>}
            {/* </section> */}
        </main>
    )
}