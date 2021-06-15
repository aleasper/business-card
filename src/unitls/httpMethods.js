export async function postData(url = '', data = {}, headers = undefined) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return await response.json();
    } else {
        return await null;
    }
}

export async function getRequest(url, urlParams, headers=undefined, returnStatus=false){
    const response = await fetch(`${url}?${(new URLSearchParams(urlParams)).toString()}`,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                ...headers
            }
        })
    if (returnStatus){
        return response.status;
    }
    if (response.ok){
        return await response.json();
    } else {
        return await response.json();
    }
}