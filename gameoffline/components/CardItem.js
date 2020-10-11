import { Card } from 'react-bootstrap';

const CardItem = ({ title, subtitle, date, image, author }) => {
	return (
		<Card className={`fj-card`}>
			<div className='card-body-wrapper'>
				<Card.Header className='d-flex flex-row'>
					<img
						src={
							author
								? author.avatar
								: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg'
						}
						className='rounded-circle mr-3'
						height='50px'
						width='50px'
						alt='avatar'
					/>
					<div>
						<Card.Title className='font-weight-bold mb-1'>
							{author ? author.name : 'Anonymous'}
						</Card.Title>
						<Card.Text className='card-date'>{date}</Card.Text>
					</div>
				</Card.Header>
				<div className='view overlay'>
					<Card.Img src={image} alt='Card image cap' />
				</div>
				<Card.Body>
					<Card.Title className='card-main-title'>{title}</Card.Title>
					<Card.Text>{subtitle}</Card.Text>
				</Card.Body>
			</div>
			<a className='card-button'>Read More</a>
		</Card>
	);
};

export default CardItem;
