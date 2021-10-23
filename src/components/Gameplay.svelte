<script lang="ts">
  export let points1 = 0;
  export let points2 = 0;
  export let streak1 = 0;
  export let streak2 = 0;
  export let sp1 = 0;
  export let sp2 = 0;
  $: mult1 = 1 + (Math.min(30, streak1) / 10) >> 0;
  $: mult2 = 1 + (Math.min(30, streak2) / 10) >> 0;
  export let pick: any = {
    picker: 1,
    song: {}
  };
</script>

<div class="gameplay">
  {#if pick.song.cat}
    <div class={`pick p${pick.picker}`} style={pick.song.fontSize ? `font-size:${pick.song.fontSize}` : ''}>
      [{pick.song.cat}] {pick.song.artist} - {pick.song.name} ({pick.song.charter})
    </div>
  {:else}
    <div class="pick">&nbsp;</div>
  {/if}
  <div class="players">
    <div class="player1">
      <div class="pfill" style={`width:${Math.min(100, Math.max(0, (points1-points2)/1000))}%`}></div>
      <div class="points">{points1}</div>
      <div class="distance">{points1 >= points2 ? '+'+(points1-points2) : ''}</div>
      <div class="combo">
        <div class="streak">{streak1}</div>
        <div class={`multiplier x${mult1}`}><small>x</small>{mult1}</div>
      </div>
      <div class="sp">
        <div class="spfill" style={`width:${sp1}%`}></div>
        <div class="spvalue">{sp1.toFixed(2)}%</div>
      </div>
    </div>
    <div class="player2">
      <div class="pfill" style={`width:${Math.min(100, Math.max(0, (points2-points1)/1000))}%`}></div>
      <div class="points">{points2}</div>
      <div class="distance">{points2 >= points1 ? '+'+(points2-points1) : ''}</div>
      <div class="combo">
        <div class="streak">{streak2}</div>
        <div class={`multiplier x${mult2}`}><small>x</small>{mult2}</div>
      </div>
      <div class="sp">
        <div class="spfill" style={`width:${sp2}%`}></div>
        <div class="spvalue">{sp2.toFixed(2)}%</div>
      </div>
    </div>
  </div>
</div>

<style>
  .gameplay {
    margin-top: 4em;
  }
  .pick {
    margin-bottom: 2em;
    text-align: center;
    position: relative;
  }
  .pick.p1::before {
    content: '◄ ';
    color: #e91e63;
    margin-left: -1.3em;
  }
  .pick.p2::after {
    content: ' ►';
    color: #03a9f4;
    margin-right: -1.3em;
  }

  .players {
    display: flex;
  }
  .player1, .player2 {
    flex: 1;
    position: relative;
  }
  .player1 {
    padding-right: 1em;
    border-top: 2px solid #e91e6391;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .player2 {
    padding-left: 1em;
    border-top: 2px solid #03a9f491;
  }

  .points {
    font-size: 2.5em;
  }
  .distance {
    font-size: 1.25em;
    opacity: .8;
    position: absolute;
    top: -1.5em;
  }

  .pfill {
    position: absolute;
    height: .5em;
    top: -5px;
  }
  .player1 .pfill {
    background: #e91e63;
    right: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .player2 .pfill {
    background: #03a9f4;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .combo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .player2 .combo {
    flex-direction: row-reverse;
  }
  .multiplier {
    text-align: center;
    width: 2em;
    border-radius: 10px;
  }
  .multiplier small {
    font-size: .6em;
  }
  .streak {
    margin: 0 .5em;
  }

  .player1 .multiplier {
    background: #e91e63;
    border: 2px solid #e91e63;
  }
  .player1 .multiplier.x1 {
    background: #e91e6333;
  }
  .player1 .multiplier.x2 {
    background: #e91e6366;
  }
  .player1 .multiplier.x3 {
    background: #e91e6399;
  }
  .player1 .multiplier.x4 {
    background: #e91e63cc;
  }

  .player2 .multiplier {
    background: #03a9f4;
    border: 2px solid #03a9f4;
  }
  .player2 .multiplier.x1 {
    background: #03a9f433;
  }
  .player2 .multiplier.x2 {
    background: #03a9f466;
  }
  .player2 .multiplier.x3 {
    background: #03a9f499;
  }
  .player2 .multiplier.x4 {
    background: #03a9f4cc;
  }

  .sp {
    margin: .5em 0;
    font-size: .8em;
    width: 10em;
    height: 1.5em;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .spfill {
    z-index: 1;
    height: 100%;
    position: absolute;
  }
  .spvalue {
    z-index: 2;
    position: absolute;
    opacity: .8;
  }
  .player1 .spfill {
    background: #e91e63cc;
    right: 0;
  }
  .player2 .spfill {
    background: #03a9f4cc;
    left: 0;
  }
  .player1 .spvalue {
    right: .5em;
  }
  .player2 .spvalue {
    left: .5em;
  }
</style>