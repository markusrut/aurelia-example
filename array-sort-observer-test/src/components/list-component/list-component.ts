import { bindable } from "@aurelia/runtime-html";
import { Item } from "../../store/item-store";


export class ListComponent {
  @bindable itemList: Item[];
}