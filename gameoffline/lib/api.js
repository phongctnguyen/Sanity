import client from './sanity';

const gameFields = `
  title,
  subtitle,
  'slug': slug.current
`;

export async function getAllGames() {
  const results = await client.fetch(`*[_type == "game"]{${gameFields}}`);
  return results;
}
