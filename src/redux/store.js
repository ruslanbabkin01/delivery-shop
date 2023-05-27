import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { generalReducer } from './slice'

const authPersistConfig = {
  key: 'general',
  storage,
  whitelist: ['order', 'userOrderData'],
}

const persistedReducer = persistReducer(authPersistConfig, generalReducer)

export const store = configureStore({
  reducer: {
    general: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// store.replaceReducer(persistedReducer)
export const persistor = persistStore(store)
