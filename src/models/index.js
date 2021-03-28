// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShoppingItem, ShoppingList } = initSchema(schema);

export {
  ShoppingItem,
  ShoppingList
};