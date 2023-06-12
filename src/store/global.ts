import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  // 这里的name与外层的reducer下的名称要对应，不然使用useSelector提取不到数据
  name: 'global',
  initialState: {
    token: ''
  },
  reducers: {
    setToken: (state) => {
      state.token = '1';
    }
  }
});

export const { setToken } = globalSlice.actions;

export default globalSlice.reducer;
