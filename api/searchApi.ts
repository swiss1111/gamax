const baseUrl = "https://api.stackexchange.com/2.3";

type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

async function fetchData(url = "", data: any = undefined, method: MethodType = "GET", additionalOptions: RequestInit = {}) {
    let response;

    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        ...additionalOptions,
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        response = await fetch(baseUrl + url, options)
    } catch (error) {
        console.log('There was an error', error);
    }

    const contentLength = response?.headers.get("content-length");

    if (response?.ok) {
        if(!!contentLength && parseInt(contentLength) > 0) {
            return response?.json();
        }
        else {
            return {};
        }
    } else {
        return Promise.reject(response);
    }
}

export function search(searchText: string, pageSize= 5): Promise<any> {
    return fetchData(`/search?pagesize=${pageSize}&order=desc&sort=activity&intitle=${searchText}&site=stackoverflow`);
}