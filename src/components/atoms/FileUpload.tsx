import React, { Component } from "react";
import Dropzone from "react-dropzone";

export type FileContent = string | ArrayBuffer;

export interface FileUploadProps {
  onFileLoaded?: (file: File, content: FileContent) => void;
  accept?: string
}

interface FileUploadState {
  files: File[];
  uploadedFiles: File[];
}

const css: React.CSSProperties = {
  position: "relative",
  margin: "15px",
  width: "calc(100%-30px)",
  height: "calc(100%-30px)",
  minHeight: "200px",
  borderWidth: "2px",
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: "5px",
  textAlign: "left"
};

class FileUpload extends Component<FileUploadProps, FileUploadState> {
  constructor(props: Readonly<FileUploadProps>) {
    super(props);
    this.state = {
      files: [],
      uploadedFiles: []
    }
  }

  onDrop = (acceptedFiles: File[]) => {
    this.setState({
      uploadedFiles: [],
      files: acceptedFiles
    }, () => {
      let localFileList: File[] = [];
      this.state.files.forEach(file => {
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result === null) return;
          this.props.onFileLoaded && this.props.onFileLoaded(file, reader.result);
          localFileList = localFileList.concat(file);
          this.setState({ uploadedFiles: localFileList})
        };
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.readAsDataURL(file);
      });
    })
  };

  public render() {
    return (
      <Dropzone onDrop={this.onDrop} accept={this.props.accept} style={css}>
        <ul>
          {this.state.uploadedFiles.map(file => (
            <li key={file.name}>
              {file.name} - {file.size}
            </li>
          ))}
        </ul>
      </Dropzone>
    );
  }
}

export default FileUpload;
