import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

const useUser = (id) => {
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher)


    return {
        user: data,
        isLoading,
        isError: error
    }
}

export default useUser