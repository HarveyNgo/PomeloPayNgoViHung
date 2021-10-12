import axios from 'axios';
import {ResponseModel} from 'model/ResponseModel';

export function axiosGet(URL: string, config: any = {}): ResponseModel {
  return axios
    .get(URL, config)
    .then(response => {
      const {data} = response;
      if (response.status === 200) {
        return {
          success: true,
          data,
        };
      }
      return {
        success: false,
        resp_status: response.status,
        data,
      };
    })
    .catch(error => ({
      success: false,
      errorMessage: error.response,
    }));
}

export function axiosPost(
  URL: string,
  post: any,
  config: any = {},
): ResponseModel {
  return axios
    .post(URL, post, config)
    .then(response => {
      const {data} = response;
      if (response.status === 200 || response.status === 201) {
        return {
          success: true,
          data,
        };
      }
      return {
        success: false,
        resp_status: response.status,
        data,
      };
    })
    .catch(error => ({
      success: false,
      errorMessage: error,
    }));
}
