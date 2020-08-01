import axios from 'axios';
import FormData from 'form-data';

interface IDataObject {
  [key: string]: string;
}

export const convertToFormData = (data: IDataObject) => {
  const formData = new FormData();
  Object
    .entries(data)
    .forEach(([key, value]) =>
      formData.append(key, value));
  return formData;
};


export default (baseUrl: string, url: string, data: IDataObject) => {
  const formData = convertToFormData(data);
  const api = axios.create({
    baseURL: baseUrl,
  });
  return api({
    url,
    method: 'POST',
    data: formData,
    headers: formData.getHeaders(),
  });
};
