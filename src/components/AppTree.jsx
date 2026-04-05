import { useState } from "react"
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

const AppTree = () => {
    const [key, setKey] = useState(false)
    const { data, error, isLoading, mutate } = useSWR(key ? 'https://jsonplaceholder.typicode.com/users' : null, fetcher)


    return (
        <div>
            <h1>App Tree</h1>
            <button onClick={() => setKey(true)}>fazer request</button>
            <button onClick={() => mutate(undefined, { revalidate: true })}>refetch</button> {/* garante que ele vá buscar de novo na API */}
            {/* <button onClick={() => mutate()}>refetch</button> */}
            <ul>
                {data && data?.map(indiceATP => (
                    <li>{indiceATP.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default AppTree


// Use mutate() 99% das vezes
// Use mutate(url) 👉 Refetch global de uma key específica
// funciona fora do componente também
// útil quando quer atualizar dados em vários lugares