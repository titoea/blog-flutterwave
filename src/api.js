const BASE_URL = "https://techcrunch.com/wp-json/wp/v2/"

async function fetchData(apiPath) {
    let resp = await fetch(`${BASE_URL}${apiPath}`)

    if (!resp.ok) {
        throw new Error(
            `Call to ${BASE_URL}${apiPath} failed: ${resp.statusText}`
        )
    }
    const data  = await resp.json()
    return data
}

export default fetchData