export interface Song {
  name: string;
  artist: string;
  cover: string /* from spotify, 300x300 (from the i.scdn.co domain, only the hash is needed e.g. ab67616d0000b273bf0aa63b795c206ed575f384) */;
  id: string /* spotify track id (e.g. 1VrS7b7ieSGQIhEauDzm7N) */;
}
