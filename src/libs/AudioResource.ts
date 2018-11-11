import localForage from 'localforage'
import { FileContent } from '../components/atoms/FileUpload';

localForage.config({
  name: 'WUIS',
  version: 1,
  storeName: 'audio',
  description: 'Audio files'
})

const storeAudio = async (name: string, content: FileContent) => {
  await localForage.setItem(name, content);
  console.log(name, content.toString().length);
}

const requestAudio = async (name: string) => {
  return await localForage.getItem<FileContent>(name);
}

const requestAudios = async () => {
  const keys = await localForage.keys()
  return Promise.all(keys.map(key => requestAudio(key)));
}

export { storeAudio, requestAudios }