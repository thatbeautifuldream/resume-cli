import {TResumeSchema, ResumeZodSchema} from './resume.schema.js';

const RESUME_GIST_URL =
	'https://gist.githubusercontent.com/thatbeautifuldream/0d70e38808751c8b7b53167303bd7df5/raw/resume.json';

export const fetchResumeData = async (): Promise<TResumeSchema> => {
	try {
		const response = await fetch(RESUME_GIST_URL);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch resume data: ${response.status} ${response.statusText}`,
			);
		}

		const data = await response.json();
		const validatedData = ResumeZodSchema.parse(data);
		return validatedData;
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Error fetching resume data: ${error.message}`);
		} else {
			console.error('Unknown error occurred while fetching resume data');
		}

		// Use fallback data if fetching fails
		return getFallbackResumeData();
	}
};

const getFallbackResumeData = (): TResumeSchema => {
	return {
		meta: {
			theme: 'jsonresume-theme-stackoverflow',
		},
		basics: {
			name: 'Milind Kumar Mishra',
			label: 'Product Engineer',
			email: 'milindmishra4@gmail.com',
			phone: '+919631333128',
			url: 'https://milindmishra.com',
			location: {
				address: 'Zolo Darren, BTM Layout',
				postalCode: '560034',
				city: 'Bengaluru',
				countryCode: 'IN',
				region: 'Karnataka',
			},
			profiles: [
				{
					network: 'LinkedIn',
					username: 'mishramilind',
					url: 'https://linkedin.com/in/mishramilind',
				},
				{
					network: 'GitHub',
					username: 'thatbeautifuldream',
					url: 'https://github.com/thatbeautifuldream',
				},
			],
		},
		work: [
			{
				name: 'Merlin AI by Foyer',
				position: 'Product Engineer',
				url: 'https://getmerlin.in',
				startDate: '2025-02-01',
				location: 'Bengaluru, Karnataka, India',
				highlights: [
					'Shipped UI for ChatGPT Imports enabling users to bring their chat history with ease to Merlin AI.',
					'Shipped pages for chat history flow including project chats.',
					'Revamped AI Model Selector.',
					'Working on Prompt Enhancement feature for merlin chat input from streaming backend to managing stream on the frontend.',
				],
			},
		],
	};
};
