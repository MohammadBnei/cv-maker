import type { IContactInfo } from '$lib/component/contact.svelte';
import type { ISkill } from '$lib/component/skill.svelte';
import type { ITitle } from '$lib/component/title.svelte';
import { education } from './education';
import { experience } from './experiences';
import { hobbies, langs } from './langHobbies';

export { experience, education, langs, hobbies };

export const title: ITitle = {
	jobDesc: 'Ingénieur Web'
};

export const contactInfo: IContactInfo = {
	name: 'Chaochao Zhou',
	nationality: 'Nationalité Chinoise',
	phone: '+33 7 81 85 80 18',
	email: 'chaochao.zhou@hotmail.com',
	links: [
		{
			name: 'Github',
			url: 'https://github.com/Chaochao-z',
			type: 'github'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/chaochao-zhou-9a593b199/',
			type: 'linkedin'
		}
	]
};

export const skills: ISkill[] = [
	{
		name: 'golang',
		category: 'backend'
	},
	{
		name: 'nodejs',
		category: 'backend'
	},
	{
		name: 'reactjs',
		category: 'frontend'
	},
	{
		name: 'sveltekit',
		category: 'frontend'
	},
	{
		name: 'sql',
		category: 'data'
	},
	{
		name: 'mongodb',
		category: 'data'
	},
	{
		name: 'kubernetes',
		category: 'devops'
	},
	{
		name: 'docker',
		category: 'devops'
	},
	{
		name: 'gcp',
		category: 'system'
	},
	{
		name: 'linux',
		category: 'system'
	}
];
