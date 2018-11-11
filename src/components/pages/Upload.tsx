import React, { Component } from "react";
import Dropzone from "react-dropzone";

export type FileContent = string | ArrayBuffer;

export interface UploadProps {
  onFileLoaded?: (file: File, content: FileContent) => void;
}

interface UploadState {
  files: File[];
}

class Upload extends Component<UploadProps, UploadState> {
  constructor(props: Readonly<UploadProps>) {
    super(props);
    this.state = { files: [] };
  }

  private onDrop = (acceptedFiles: File[]) => {
    this.setState({ files: [] });

    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result === null) {
          return;
        }
        const files = this.state.files.concat(file);
        this.setState({ files });
        this.props.onFileLoaded && this.props.onFileLoaded(file, reader.result);
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.readAsDataURL(file);
    });
  };

  public render() {
    const {files} = this.state
    return (
      <Dropzone onDrop={this.onDrop}>
        <div>Label</div>
        <ul>
          {files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size}
            </li>
          ))}
        </ul>
      </Dropzone>
    );
  }
}

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
