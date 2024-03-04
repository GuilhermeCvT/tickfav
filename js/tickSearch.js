const token = 'ropjMwy4GojaWaD56UcvF7'

export class tickSearch {
  static search(ticker) {
    const endpoint = `https://brapi.dev/api/quote/${ticker}?token=${token}`
    const requestInfo = {
      method: 'GET'
    }

    return fetch(endpoint, requestInfo)
      .then(data => data.json())
      .then((response) => 
        {
          if (response.error == true)
            return response
          
          return response.results[0]
        }
      )
      .then(({currency, logourl, longName, regularMarketPrice, shortName, symbol, regularMarketDayRange, error, message}) => ({
        currency,
        logourl,
        longName,
        regularMarketPrice,
        shortName,
        symbol,
        regularMarketDayRange,
        error,
        message
      }))
  }
}