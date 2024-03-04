import { tickSearch } from "./tickSearch.js"

export class FavoritesData {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@ticker-fav:')) || []
  }

  save() {
    localStorage.setItem('@ticker-fav:', JSON.stringify(this.entries))
  }

  async add(ticker) {
    try {
      if(ticker === '')
        throw new Error('Ticker não preenchido')

      const tickerExists = this.entries.find(entry => entry.symbol === ticker)
      if(tickerExists)
        throw new Error('Ticker já adicionado')
      
      const tickerData = await tickSearch.search(ticker)
      if(tickerData.error == true)
        throw new Error('Ticker não encontrado')

      this.entries = [tickerData, ...this.entries]
      this.removeAllTr()
      this.updateView()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(ticker) {
    const filteredTickers = this.entries
      .filter(entry => entry.symbol != ticker.symbol)

    this.entries = filteredTickers
    this.removeAllTr()
    this.updateView()
    this.save()
  }

  async updateData() {
    let updatedTickers = []

    for (const entry of this.entries) {
      updatedTickers.push(await tickSearch.search(entry.symbol))
    }

    this.entries = updatedTickers
    this.save()
    this.removeAllTr()
    this.updateView()
  }
}