import { useQuery } from "@tanstack/react-query"

async function fetcher({ queryKey }) {
    const [, url] = queryKey
    const response = await fetch(url)
    
    if (!response.ok) {
        throw new Error('Erro ao buscar dados')
    }

    return response.json()
}

const TanstackQuery2 = () => {
    const {data: post, isLoading, error} = useQuery({
        queryKey: ["posts", 'https://jsonplaceholder.typicode.com/posts'],// nome do cache
        queryFn: fetcher // função de consulta
    })



    return (
        <main>
            <h1>request in tanstack-query</h1>
            <p>descrição da requisição em tanstack query</p>
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

export default TanstackQuery2