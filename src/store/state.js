export const initialState = {
  posts: [],
  dishes: [],
  isAuth: false
}

export const reducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'setDishes':
      return {
        ...state,
        dishes: action.dishes
      }

    case 'setPosts':
      return {
        ...state,
        posts: action.posts
      }

    case 'login':
      return {
        ...state,
        isAuth: true
      }

    case 'logout':
      return {
        ...state,
        isAuth: false
      }

    default:
      return state
  }
}
