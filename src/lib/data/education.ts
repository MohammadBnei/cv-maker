import type { IEducation } from '$lib/component/education.svelte';

export const education: IEducation[] = [
	// {
	// 	level: 'DUT',
	// 	title: 'DUT GEII (Génie électrique et informatique industrielle)',
	// 	school: 'IUT Lyon 1',
	// 	startDate: new Date('2013-09-01'),
	// 	endDate: new Date('2015-07-01'),
	// 	description: `Acquisition de connaissances en mathématiques, physique, électricité, électronique et robotique.`,
	// 	skills: [
	// 		{ name: 'mathématiques', category: 'science', color: 'gray' },
	// 		{ name: 'physique', category: 'science', color: 'gray' },
	// 		{ name: 'électricité', category: 'science', color: 'gray' },
	// 		{ name: 'électronique', category: 'science', color: 'gray' },
	// 		{ name: 'robotique', category: 'science', color: 'gray' }
	// 	]
	// },
	// {
	// 	startDate: new Date('2016-09-01'),
	// 	endDate: new Date('2017-07-01'),
	// 	level: '',
	// 	title: 'Flânerie',
	// 	school: '',
	// 	description: `Occupation de divers postes : serveur, technicien informatique, ouvrier dans le BTP. Acquisition d'une éthique du travail, de compétences en relation client et de rigueur.`,
	// 	skills: [
	// 		{ name: 'relation client', category: 'other', color: 'gray' },
	// 		{ name: 'rigeur', category: 'other', color: 'gray' }
	// 	]
	// },
	{
		level: 'MASTER Ingénierie du web',
		title: 'RNCP niveau I ',
		school: 'ESGI - Paris',
		startDate: new Date('2021-09-01'),
		endDate: new Date('2023-07-01'),
		description: `Formation intensive en NodeJS, React, Python, Flutter et Kotlin. Apprentissage de la gestion de bases de données SQL et NoSQL et de la méthodologie Agile.`,
		skills: [
			{ name: 'nodejs', category: 'frontend' },
			{ name: 'Api Platform', category: 'backend' },
			{ name: 'NestJS', category: 'backend' },
			{ name: 'Typescript', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'flutter', category: 'frontend' },
			{ name: 'Vuejs', category: 'frontend' },
			{ name: 'sql', category: 'data' },
			{ name: 'nosql', category: 'data' },
			{ name: 'MondoDB', category: 'data' },
			{ name: 'git', category: 'other' },
			{ name: 'agile', category: 'other' }
		]
	},
	{
		level: 'LICENCE Ingénierie du web',
		title: 'RNCP niveau II ',
		school: 'ESGI - Paris',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2021-09-01'),
		description: `Formation avancée en PHP.`,
		skills: [
			{ name: 'php', category: 'backend' },
			{ name: 'Laravel', category: 'backend' },
			{ name: 'Symfony', category: 'backend' },
			{ name: 'docker', category: 'devops' },
			{ name: 'nodejs', category: 'frontend' },
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'vuejs', category: 'frontend' },
			{ name: 'sdk', category: 'devops' },
			{ name: 'aws', category: 'devops' },
			{ name: 'git', category: 'other' },
			{ name: 'sql', category: 'data' },
			{ name: 'linux', category: 'devops' },
			{ name: 'agile', category: 'other' },
			{ name: 'Marketing digital', category: 'other' },
			{ name: 'Wordpress', category: 'other' }
		]
	},
	{
		level: 'BTS SIO',
		title: 'RNCP niveau III',
		school: 'Lycée Turgot - Paris',
		startDate: new Date('2018-09-01'),
		endDate: new Date('2020-07-01'),
		description: `BTS SIO Services Infomatiques aux organisations option SLAM solutionslogicielles et applications métiers`,
		skills: [
			{ name: 'html', category: 'frontend' },
			{ name: 'css', category: 'frontend' },
			{ name: 'c++', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'php', category: 'backend' },
			{ name: 'sql', category: 'data' },
			{ name: 'linux', category: 'devops' },
		]
	}
];
