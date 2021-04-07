import { ItemStore } from "../../store/item-store";

export class MainComponent {
  private get container() { return this.itemStore.container }

  get itemList() { return this.container.items }
  get selectedItem() {
    console.time('selectedItem')
    const foundItem = this.itemList.find(i => i.isSelected);
    console.count("selectedItem count")
    console.timeEnd('selectedItem')
    return foundItem
  }

  constructor(private itemStore: ItemStore) { }

  binding() {
    this.itemStore.load();
  }

  reload(numberOfReloads: number) {
    for (let i = 0; i < numberOfReloads; i++) {
      this.itemStore.load();
    }

    console.log("reload loop done")
  }

  reloadAndSelect(numberOfReloads: number) {
    for (let i = 0; i < numberOfReloads; i++) {
      this.itemStore.load();

      const indexToSelect = Math.floor(Math.random() * this.itemList.length)
      this.itemStore.selectItem(this.itemList[indexToSelect])
    }

    console.log("reloadAndSelect loop done")
  }

  select(numberOfSelects: number) {
    for (let i = 0; i < numberOfSelects; i++) {
      const indexToSelect = Math.floor(Math.random() * this.itemList.length)
      this.itemStore.selectItem(this.itemList[indexToSelect])
    }

    console.log("reloadAndSelect loop done")
  }
}