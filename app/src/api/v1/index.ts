const fetchHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  Accept: 'application/json',
})

const fileFetchHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
})

const handleErrors = (response) => {
  if (!response.ok) {
    switch (response.status) {
      case 401:
        deleteCookie('token')
        dispatchAction({
          type: REQUEST_AUTH_ERROR,
        })
        break
      case 404:
        dispatchAction({
          type: DOCUMENT_NOT_FOUND,
        })
        break
      case 500:
        dispatchAction({
          type: SERVER_UNAVAILABLE,
        })
        break
      default:
        dispatchAction({
          type: REQUEST_ERROR,
        })
    }
  } else {
    dispatchAction({
      type: REQUEST_FINISHED,
    })
  }

  return response
}

export const apiFetch = async (url, options, body) => {
  try {
    const response = await fetch(`http://site.ru/api${url}`, {
      headers: fetchHeaders,
      credentials: 'include',
      ...options,
    })
    handleErrors(response)

    const text = await response.text()
    const responseBody = text ? JSON.parse(text) : text

    return {
      ...responseBody,
      status: response.status,
      ok: response.ok,
    }
  } catch (e) {
    console.error(e)

    return {}
  }
}
