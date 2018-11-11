import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

export type FileContent = string | ArrayBuffer;

export interface FileUploadProps {
  onFileLoaded?: (file: File, content: FileContent) => void;
  accept?: string;
}

const FileUpload = ({ onFileLoaded, accept = "audio/*" }: FileUploadProps) => {
  const defaultState: File[] = [];
  const [files, setFiles] = useState(defaultState);
  const [uploadedFiles, setUploadedFiles] = useState(defaultState);

  useEffect(
    () => {
      let localFileList: File[] = [];
      files.forEach(file => {
        console.log(file)

        const reader = new FileReader()
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

  let css : React.CSSProperties = {
    position: "relative",
    margin: "15px",
    width: "calc(100%-30px)",
    height: "calc(100%-30px)",
    minHeight: "200px",
    borderWidth: "2px",
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: "5px",
    textAlign: "left",
  }

  return (
    <Dropzone onDrop={onDrop} accept={accept} style={css}>
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

export default FileUpload;
