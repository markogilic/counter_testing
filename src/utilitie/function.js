export function filter(state, city, setState) {
   state.map((item) => {
      if (Object.keys(item)[0].toLocaleLowerCase() === city.toLocaleLowerCase()) {
         setState(Object.values(item));
      }
   });
}
