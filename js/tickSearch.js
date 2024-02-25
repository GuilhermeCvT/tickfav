const token = 'ropjMwy4GojaWaD56UcvF7'

export class tickSearch {
  static search(ticker) {
    const endpoint = `const endpoint = 'https://brapi.dev/api/quote/${ticker}?token=${token}'`

    return fetch(endpoint)
      .then(data => data.json())
      .then(({currency, logourl, longname, regularMarketPrice, shortName, symbol, regularMarketDayRange}) => ({
        currency,
        logourl,
        longname,
        regularMarketPrice,
        shortName,
        symbol,
        regularMarketDayRange
      }))
  }
}