export default {
    categories: [],
    currentCategory: {},
    apiResponse: { message: "", status: 0 },
    isLogged: false,
    user: {
        subscriptions: [],
        channels: [],
        likedPhotos: [],
        sharedPhotos: [],
        userDetail: {}
    },
    currentUser: {},
    userUpdateRes: {},

    currentChannel: {
        channelDetail: {},
        categories: [],
        channelPhotos: [],
        photoGallery: [],
        subscribers: [],
        isSubs: false
    },
    // channels: [],
    channelCRUDState: {
        channelUpdateResult: {},
        channelCreateResult: {}
    }
}