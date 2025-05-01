import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/download-dist');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dist.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <Download className="w-5 h-5 mr-2" />
      Download Build
    </button>
  );
};

export default DownloadButton;