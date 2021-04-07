export class ItemStore {
  container: ContainerItem

  load() {
    console.group('load')
    console.time('load')

    this.container = { items: [] };
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
        { id: 12, title: "TestItem 12", sortOrder: 8, isSelected: false },
        { id: 13, title: "TestItem 13", sortOrder: 7, isSelected: false },
        { id: 14, title: "TestItem 14", sortOrder: 4, isSelected: false },
        { id: 15, title: "TestItem 15", sortOrder: 6, isSelected: false },
        { id: 16, title: "TestItem 16", sortOrder: 5, isSelected: false },
        { id: 17, title: "TestItem 17", sortOrder: 2, isSelected: false },
        { id: 18, title: "TestItem 18", sortOrder: 11, isSelected: false },
        { id: 19, title: "TestItem 19", sortOrder: 1, isSelected: false },
        { id: 20, title: "TestItem 20", sortOrder: 9, isSelected: false },
        { id: 21, title: "TestItem 21", sortOrder: 3, isSelected: false },
        { id: 22, title: "TestItem 22", sortOrder: 8, isSelected: false },
        { id: 23, title: "TestItem 23", sortOrder: 7, isSelected: false },
        { id: 24, title: "TestItem 24", sortOrder: 4, isSelected: false },
        { id: 25, title: "TestItem 25", sortOrder: 6, isSelected: false },
        { id: 26, title: "TestItem 26", sortOrder: 5, isSelected: false },
        { id: 27, title: "TestItem 27", sortOrder: 2, isSelected: false },
        { id: 28, title: "TestItem 28", sortOrder: 11, isSelected: false },
        { id: 29, title: "TestItem 29", sortOrder: 1, isSelected: false },
        { id: 30, title: "TestItem 30", sortOrder: 9, isSelected: false },
      ]
    }

    this.sortItemList();

    console.timeEnd('load');
    console.count('End of load')
    console.groupEnd()
  }


  selectItem(item: Item) {
    this.container.items.forEach(i => i.isSelected = false);
    item.isSelected = true;
  }

  private sortItemList() {
    console.group('sortItemList')
    console.time('sortItemList')

    this.container.items.sort((a, b) => {
      return a.sortOrder - b.sortOrder;
    })

    console.timeEnd('sortItemList')
    console.groupEnd()
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