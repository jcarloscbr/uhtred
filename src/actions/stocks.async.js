import fetch from 'isomorphic-fetch'
import * as stockActions from './stocks'
import config from '../config'

export const fetchStocks = () => {
  return dispatch => {
    dispatch(stockActions.fetchStocksRequest())

    return fetch(config.API_ENDPOINT + '/api/stocks')
      .then(response => response.json())
      .then(json => dispatch(stockActions.fetchStocksSuccess(json)))
  }
}