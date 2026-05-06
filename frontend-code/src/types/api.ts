export interface UploadResponse {
  filename: string;
  path: string;
}

export interface ProcessResponse {
  status: 'success' | 'error';
  kills_detected?: number;
  clips_generated?: number;
  output_path?: string;
  message?: string;
} 