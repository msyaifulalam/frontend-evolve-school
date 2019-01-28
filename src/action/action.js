export const GET_PROFILE = 'GET_PROFILE';

export function getProfile(profileDetail) {
    return { type: GET_PROFILE, profileDetail }
}