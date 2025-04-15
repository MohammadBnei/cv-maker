// Filename : langHobbies.ts
import type { IHobby } from '$lib/component/hobby.svelte';
import type { ILang } from '$lib/component/lang.svelte';

export const langs: ILang[] = [
	{
		name: 'French',
		codes: [
			'bi',
			'bf',
			'bj',
			'bl',
			'ca',
			'cd',
			'cf',
			'cg',
			'ch',
			'ci',
			'cm',
			'dj',
			'fr',
			'ga',
			'gf',
			'gn',
			'gp',
			'gq',
			'ht',
			'km',
			'lu',
			'mc',
			'mg',
			'ml',
			'mq',
			'nc',
			'ne',
			'pf',
			'pm',
			're',
			'rw',
			'sc',
			'sn',
			'td',
			'tg',
			'vu',
			'wf',
			'yt'
		],
		comment: 'native language'
	},
	{
		name: 'English',
		codes: [
			'ag',
			'ai',
			'au',
			'bb',
			'bd',
			'bs',
			'bz',
			'ca',
			'dm',
			'fj',
			'gb',
			'gd',
			'gh',
			'gm',
			'gy',
			'ie',
			'in',
			'jm',
			'ke',
			'ki',
			'kn',
			'lc',
			'lr',
			'ls',
			'mg',
			'mh',
			'mt',
			'mu',
			'mw',
			'na',
			'ng',
			'nr',
			'nz',
			'pg',
			'ph',
			'pk',
			'sb',
			'sc',
			'sg',
			'sl',
			'ss',
			'sz',
			'tc',
			'to',
			'tt',
			'tv',
			'tz',
			'ug',
			'us',
			'vc',
			'vg',
			'vi',
			'vu',
			'ws',
			'za',
			'zm',
			'zw'
		],
		comment: 'bilingual'
	},
	{
		name: 'Persian',
		codes: ['af', 'ir', 'tj'],
		comment: 'spoken'
	}
];

export const hobbies: IHobby[] = [
	{
		"name": "Boxing (English & Thai)",
		"comment": "Cultivates discipline, strategic thinking, and resilience",
		"svg": "/boxing-glove.svg"
	},
	{
		"name": "Reading",
		"comment": "Enhances analytical thinking and communication skills.",
		"svg": "/reading.svg"
	}
];
