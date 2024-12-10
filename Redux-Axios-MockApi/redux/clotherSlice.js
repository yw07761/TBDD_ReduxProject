import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URLs
const CLOTHES_API = 'https://6712bba06c5f5ced6624815a.mockapi.io/clother';
const PERSON_API = 'https://6712bba06c5f5ced6624815a.mockapi.io/person';

// Thunks để lấy dữ liệu từ API
export const fetchClothes = createAsyncThunk(
  'clother/fetchClothes',
  async () => {
    try {
      const response = await axios.get(CLOTHES_API);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);

export const fetchPerson = createAsyncThunk(
  'clother/fetchPerson',
  async () => {
    try {
      const response = await axios.get(PERSON_API);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  clother: [],
  person: [],
  status: 'idle',  // Trạng thái tải dữ liệu
  error: null,
};

const clotherSlice = createSlice({
  name: 'clother',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Trạng thái khi API đang tải
    builder.addCase(fetchClothes.pending, (state) => {
      state.status = 'loading';
    });
    // API đã hoàn thành
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.clother = action.payload;
    });
    // API gặp lỗi
    builder.addCase(fetchClothes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Tương tự cho fetchPerson
    builder.addCase(fetchPerson.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.person = action.payload;
    });
    builder.addCase(fetchPerson.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectClother = (state) => state.clother.clother;
export const selectPerson = (state) => state.clother.person;
export const selectClotherStatus = (state) => state.clother.status;
export const selectClotherError = (state) => state.clother.error;

export default clotherSlice.reducer;
