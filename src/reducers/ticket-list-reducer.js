export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
      case 'DELETE_TICKET': 
        const newState = {...state };
        delete newState[id];
        return newState;
    default: 
      return state;
    }
};


//state = { 1 : {"name" : "Kate", "course": "React", "id" : 1}, 2: {"name":"Evgeniya", "course":"React", "id": 2}};