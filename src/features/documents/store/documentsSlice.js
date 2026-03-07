import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  selectedDocument: null,
  loading: false,
  error: null,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    setDocuments: (state, action) => {
      state.list = action.payload;
    },
    setSelectedDocument: (state, action) => {
      state.selectedDocument = action.payload;
    },
    setDocumentsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDocumentsError: (state, action) => {
      state.error = action.payload;
    },
    resetDocumentsState: () => initialState,
  },
});

export const {
  setDocuments,
  setSelectedDocument,
  setDocumentsLoading,
  setDocumentsError,
  resetDocumentsState,
} = documentsSlice.actions;

export default documentsSlice.reducer;
