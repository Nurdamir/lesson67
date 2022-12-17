import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CodeState {
  value: string;
  stars: string;
  password: string;
  style: string;
  message: string;
}

const initialState: CodeState = {
  value: '',
  stars: '',
  password: '2835',
  style: '',
  message: '',
}

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.stars += '*';
        state.value += action.payload;
      }
    },
    removeNumber: (state) => {
        state.stars = state.stars.substring(0, state.stars.length - 1);
        state.value = state.value.substring(0, state.value.length - 1);
    },
    check: (state) => {
      if (state.message){
        return initialState;
      } else {
        if (state.value === state.password) {
          state.message = 'Access Granted';
          state.style = 'green';
        } else {
          state.message = 'Access Denied';
          state.style = 'red';
        }
      }
    },
  }
});

export const codeReducer = codeSlice.reducer;
export const {addNumber, removeNumber, check} = codeSlice.actions;