import AudioFile from './AudioModel';
import { requestAudios } from './AudioResource';

const model : AudioFile[] = [
  new AudioFile('Alien Spaceship UFO Sound', 'https://soundbible.com/grab.php?id=2213&type=mp3'),
  // new AudioFile('Unknown', 'https://dl.last.fm/static/1541758312/131211148/0528f9c2cc9140584bc2c4fc6c9eac85b6c66fe58a4c064cd0b68cbeba633225/Death+Grips+-+Get+Got.mp3')
]

interface IFetchOptions  {
  search?: string;
}

async function fetchSoundBibleFiles({}: IFetchOptions = {}) : Promise<AudioFile[]> {
  const result = Array.from(Array(1).keys())
    .map(async (_:any, index:number) => {
      const id = index+1;
      const url = `http://soundbible.com/grab.php?id=${id}&type=mp3`
      const name = `Soundbible ${id}`
    
      const info = await fetch(url, { method: 'GET', referrer:'no-referrer', mode:'no-cors' })
      console.log(await info);

    return new AudioFile(name, url)
  })
  return Promise.all(result);
}

async function fetchFreesoundFiles({}: IFetchOptions = {}) : Promise<AudioFile[]> {
  return [
    new AudioFile('Hinkypunk 1O81', 'https://freesound.org/people/Setuniman/sounds/382909/download/382909__setuniman__hinkypunk-1o81.mp3')
  ]
}

export async function fetchAudioFiles() : Promise<AudioFile[]> {
  return model;//.concat( await fetchSoundBibleFiles());
}
