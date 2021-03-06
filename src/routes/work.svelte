<script>
	import Slideshow from '../components/Slideshow.svelte';

	const resume = [{
		hed: 'Produced Work',
		items: [{
			title: 'Playwright and Post-Production Editor, The Screenlit Series',
			where: 'Match:Lit, NYC',
			when: 'Oct 2020 – Present',
			desc: 'Wrote screenplay and did post-production on a short horror film for the first <a target="_blank" href="https://youtu.be/cQ3LRESHgs4?t=1900">Screenlit Series</a>'
		}, {
			title: 'Playwright, SHOTZ!',
			where: 'AMIOS, NYC',
			when: 'May 2018 – May 2020',
			desc: 'Wrote original short pieces for <em>CryptoSHOTZ</em>, <em>SHOTZ Talks</em>, <em>SHOTZ Madness</em>, <em>Green New SHOTZ</em>, <em>Buffy the Vampire SHOTZ!</em>, <em>SHOTZ Trek</em>, and <em>...And SHOTZ For Something <s>Completely</s> VIRTUALLY Different!</em> festivals'
		}, {
			title: 'Playwright, Drunk 24 and "Site" Specific',
			where: 'Exquisite Corpse Company, Brooklyn',
			when: 'Feb 2020 – May 2020',
			desc: 'Collaborated with other playwrights to create short pieces in 24 hours, including one on Zoom'
		}, {
			title: 'Playwright',
			where: 'All Out Arts, Inc., NYC',
			when: 'Feb 2018 – July 2019',
			desc: 'Wrote a full-length play, <em>Parlor Tricks</em>, which had a developmental reading at South Oxford Space and opened the 17th annual Fresh Fruit Festival, winning four “Fruitie” awards'
		}, {
			title: 'Playwright',
			where: 'Turn to Flesh Productions, NYC',
			when: 'Nov 2018 & June 2019',
			desc: 'Commissioned to write <em>þæt wæs gōd cyning</em> to showcase four femme+ artists as part of the first annual Beyond the Ingenue Festival. Also wrote a monologue, <em>Lachesis</em>, for Cocktails and Classics Festival'
		}, {
			title: 'Playwright',
			where: 'Undiscovered Countries’ Magic Time, NYC',
			when: 'Jan 2019',
			desc: 'Short piece <em>…and that’s how I got burnt</em> performed at Judson Memorial Church'
		}, {
			title: 'Playwright',
			where: 'CAPS LOCK Theatre, NYC',
			when: 'April 2017 & Jan 2019',
			desc: 'Wrote monologues with and for various artists for PUSSYFESTs 4 and 6'
		}]
	}, {
		hed: 'Dramaturgy Experience',
		items: [{
			title: 'Literary Manager, SHOTZ!',
			where: 'AMIOS, NYC',
			when: 'March – May 2018',
			desc: 'Served as dramaturg for multiple festivals of short plays written under specific guidelines'
		}, {
			title: 'Founder and Teacher',
			where: 'P.S. 8 Playwriting Club, Brooklyn',
			when: 'Sept 2016 – June 2017',
			desc: 'Wrote curricula and taught a playwriting and dramaturgy club for children in grades 1-5 which culminated in staged readings of each child’s plays by professional actors'
		}, {
			title: 'Dramaturg',
			where: 'The Inkwell, Washington, DC',
			when: 'Mar 2013 – Jan 2016',
			desc: 'Assisted emerging playwrights in preparing their plays for public staged readings'
		}, {
			title: 'Dramaturgical and Production Intern',
			where: 'Synetic Theater, Washington, DC',
			when: 'Nov 2013 – Jan 2014',
			desc: 'Assisted with production and dramaturgical processes for an experimental theater company'
		}]
	}, {
		hed: 'Narrative Design',
		items: [{
			title: 'Letters From Otherwhere',
			where: 'Co-Designer',
			when: 'June – Aug 2020',
			desc: 'Co-designed and led (with <a href="https://elizabethballou.squarespace.com/#/letters-from-otherwhere/" target="_blank">Elizabeth Ballou</a>) a 10-session, zoom-based game design / playwriting workshop for tweens and teens. It incorporated these academic elements into the narrative of a letter-writing RPG, which we also built for the kids. Want us to run it for you? <a href="#contact">Contact me!</a>'
		}, {
			title: 'Narrative Designer',
			where: '1492 Studios and Ubisoft, NYC',
			when: 'Aug 2019 – Jan 2020',
			desc: 'Wrote the script for a choice-based romance video game for a major studio'
		}]
	}, {
		hed: 'Skills and Interests',
		flatItems: [
			'Proficient in French, with a reading knowledge of Latin, Old English, Medieval French, and Old Norse',
			'Member in good standing of the Dramatists’ Guild',
			'Member of various interdisciplinary writing groups since 2015',
			'M.S. Childhood Special Education from CUNY Hunter College, New York City Teaching Fellowship (2017)',
			'B.A. Medieval Studies from University of Virginia (2012)'
		]
	}]
</script>

<style>
	.resume-section {
		margin: 0 0 40px;
	}
	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
		margin: 20px 0 0;
		padding: 0;
	}

	.item {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
	}

	.title {
		font-weight: 700;
	}

	.where {
		font-weight: 600;
	}

	.when {
		font-style: italic;
	}

	@media screen and (min-width: 1000px) {
		.item {
			margin: 40px 0 0;
			grid-template-columns: 1fr 3fr;
			grid-gap: 5px 40px;
		}

		.title {
			grid-column: 1;
			grid-row: 1;
		}

		.where {
			grid-column: 1;
			grid-row: 2;
		}

		.when {
			grid-column: 1;
			grid-row: 3
		}

		.desc {
			grid-column: 2;
			grid-row: 1 / span 3;
		}
	}
</style>

<svelte:head>
	<title>Work | Charlotte Lang-Bush</title>
	<link rel="canonical" href="http://femmefaust.us/work" />
</svelte:head>

<h1>Work</h1>

<section class="artist-statement">
	<p><strong>I love:</strong> unsolved things, archival research, world-building, queering genre fiction, complicated women+, dalliances with unlikeability, mysteries, the monstrous, magical realism, and the tragedy of ghosts. Learning to be a better intersectional feminist. Constructivism and different brains. Languages in all their twisty graftings and illogical roots. I love humor, games, and the way children tell stories. Consent. Exuberance. Revenge. Punch lines and poptimism.</p>
	<p><strong>I know:</strong> that I’m not done yet. Not even close. I’m always looking for new collaborators who I can learn from and create with. If you want to be one of those people please <a href="#contact">contact me</a>.</p>
</section>

<Slideshow />

<h2>Résumé</h2>

{#each resume as section}
	<section class="resume-section">
		<h3>{section.hed}</h3>
		<ul>
			{#if section.items}
				{#each section.items as item}
					<li class="item">
						<span class="title">{item.title}</span>
						<span class="where">{item.where}</span>
						<span class="when">{item.when}</span>
						<p class="desc">{@html item.desc}</p>
					</li>
				{/each}
			{/if}

			{#if section.flatItems}
				{#each section.flatItems as item}
					<li>{item}</li>
				{/each}
			{/if}
		</ul>
	</section>
{/each}
