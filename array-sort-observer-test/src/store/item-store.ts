export class ItemStore {
  container: ContainerItem

  load() {
    console.time('load')

    this.container = {
      items: [
        { id: 1, title: "TestItem 1", sortOrder: 8, isSelected: false },
        { id: 2, title: "TestItem 2", sortOrder: 7, isSelected: false },
        { id: 3, title: "TestItem 3", sortOrder: 4, isSelected: false },
        { id: 4, title: "TestItem 4", sortOrder: 6, isSelected: false },
        { id: 5, title: "TestItem 5", sortOrder: 5, isSelected: false },
        { id: 6, title: "TestItem 6", sortOrder: 2, isSelected: false },
        { id: 7, title: "TestItem 7", sortOrder: 11, isSelected: false },
        { id: 8, title: "TestItem 8", sortOrder: 1, isSelected: false },
        { id: 9, title: "TestItem 9", sortOrder: 9, isSelected: false },
        { id: 10, title: "TestItem 10", sortOrder: 10, isSelected: false },
        { id: 11, title: "TestItem 11", sortOrder: 3, isSelected: false },
      ]
    }

    this.sortItemList();

    console.timeEnd('load')
  }


  selectItem(item: Item) {
    // console.time('selectItem')

    this.container.items.forEach(i => i.isSelected = false);
    item.isSelected = true;

    // console.timeEnd('selectItem')
  }

  private sortItemList() {
    console.log('sortItemList started')
    console.time('sortItemList')

    this.container.items.sort((a, b) => {
      return a.sortOrder - b.sortOrder;
    })

    console.timeEnd('sortItemList')
  }
}

export type Item = {
  id: number,
  title: string,
  sortOrder: number,
  isSelected: boolean,
}

export type ContainerItem = {
  items: Item[]
}