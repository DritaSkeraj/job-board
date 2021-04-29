export default function (state = {}, action){
    switch(action.type) {
        case "ADD_FAVORITE":
            return{
                ...state,
                favorites: state.favorites.concat(action.payload),
            };
        case "REMOVE_FAVORITE":
            return{
                ...state,
                favorites: [
                    ...state.favorites.filter(
                        (jobId) => jobId !== action.payload
                    )
                ]
            };
        default: 
            return state;
    }
}