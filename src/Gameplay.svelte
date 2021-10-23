<script lang="ts">
	import Players from './components/GameplayPlayers.svelte';
	import Gameplay from './components/Gameplay.svelte';
	let p1: string, p2: string, s1: number, s2: number, pick: any, win: number;
	let points1: number, streak1: number, sp1: number, points2: number, streak2: number, sp2: number;

	const ws = new WebSocket(`ws://arcturus.fightthe.pw:3000`);
	const onMessage = msg => {
		if (msg.data[0] == '{') {
			const data = JSON.parse(msg.data);
			localStorage.setItem('data', msg.data);
			p1 = data.player1;
			p2 = data.player2;
			s1 = data.matchScore[1];
			s2 = data.matchScore[2];
			pick = data.picks.pop();
			win = data.winCondition;
		} else if (msg.data.startsWith('game')) {
			const [, p, points, streak, sp] = msg.data.split(' ');
			if (p != 0 && p != 1) return;
			const player = location.search == '?reverse' ? (p == 0 ? 1 : 0) : p;
			if (player == 0) {
				points1 = +points;
				streak1 = +streak;
				sp1 = +sp;
			} else if (player == 1) {
				points2 = +points;
				streak2 = +streak;
				sp2 = +sp;
			}
		}
	};
	ws.onmessage = onMessage;

	const local = localStorage.getItem('data');
	if (local) onMessage({ data: local });
</script>

<main>
	<Gameplay {points1} {points2} {streak1} {streak2} {sp1} {sp2} {pick} />
	<Players {p1} {p2} {s1} {s2} {win} />
</main>

<style>
	main {
    width: 100%;
		margin: auto;
	}
</style>