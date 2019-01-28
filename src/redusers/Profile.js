import { combineReducers } from 'redux';
import {
    GET_PROFILE
} from '../action/action';

const profDet = [];

function getProfile(state = profDet, action){
    switch (action.type){
        case GET_PROFILE:
            return [
                ...state,
                {
                    nama_depan: action.profileDetail.nama_depan,
                    nama_belakang: action.profileDetail.nama_belakang,
                    hp: action.profileDetail.handphone,
                    email: action.profileDetail.email
                }
            ];
        default:
            return state
    }
}

const getProf = combineReducers({
    getProfile
})

export default getProf;