import { faker } from '@wp-g2/protokit';
import React from 'react';

import { 
	Button,
	Divider,
	Grid,
	Heading,
  Text,
	VStack,
  Card,
  CardBody,
  CardFooter,
} from "@wp-g2/components";

export default {
	component: Card,
	title: 'Components/Card',
};

const ExampleCard = () => {
	return (
		<Card isRounded>
			<VStack expanded>
				<CardBody>
					<VStack>
						<Heading>{faker.lorem.sentence()}</Heading>
						<Text>
              {faker.random.arrayElement([
                faker.lorem.sentence(),
                faker.lorem.words(),
                faker.lorem.paragraphs(),
              ])}
						</Text>
					</VStack>
				</CardBody>
				<Divider />
				<CardFooter>
					<Button>Action</Button>
				</CardFooter>
			</VStack>
		</Card>
	);
};
export const adaptiveHeight = () => {
	return (
		<Grid columns={[1, 2, 4]}>
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
		</Grid>
	);
};

export const _default = () => {
	return (
		<Card elevation={5} isBorderless isRounded>
			<CardBody>Card</CardBody>
		</Card>
	);
};
