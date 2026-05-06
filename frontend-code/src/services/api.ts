import axios from 'axios';
import { UploadResponse, ProcessResponse } from '../types/api';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadVideo = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append('video', file);
  
  const response = await api.post<UploadResponse>('/upload-video', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

export const processVideo = async (videoPath: string): Promise<ProcessResponse> => {
  const response = await api.post<ProcessResponse>('/process-video', { video_path: videoPath });
  return response.data;
};

export default api; 