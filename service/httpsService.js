import axios from 'axios';

export async function getAllCategory(headers) {
    try {
        const options = {
            method: 'GET',
            url: 'https://expressart-pnwlwchora-uc.a.run.app/getallcategory',
            ...headers,
            // data: JSON.stringify(payload),
        };
      const response = await axios(options);
      return response?.data
    } catch (error) {
      console.error(error);
    }
}

export async function newProduct(payload) {
    let res = {
        code: null,
        data: null
    }
    try {
        const options = {
            method: 'POST',
            url: 'https://expressart-pnwlwchora-uc.a.run.app/addproduct',
            data: payload,
        };
      const response = await axios(options);
      res.code = response.status
      res.data = response?.data
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with non-2xx status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error occurred while setting up the request:', error.message);
      }

      res.code = error.response.status
      res.data = error.response.data
    } finally {
        return res
    }
}

export async function getAllProduct() {
    try {
        const options = {
            method: 'GET',
            url: 'https://expressart-pnwlwchora-uc.a.run.app/getallproduct',
        };
      const response = await axios(options);
      return response?.data
    } catch (error) {
      console.error(error);
      return error.response.data
    }
}

