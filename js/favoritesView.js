import { FavoritesData } from "./favoritesData.js";

export class FavoritesView extends FavoritesData {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    // this.empty = this.root.getElementById('empty-favorite')

    this.removeAllTr()
    this.updateView()
    this.onAdd()
    this.updatePrices()
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    });
  }

  updateView() {
    this.entries.forEach(ticker => {
      const row = this.createRow()
      const marketRange = ticker.regularMarketDayRange.split('-')
      const minRange = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(marketRange[0])
      const maxRange = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(marketRange[1])

      row.querySelector('.company img').src = ticker.logourl
      row.querySelector('.company p').textContent = ticker.longName
      row.querySelector('.company span').textContent = ticker.shortName
      row.querySelector('.ticker').textContent = ticker.symbol
      row.querySelector('.price').textContent = ticker.regularMarketPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
      row.querySelector('.currency').textContent = ticker.currency
      row.querySelector('.max-min').textContent = `${minRange} - ${maxRange}`
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Deseja excluir a ação dos favoritos?')
        if(isOk) {
          this.delete(ticker)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>
      <div class="company">
        <img src="./assets/petr4.svg" alt="Logo da empresa Petrobras">
        <div class="names">
          <p>Petróleo Brasileiro S.A. - Petrobras</p>
          <span>Petrobras PN N2</span>
        </div>
      </div>
    </td>
    <td class="ticker">PETR4</td>
    <td class="price">R$ 42,90</td>
    <td class="currency">BRL</td>
    <td class="max-min">R$ 43,90 - R$ 43,90</td>
    <td><button class="remove">X</button></td>
    `

    return tr
  }

  onAdd() {
    const addButton = this.root.querySelector('.search button')
    
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  updatePrices() {
    const updatePriceButton = this.root.querySelector('#updatePrice')

    updatePriceButton.onclick = () => {
      this.updateData()
    }
  }
}

