import client from './sanity';

const gameFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url
`;

export async function getAllGames() {
	const results = await client.fetch(`*[_type == "game"]{${gameFields}}`);
	return results;
}
