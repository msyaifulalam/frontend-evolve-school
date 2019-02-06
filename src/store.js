import { createStore } from 'redux' 
import fetchingProf from './reducers/Profile'

const store = createStore(fetchingProf)

export default store;