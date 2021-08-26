import { ADD_TASK, DELETE_TASK, DID_TASK } from "./taskTypes";

const initialState = {
  tasks: [
    {"task":"HTML I","done":false, "id":"1"},
    {"task":"CSS","done":false, "id":"2"},
    {"task":"Responsive design","done":false, "id":"3"},
    {"task":"Git","done":false, "id":"4"},
    {"task":"JavaScript I","done":false, "id":"5"},
    {"task":"JavaScript II","done":false, "id":"6"},
    {"task":"React Native","done":false, "id":"7"},
    {"task":"Stack Navigation","done":false, "id":"8"}
  ]
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return{
        ...state,
        tasks: [...state.tasks, 
          {
            task: action.payload,
            done: false,
            id: Math.random().toString()
          }
        ]
      }

    case DELETE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter(
          item => item.id != action.payload
        )
      }

    case DID_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item
          }

          return {
            ...item,
            done: true
          }
        }) 
      }
    default:
      return state;
  }
}

export default taskReducer
