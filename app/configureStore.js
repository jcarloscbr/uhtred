import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import * as stockActions from './actions/stocks'

const configureStore = () => {
  const middlewares = [thunk, logger]
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  store.subscribe(() => {
    // do something with state
  })

  store.dispatch(stockActions.fetchStocks())
  return store
}

export default configureStore
