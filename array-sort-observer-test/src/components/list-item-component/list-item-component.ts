import { bindable } from "@aurelia/runtime-html";
import { Item, ItemStore } from "../../store/item-store";


export class ListItemComponent {
  @bindable item: Item;
  
  get id() { return this.item.id }
  get sortOrder() { return this.item.sortOrder }
  get title() { return this.item.title }
  get isSelected() { return this.item.isSelected }

  constructor(private itemStore: ItemStore) {}

  selectItem() {
    debugger;
    this.itemStore.selectItem(this.item);
  }
}