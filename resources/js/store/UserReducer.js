export const USER_LOCATION = "USER_LOCATION";

export const User = {
    location: false
}

export const UserReducer = (state = User, action) => {
    switch (action.type) {
        case USER_LOCATION:
            return action.payload
        default:
            return state;
    }
}
