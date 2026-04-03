import { useState } from "react"
import useSWR, { mutate } from "swr"

const fetcher = url => fetch(url).then(res => res.json())

const AppTree = () => {
    const [key, setKey] = useState(null)
    const { data, error, isLoading } = useSWR(key, fetcher)

    const handleClick = () => {
        if (key) {
           return setKey(null)
        }
        
        return setKey('https://jsonplaceholder.typicode.com/users')
    }

    return (
        <div>
            <h1>App Tree</h1>
            <button onClick={handleClick}>fazer request</button>
            <ul>
                {data && data?.map(indiceATP => (
                    <li>{indiceATP.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default AppTree