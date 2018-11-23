import guid from '../helpers/generateUniqId';
const notes = [...Array(9)].map((key, index) => {
  return {
    description: `0${index + 1} Layer`,
    id: guid(),
    editMode: false,
    activated: false,
  };
});

export default notes;
