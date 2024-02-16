const initialState: any = {
    country: {
        id: 0,
        name: '',
        states: []
    }
};

export function countryReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case '[Demo Component] UPDATE_COUNTRY': {
            return { ...state, ...action.country };
        }
        default:
            return state;
    }
}


