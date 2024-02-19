import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Установка базового URL для всех запросов
axios.defaults.baseURL = 'https://65d34b11522627d5010889c0.mockapi.io/contacts/';

// Функция для создания асинхронной операции
const createContactAsyncThunk = (name, asyncFn) =>
  createAsyncThunk(`contacts/${name}`, async (payload, thunkAPI) => {
    try {
      const response = await asyncFn(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

// Асинхронные операции для получения, добавления и удаления контакта
export const fetchContacts = createContactAsyncThunk('fetchContacts', () => axios.get('/contacts'));
export const addContact = createContactAsyncThunk('addContact', (contact) => axios.post('/contacts', contact));
export const deleteContact = createContactAsyncThunk('deleteContact', (contactId) =>
  axios.delete(`/contacts/${contactId}`)
);