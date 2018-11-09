require('isomorphic-fetch');

export const fetchAudioFile = async (url: string) : Promise<Blob> => {
  let response = await fetch(url, { mode: 'no-cors' })
  return response.blob()
}