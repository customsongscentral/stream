<script lang="ts">
  export let songs = [
		{ cat: 'Solo', artist: 'Vitalij Kuprij', name: 'Track on Fire', charter: 'xX760Xx & Miscellany', source: 'CTH1R' },
		{ cat: 'Solo', artist: 'xi', name: 'Freedom Dive', charter: 'CyclopsDragon', source: 'Personal' },
		{ cat: 'Solo', artist: 'Chaotrope', name: 'Chiasm 2018', charter: 'Jackie', source: 'AH1' },
		{ sep: true },
		{ cat: 'Strum', artist: 'Dr. Living Dead!', name: 'Cosmic Conqueror', charter: 'Miscellany', source: 'Exclusive' },
		{ cat: 'Strum', artist: 'Tommy Emmanuel', name: 'Tall Fiddler (Live)', charter: 'Jackie', source: 'FP2' },
		{ cat: 'Strum', artist: 'The Fall of Troy', name: 'Laces Out, Dan! (125%)', charter: 'xX760Xx', source: 'TFoTH+' },
		{ sep: true },
		{ cat: 'Hybrid', artist: 'Berried Alive', name: 'God Jammit (110%)', charter: 'CyclopsDragon', source: 'Personal' },
		{ cat: 'Hybrid', artist: 'Paul Gilbert', name: 'Fuzz Universe (125%)', charter: 'jdurandTV', source: 'CTH2' },
		{ cat: 'Hybrid', artist: 'NOISIA', name: 'Groundhog (Beat Juggle) (115%)', charter: 'Aren Eternal', source: 'CB', fontSize: '16px' },
		{ cat: 'Hybrid', artist: 'Jonas Hellborg, Lane, Sipe', name: 'Rice with the Angels', charter: 'Chemfinal', source: 'AH1' },
    { sep: true },
		{ cat: 'Boss (solo)', artist: 'Instant Reality', name: 'Deluge', charter: 'Supradyke', source: '2020-03' },
		{ cat: 'Boss (strum)', artist: 'Meshuggah', name: 'War', charter: 'Miscellany', source: 'Exclusive' },
		{ sep: true },
		{ cat: 'Tiebreaker (solo)', artist: 'Liquid Tension Experiment', name: 'Universal Mind', charter: 'OHM', source: 'ZG' },
		{ cat: 'Tiebreaker (strum)', artist: 'Thousand Sun Sky', name: 'Reclaimers (feat. Aeon Bridge)', charter: 'EvaCH', source: 'AH:BE' },
		{ cat: 'Tiebreaker (hybrid)', artist: 'Scar Symmetry', name: 'Deviate From The Form', charter: 'Captaintoasty', source: 'CTH2' },
  ];
  export let bans = [
    { picker: 1, song: songs[4] },
    { picker: 2, song: songs[1] }
  ];
  export let picks = [
    { picker: 1, song: songs[0] },
    { picker: 2, song: songs[5], winner: 2 }
  ];
  export let tiebreaker;
</script>

<div class="songs">
  <div class="song">
    <div class="cat"><b>Focus</b></div>
    <div class="title"><b>Song</b></div>
    <div class="charter"><b>Charter</b></div>
    <div class="source"><b>Source</b></div>
  </div>
  <div class="separator" />
  {#each songs as song}
    {#if song.sep}
      <div class="separator" />
    {:else}
      <div class="song">
        {#each bans as ban}
          {#if ban.song.name == song.name}
            <div class={`ban p${ban.picker}`} />
          {/if}
        {/each}
        {#each picks as pick}
          {#if pick.song.name == song.name}
            <div class={`pick p${pick.picker} w${pick.winner}`} />
          {/if}
        {/each}
        {#if song.cat == `Tiebreaker (${tiebreaker})`}
          <div class="tb" />
        {/if}
        <div class="cat">{@html song.cat}</div>
        <div class="title" style={song.fontSize ? `font-size:${song.fontSize}` : ''}>{@html song.artist} - {@html song.name}</div>
        <div class="charter">{@html song.charter}</div>
        <div class="source">{@html song.source}</div>
      </div>
    {/if}
  {/each}
</div>

<style>
  @keyframes appear {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    8% {
      opacity: 1;
      transform: scaleX(1.1);
    }
    20% {
      opacity: 1;
      transform: scaleX(1);
    }
    30% {
      opacity: .5;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: .5;
    }
    80% {
      opacity: 1;
    }
    90% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }

  .songs {
    font-size: 18px;
    text-align: center;
    margin: 2em 50px;
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid #fff;
  }
  .song {
    position: relative;
    display: flex;
    margin: .5em;
  }

  .ban {
    position: absolute;
    left: 0;
    top: 9px;
    right: 0;
    bottom: 9px;
    z-index: 1;
  }
  .ban::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 5px;
  }
  .ban.p1 {
    background: #e91e63bb;
    left: -20px;
  }
  .ban.p1::after {
    border: 2px solid #e91e63;
    background: #e91e63;
    left: -17px;
    top: -7px;
  }
  .ban.p2 {
    background: #03a9f4bb;
    right: -20px;
  }
  .ban.p2::after {
    border: 2px solid #03a9f4;
    background: #03a9f4;
    right: -17px;
    top: -7px;
  }

  .pick {
    font-size: 14px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  /* please forgive me future self for this atrocity */
  .pick.wundefined {
    animation: appear 5s ease-in-out;
  }
  .pick::after {
    content: '';
    background: #000;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 5px;
  }
  .pick.p1 {
    background: #e91e6344;
    left: -42px;
  }
  .pick.p1::after {
    border: 2px solid #e91e63;
    left: 5px;
    top: 2px;
    z-index: 1;
  }
  .pick.p1.w1::before {
    color: #f48fb1;
    content: '✓';
    position: absolute;
    left: 9px;
    top: 1px;
    z-index: 2;
  }
  .pick.p1.w2::before {
    color: #81d4fa;
    content: '✗';
    position: absolute;
    left: 9px;
    top: 0;
    z-index: 2;
  }
  .pick.p2 {
    background: #03a9f444;
    right: -42px;
  }
  .pick.p2::after {
    border: 2px solid #03a9f4;
    right: 5px;
    top: 2px;
    z-index: 1;
  }
  .pick.p2.w1::before {
    color: #f48fb1;
    content: '✗';
    position: absolute;
    right: 9px;
    top: 0;
    z-index: 2;
  }
  .pick.p2.w2::before {
    color: #81d4fa;
    content: '✓';
    position: absolute;
    right: 9px;
    top: 1px;
    z-index: 2;
  }

  .tb {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #aaa;
  }

  .cat {
    width: 240px;
  }
  .title {
    width: 580px;
  }
  .title[style^="font"] {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .charter {
    width: 270px;
  }
  .source {
    width: 120px;
  }
</style>