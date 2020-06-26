<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

  figure,
  img {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script>
  import Text from "./Text.svelte";
  import Inner from "./Inner.svelte";
  import { onMount } from "svelte";
  import { hoge } from "./hoge";

  export let name;
  const text = "hogehoge";
  let count = 0;
  let value = {
    name: "hgoehoge",
  };

  let photos = [];

  onMount(async () => {
    photos = await hoge();
  });
  function handleClick() {
    count += 1;
  }
  $: if (count === 5) {
    alert("おいーーーーーーー");
  }
  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Text text="text" />
  <button on:click="{handleClick}">{count}</button>
  <Inner on:message="{handleMessage}" />
  <input bind:value="{value.name}" placeholder="enter your name" />
  <p>Hello {value.name || 'stranger'}!</p>
  <div class="photos">
    {#each photos as photo}
      <figure>
        <img src="{photo.thumbnailUrl}" alt="{photo.title}" />
        <figcaption>{photo.title}</figcaption>
      </figure>
    {:else}
      <!-- this block renders when photos.length === 0 -->
      <p>loading...</p>
    {/each}
  </div>
</main>
