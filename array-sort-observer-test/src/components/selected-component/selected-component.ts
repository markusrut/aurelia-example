import { bindable } from "@aurelia/runtime-html";
import { Item } from "../../store/item-store";

export class SelectedComponent {
  @bindable selectedItem: Item;
  
  get id() { return this.selectedItem.id }
  get sortOrder() { return this.selectedItem.sortOrder }
  get title() { return this.selectedItem.title }
}