import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json())


const Request = () => {
    const { data:dataFirst, error:errorFirst, isLoading:loadingFirst} = useSWR('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=2', fetcher)
    const { data:dataSecond, error:errorSecond, isLoading:loadingSecond } = useSWR('https://jsonplaceholder.typicode.com/comments?_limit=2', fetcher)
    const { data:dataTerc, error:errorterc, isLoading:loadingterc } = useSWR('https://jsonplaceholder.typicode.com/users?_limit=2', fetcher)



    return (
        <div>
            <ul>
                {dataFirst?.map(indPercorrido => (
                    <li key={indPercorrido.id}>
                        {indPercorrido?.title}
                    </li>
                ))}
            </ul>
            <ul>
                {dataSecond?.map(indPercorrido => (
                    <li key={indPercorrido.id}>
                        {indPercorrido?.email}
                    </li>
                ))}
            </ul>
            <ul>
                {dataTerc?.map(indPercorrido => (
                    <li key={indPercorrido.id}>
                        {indPercorrido?.address?.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Request