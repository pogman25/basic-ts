import { IStore } from 'src/core/reducers/interfaces';
import { createSelector } from 'reselect';

const userIds = (store: IStore) => {
  return store.users.usersIds;
};

const userByIds = (store: IStore) => {
  return store.users.usersByIds;
};

const stack = (store: IStore) => {
  return store.stack.stackByIds;
};
const locations = (store: IStore) => {
  return store.locations.locationsByIds;
};

export const getUserState = createSelector(
  userIds,
  userByIds,
  locations,
  stack,
  (ids, byIds, locations, stack) =>
    ids.map(id => ({
      ...byIds[id],
      location: locations[byIds[id].location].location,
      stack: byIds[id].stack.map(userStack => ({
        ...userStack,
        stack: stack[userStack.id].stack,
        icon: stack[userStack.id].icon,
      })),
    })),
);
