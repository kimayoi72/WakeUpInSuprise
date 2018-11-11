import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

export type FileContent = string | ArrayBuffer;

export interface UploadProps {
  onFileLoaded?: (file: File, content: FileContent) => void;
}

const Upload = ({ onFileLoaded }: UploadProps) => {
  const defaultState: File[] = [];
  const [files, setFiles] = useState(defaultState);
  const [uploadedFiles, setUploadedFiles] = useState(defaultState);

  useEffect(
    () => {
      let localFileList: File[] = [];
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result === null) {
            return;
          }
          onFileLoaded && onFileLoaded(file, reader.result);
          localFileList = localFileList.concat(file);
          setUploadedFiles(localFileList);
        };
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.readAsDataURL(file);
      });
    },
    [files]
  );

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles([]);
    setFiles(acceptedFiles);
  };

  return (
    <Dropzone onDrop={onDrop}>
      <div>Label</div>
      <ul>
        {uploadedFiles.map(file => (
          <li key={file.name}>
            {file.name} - {file.size}
          </li>
        ))}
      </ul>
    </Dropzone>
  );
};

const UploadPage = () => {
  const onFileLoaded = (file: File, content: FileContent) => {
    console.log(file.name, file.size, content.toString().length);
  };
  return (
    <div>
      <h1>Upload</h1>
      <Upload onFileLoaded={onFileLoaded} />
    </div>
  );
};
export default Upload;
