import useUser from "./UseUser"

const Avatar = ({ id }) => {
    const { user, isError, isLoading} = useUser(id)

    if (isError) return <div>erro ao fazer requisição</div> 
    if (isLoading) return <div>Loading</div>

    return (
        <>
            <p>{user.id}</p>
            <p>{user.title}</p>
        </>
    )
}

export default Avatar