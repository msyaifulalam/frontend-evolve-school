import axios from 'axios';
import { fetchProfile } from '../action/action'

export const fetchProfDetails = async () => {
    const result = await axios.get('http://demo2118348.mockable.io/profile')
    return result.data.data;
}
