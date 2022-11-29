<script lang="ts">
	import Officer from './officer.svelte';
	export let department: string;
	export let officers: {
		[name: string]: { profile: string; nickname: string; link?: string; role: string };
	};
</script>

<h2>{department}</h2>
<div class="sep" />
<table class="department" style="width:100%">
	<tbody>
		{#each Object.entries(officers) as [name, info]}
			<Officer
				{name}
				profile={info.profile}
				nickname={info.nickname}
				link={info.link}
				role={info.role}
			/>
		{/each}
	</tbody>
</table>
