import React from 'react'

import FileUpload, { FileContent } from "../atoms/FileUpload";

const Upload = () => {
  const onFileLoaded = (file: File, content: FileContent) => {
    console.log(file.name, file.size, content.toString().length);
  };
  return (
    <div>
      <h1>Upload</h1>
      <FileUpload onFileLoaded={onFileLoaded} />
    </div>
  );
};
export default Upload;
