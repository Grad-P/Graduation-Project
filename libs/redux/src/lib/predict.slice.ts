import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';
export enum HttpResponseCodesEnum {
  SUCCESS = 200,
  SUCCESS_CREATION = 201,
}
export enum SliceStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export interface PredictMonkeyPoxSliceState {
  diseased: boolean;
  predictMonkeyPoxSliceStatus: SliceStatus;
  error: string;
}

const initialState: PredictMonkeyPoxSliceState = {
  diseased: false,
  error: '',
  predictMonkeyPoxSliceStatus: SliceStatus.IDLE,
};

export type predictMonkeyPoxResponse = {
  statusCode: number;
  message: string;
  data: { diseased: boolean };
};

const BACKEND_URL = 'http://localhost:3000/api';

export const PredictMonkeyPox = createAsyncThunk(
  'predict/PredictMonkeyPox',
  async (form: FormData, { getState }) => {
    return await axios.post(BACKEND_URL + '', form, {
      headers: {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
      },
    });
    // get<BannerReadDto[]>(
    //   RESOURCE_TYPE.PRODUCT,
    //   '/product/banners/active'
    // );
  }
);

export const PredictMonkeyPoxSlice = createSlice({
  name: 'PredictMonkeyPox',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        PredictMonkeyPox.pending.type,
        (state: PredictMonkeyPoxSliceState) => {
          state.predictMonkeyPoxSliceStatus = SliceStatus.LOADING;
        }
      )
      .addCase(
        PredictMonkeyPox.fulfilled.type,
        (
          state: PredictMonkeyPoxSliceState,
          action: PayloadAction<predictMonkeyPoxResponse>
        ) => {
          if (
            action.payload &&
            action.payload.statusCode === HttpResponseCodesEnum.SUCCESS
          ) {
            state.diseased = action.payload.data.diseased;
            state.predictMonkeyPoxSliceStatus = SliceStatus.SUCCEEDED;
          } else {
            state.predictMonkeyPoxSliceStatus = SliceStatus.FAILED;
            state.error = action.payload.message;
          }
        }
      )
      .addCase(
        PredictMonkeyPox.rejected.type,
        (state: PredictMonkeyPoxSliceState) => {
          state.diseased = false;
          state.predictMonkeyPoxSliceStatus = SliceStatus.FAILED;
          state.error = 'Error something went wrong';
        }
      );
  },
});

export const getPredictMonkeyPoxSliceDiseased = (state: RootState) =>
  state.PredictMonkeyPoxSlice.diseased;

export const getPredictMonkeyPoxSliceStatus = (state: RootState) =>
  state.PredictMonkeyPoxSlice.predictMonkeyPoxSliceStatus;

export default PredictMonkeyPoxSlice.reducer;
