import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { getAllGames } from '../lib/api';

export default function Home ({ games }) {
  console.log(games);
	return (
		<PageLayout>
			<AuthorIntro />
			<hr />
			<Row className='mb-5'>
				{games.map(({ title, subtitle, slug, date, coverImage, author }) => (
					<Col key={slug} md='4'>
						<CardItem
							title={title}
							subtitle={subtitle}
							date={date}
              image={coverImage}
              author={author}
						/>
					</Col>
				))}
			</Row>
		</PageLayout>
	);
}

// This function is called during the build time
// provides props to your page
// create static page
export async function getStaticProps() {
  const games = await getAllGames();
	return {
		props: {
			games,
		},
	};
}
