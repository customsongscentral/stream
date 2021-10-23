<script lang="ts">
	import Players from './components/Players.svelte';
	import Songs from './components/Songs.svelte';
	let p1, p2, s1, s2, win, songs, bans, picks, tiebreaker;

	const ws = new WebSocket(`ws://arcturus.fightthe.pw:3000`);
	const onMessage = msg => {
		const data = JSON.parse(msg.data);
		localStorage.setItem('data', msg.data);
		p1 = data.player1;
		p2 = data.player2;
		s1 = data.matchScore[1];
		s2 = data.matchScore[2];
		win = data.winCondition;
		songs = data.songs;
		bans = data.bans;
		picks = data.picks;
		tiebreaker = data.tiebreaker;
	};
	ws.onmessage = onMessage;

	const local = localStorage.getItem('data');
	if (local) onMessage({ data: local });
</script>

<main>
	<Players {p1} {p2} {s1} {s2} {win} />
	<Songs {songs} {bans} {picks} {tiebreaker} />
</main>

<style>
	main {
    width: 1300px;
		margin: auto;
	}
</style>