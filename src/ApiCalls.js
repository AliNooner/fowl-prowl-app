const fetchCalls = {
  fetchData: function (endpoint) {
    return fetch(`https://fowl-prowl-api.herokuapp.com/api/v1/${endpoint}`)
      .then(response => {
        if (response.status === 500){
          throw new Error('500 - Server Not Responding.')
        } else if (response.status === 404){
          throw new Error('404 - URL Not Found.')
        }
      return response.json()})
      .catch(error => window.alert(`${error} Refresh browser to try again.` ))
  }
}

export default fetchCalls;
