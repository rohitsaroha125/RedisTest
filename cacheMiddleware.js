const cacheMiddleware = async (req,res,next, client, setResponse) => {
    const value = await client.get('username');

    value ? res.send(setResponse(value)) : next()
}

export default cacheMiddleware