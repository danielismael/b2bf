import axios from 'axios';
import { parseCookies } from 'nookies';

export const getApiDirectDistributor = (ctx: any) => {
    //const { 'adminAuth.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:8000/api/directDistributor/',
        headers: {
            //Authorization: `Bearer ${token}`,
        },
    })

  /*  if (token) {
        api.defaults.headers['Authorizarton'] = `Bearer ${token}`;
    }*/

    return api;
}