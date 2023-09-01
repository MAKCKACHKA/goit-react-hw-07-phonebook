export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectName = state => state.contactInfo.name;

export const selectNumber = state => state.contactInfo.number;

// export const delContact = state => {
//   const filter = selectFilter(state);
//   return filter.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };

// export const selectTaskCount = state => {
//   const tasks = selectFilter(state);
//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };

// reducers: {
//     updateFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     delContact: (state, action) => {
//       state.contacts.items = action.payload;
//     },
//   },
