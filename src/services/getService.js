import * as httpRequest from '../utils/httpRequest';

export const get = async () => {
  try {
    // eslint-disable-next-line
    const res = await httpRequest.get(`products`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}
