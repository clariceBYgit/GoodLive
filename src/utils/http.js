import qs from 'querystring'

export const getData = (url) => {
    const result = fetch(url) 
    return result
}

export const postData = (url,data) => {
    const result = fetch(url, {
        method:'POST',
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Accept":"application/json,text/plain,*/*"
        },
        body:qs.stringify(data)
    })
    return result

}