const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        let obj =  {
          ...state,
          posts: action.payload,
          loading: false,
          error: null
        };
        return obj;

      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  

export const postsReducer2 = (state = initialState, action)=>{

  switch(action.type){
    case "FETCH_POSTS_SUCCESS" :
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error:null

      }

      case "FETCH_POSTS_FAILURE":
        return {
          ...state,
          loading:false,
          error: action.error
        }

      default:
        return state
  }

} 

// export default postsReducer2
