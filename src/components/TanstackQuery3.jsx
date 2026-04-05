import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

async function fetcher({ queryKey }) {
    const [, url] = queryKey
    const response = await fetch(url)
    
    if (!response.ok) {
        throw new Error('Erro ao buscar dados')
    }

    return response.json()
}

const TanstackQuery3 = () => {
    const [isLoadData, setIsLoadData] = useState(false)

    const {data: post, isLoading, error, refetch} = useQuery({
        queryKey: ["posts", 'https://jsonplaceholder.typicode.com/posts'],// nome do cache
        queryFn: fetcher, // função de consulta
        enabled: isLoadData,// função de consulta só é executada quando "isLoadData" for true
    })



    return (
        <main>
            <h1>request in tanstack-query 3</h1>
            <p>descrição da requisição em tanstack query</p>
            <button onClick={() => setIsLoadData(true)}>fazer requisição</button>
            <button onClick={() => refetch()}>Refeatch</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error in do request</p>}
            <ul>
                { post && 
                post.map(ind => (
                    <li key={ind.useId}>{ind.title}</li>
                ))}
            </ul>
        </main>
    )
}

export default TanstackQuery3