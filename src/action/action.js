import { fetchProfDetails } from '../api/profile';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export function fetchProfile() {
    return {
        type: FETCH_PROFILE,
        profileDetail: fetchProfDetails()
    };
}