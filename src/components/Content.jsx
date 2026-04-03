import useUser from "./UseUser"

const Content = ({ id }) => {
    const { user, isError, isLoading } = useUser(id)
    
    if (isError) return <p>error in request</p>
    if (isLoading) return <p>Loading</p>


    return (
        <>
            <p>{user.id}</p>
            <p>{user.title}</p>
        </>
    )
}

export default Content