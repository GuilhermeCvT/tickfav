import { FavoritesData } from "./favoritesData.js";

export class FavoritesView extends FavoritesData {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.empty = this.root.getElementById('empty-favorite')
  }
}

