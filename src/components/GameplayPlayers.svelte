<script lang="ts">
  export let p1 = 'gaebpls';
  export let p2 = 'Miscellany';
  export let s1 = 2;
  export let s2 = 3;
  export let win = 4;
  let t = [];
  $: t = new Array(win).fill(0).map((_, i) => i+1);
  // <img class="logo" src="https://cdn.discordapp.com/attachments/805873759315165274/813163243266244678/a.png" alt="" />
</script>

<div class="players">
  <div class="player1">
    <div class="s1">
      {#each t as i}
        {#if s1 < i}
          <div class="s" />
        {:else}
          <div class="s fill" />
        {/if}
      {/each}
    </div>
    <div class="p1">{p1}</div>
  </div>
  <div class="player2">
    <div class="s2">
      {#each t as i}
        {#if s2 < i}
          <div class="s" />
        {:else}
          <div class="s fill" />
        {/if}
      {/each}
    </div>
    <div class="p2">{p2}</div>
  </div>
</div>

<style>
  .players {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin-top: -6.1em;
  }
  .player1, .player2 {
    flex: 1;
    align-items: center;
  }
  .player1 {
    justify-content: flex-end;
  }
  .s1, .s2 {
    display: flex;
    margin-bottom: .25em;
  }
  .s1 {
    flex-direction: row;
  }
  .s2 {
    flex-direction: row-reverse;
    text-align: right;
  }
  .s {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 1em;
    height: 1em;
    margin: 0 .125em;
  }
  .s1 .fill {
    background: #e91e63;
  }
  .s2 .fill {
    background: #03a9f4;
  }
  .p1 {
    color: #e91e63;
  }
  .p2 {
    color: #03a9f4;
    text-align: right;
  }
</style>