import axios from 'axios';
import FormData from 'form-data';

interface IDataObject {
  [key: string]: string;
}

export const convertToFormData = (data: IDataObject) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
};

const api = axios.create({
  baseURL: 'https://eduro.goe.go.kr/',
});

export default (url: string, data: IDataObject) => {
  const formData = convertToFormData(data);

  return api({
    url,
    method: 'POST',
    data: formData,
    headers: formData.getHeaders(),
  });
};
