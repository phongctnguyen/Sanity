import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => (
	<Row>
		<Col md='8'>
			{/* AUTHOR INTRO STARTS */}
			<Media className='mb-4 admin-intro'>
				<Image
					roundedCircle
					width={64}
					height={64}
					className='mr-3'
					src='http://wwewrestlemania-33.com/wp-content/uploads/2019/09/cot-truyen-god-of-war4-Kratos.jpg'
					alt='Generic placeholder'
				/>
				<Media.Body>
					<h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
					<p className='welcome-text'>
						My name is Phong and I am an experienced software engineer and
						freelance developer, and this is my blog page.
					</p>
				</Media.Body>
			</Media>
			{/* AUTHOR INTRO ENDS */}
		</Col>
	</Row>
);

export default AuthorIntro;
