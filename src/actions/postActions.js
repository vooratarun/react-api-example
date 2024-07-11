// Example using JSONPlaceholder API
export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.message });
    }
  };

  export const fetchPosts2 = () => async(dispatch) => {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!response.ok) {
          throw new Error("Network response was not ok")
      }
      const data = await response.json();
      dispatch( {
        type:"FETCH_POSTS_SUCCESS",
        payload: data
      })

    } catch(error) {

      dispatch({
        type: "FETCH_POSTS_FAILURE",
        error: error.message
      })

    }
  }