import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ShoppingItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly ShoppingList: ShoppingList;
  constructor(init: ModelInit<ShoppingItem>);
  static copyOf(source: ShoppingItem, mutator: (draft: MutableModel<ShoppingItem>) => MutableModel<ShoppingItem> | void): ShoppingItem;
}

export declare class ShoppingList {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<ShoppingList>);
  static copyOf(source: ShoppingList, mutator: (draft: MutableModel<ShoppingList>) => MutableModel<ShoppingList> | void): ShoppingList;
}