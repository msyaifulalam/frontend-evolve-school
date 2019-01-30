import { combineReducers } from 'redux';
import {
    FETCH_PROFILE
} from '../action/action';

function profDet(state = {
  profile: {
    nama_depan: '',
    naama_belakang: '',
    handphone: '',
    email: ''
  }
}, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      const data = action.profileDetail
      return {
        ...state,
        profile: data
      }
    default:
      return state;
  }
}

const fetchingProf = combineReducers({
  profDet
})
  
export default fetchingProf