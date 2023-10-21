import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [

	{
		enterprise: 'VSM',
		position: "Développeur web / Chef d'équipe",
		description: `VSM Véhicule sur mesure, La 1ère plateforme automobile à Asnières/Gennevilliers.<a href="https://www.vehiculesurmesure.fr/" class="link ml-4"><img src="https://voconsteroid.com/voconsteroidLogoNT384.png" alt="voconsteroid" class="inline w-10" /> vehiculesurmesure.fr</a>`,
		startDate: new Date('2021-11-01'),
		endDate: new Date('2023-10-01'),
		missions: [
			{
				title: 'Création site pour VSM',
				description: `Créer le site web pour VSM en utilisant Symfony.`,
				skills: [
					{ name: 'Symfony', category: 'backend', },
					{ name: 'BootStrap', category: 'frontend', },
				]
			},
			{
				title: 'Amélioration CMS.',
				description: `Créér des mini fonctionnalité`,
				skills: [
					{ name: 'json', category: 'backend' },
				]
			},

		]
	},

	{
		enterprise: 'AC6',
		position: 'Développeur Web / Full Stack',
		startDate: new Date('2020-10-01'),
		endDate: new Date('2021-09-01'),
		description: `AC6 est une société établie en proche région parisenne, France. AC6 offre une gamme complète de services allant de la formation au support et conseils techniques pour systèmes à base d'électronique embarquée. Les outils de développement ont récemment été ajoutés pour offrir un service complet aux développeurs d'électronique. Nos partenaires incluent STMicroelectronics, Freescale, Microsoft et Lauterbach.`,
		missions: [
			{
				title: 'Amélioration du site AC6.',
				description: `Le site Ac6 a été crée dans le année 90, ma mission est d'améliorer le front pour que le site soit moderne.`,
				skills: [
					{ name: 'php', category: 'backend' },
					{ name: 'symfony', category: 'backend' },
					{ name: 'twig', category: 'frontend' },
					{ name: 'css', category: 'frontend' },
					{ name: 'sass', category: 'frontend' },
				],
				snapshot: true
			},
			{
				title: 'Création site web AC6 TOOLS',
				description: `Création site pour les outils de AC6 en wordpress`,
				skills: [
					{ name: 'wordpress', category: 'other' },
				],
				snapshot: true
			},
			{
				title: 'Développer des mini Applications',
				description: `Développer des applications en interne pour résoudre les besoins des collègues`,
				skills: [{ name: 'Javascript', category: 'backend' }],
				snapshot: true
			},
		]
	},
	{
		enterprise: 'FDV Partner',
		position: 'Support Informatique',
		startDate: new Date('2019-12-01'),
		endDate: new Date('2020-02-01'),
		description: `FDV Partner,spécialiste des ventes BtoB complexes en France et à l’étranger`,
		missions: [
			{
				title: 'Développement',
				description: `Création Site pour la gestion des Clients`,
				skills: [
					{ name: 'php', category: 'backend' },
					{ name: 'html', category: 'frontend' },
					{ name: 'css', category: 'frontend' }
				],
				snapshot: true
			},
			{
				title: 'Support Informatique',
				description: `Résoudre tous les problèmes lies au PC. `,
				skills: [
					{ name: 'Mac OS', category: 'system' },
					{ name: 'Linux', category: 'system' },
					{ name: 'Windows', category: 'system' },
				],
				snapshot: true
			},
			{
				title: 'Support Office 365',
				description: `Résoudre tous les problèmes et solution pour l'amélioration lies au Excel, Word, PowerPoint etc ..`,
				skills: [
					{ name: 'Word', category: 'other' },
					{ name: 'Excel', category: 'other' },
					{ name: 'PowerPoint', category: 'other' },
					{ name: 'Teams', category: 'other' }
				],
				snapshot: true
			}
		]
	}
];
