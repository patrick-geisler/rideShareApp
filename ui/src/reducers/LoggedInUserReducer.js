export const LoggedInUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FB_LOGIN':
            return ({
                user: action.loggedInUser
            })
        case 'FB_LOGOUT':
            return ({
                user: action.loggedInUser
            })
        default: return state;
    }
}
