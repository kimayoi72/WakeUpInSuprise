import React from 'react'

import FileUpload, { FileContent } from "../atoms/FileUpload";
import { storeAudio, requestAudios } from '../../libs/AudioResource'

const Upload = () => {
  const onFileLoaded = async (file: File, content: FileContent) => {
    await storeAudio(file.name, content);
  };

  requestAudios().then(v => {
    console.log(v)
  });

  return (
    <div>
      <h1>Upload</h1>
      <FileUpload onFileLoaded={onFileLoaded} />
    </div>
  );
};
export default Upload;
