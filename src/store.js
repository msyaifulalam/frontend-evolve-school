import { createStore } from 'redux' 
import getProf from './redusers/Profile'

const store = createStore(getProf)

export default store;