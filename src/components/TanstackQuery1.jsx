import { useEffect, useState } from "react"

const TanstackQuery1 = () => {
    const [post, setPost] = useState()
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetching () {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')

                if (!response.ok) {
                    throw new Error("a resposta de rede não foi adequada")
                }
                const data = await response.json()
                setPost(data)
            } catch (erro) {
                setIsError(erro)
            } finally {
                setIsLoading(false)
            }
            
        }  

        fetching()
    }, [])

    return (
        <main>
            <h1>request in tanstack-query</h1>
            <p>descrição da requisição em tanstack query</p>
            { isError && <p>{isError}</p> }
            { isLoading && <p>Loading...</p> }

            <ul>
                {post?.map(ind =>( 
                    <li key={ind.userId}>{ind?.title}</li>
                ))}
            </ul>
        </main>
    )
}

export default TanstackQuery1