import {createslice} from '@reduxjs/toolkit';
const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    search:{},
    passenger:{},
    confirmation:null,
    },
    reducers:{
        saveSearcfh: (state, action) => {
            state.search = action.payload;
        },
        savePassenger: (state, action) => {
            state.passenger = action.payload;
        },
        saveConfirmation: (state, action) => {
            state.confirmation ={
                ...state.search,
                ...action.passenger,
                status: 'confirmed',
            };
        },
    },
});

export const {saveSearch, savePassenger, saveConfirmation} = bookingSlice.actions;
export default bookingSlice.reducer;