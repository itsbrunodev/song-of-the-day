export interface Song {
  name: string;
  artist: string;
  cover: string /* The hash of the album cover image, 300x300 (from the i.scdn.co domain, only the hash is needed e.g. ab67616d00001e02a8c284ce171e96a79eabf7de) */;
  trackId: string /* The Spotify track ID (e.g. 7obdw7ZGr6l1GqSBkFiY11) */;
  videoId: string /* The YouTube video ID, preferably a lyric video (e.g. zWaymcVmJ-A) */;
  date: string /* The date when the song is the song of the day (YYYY-MM-DD) */;
}
