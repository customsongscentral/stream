# Stream

This is what has been used for OBS browser sources for tournament streaming.
Warning: crusty.

[Download gameplay HTML file, and launch the file locally on your browser/use directly as OBS browser source local file (sample, actual Bastion setup below)](https://raw.githubusercontent.com/customsongscentral/stream/main/docs/gameplay.html)

[Download setlist HTML file, and launch the file locally on your browser/use directly as OBS browser source local file (sample, actual Bastion setup below)](https://raw.githubusercontent.com/customsongscentral/stream/main/docs/setlist.html)

Remember you can adjust the size of your OBS browser source: 1600x900 for `setlist.html` and 1000x300 for `gameplay.html` works as a starter, but do fiddle with it a little bit more yourself.

## Quickstart

`yarn` to install dependencies

`cp .env.example .env`, fiddle with the env vars according to your [Bastion](https://github.com/customsongscentral/bastion) settings

`yarn build` to build `./docs/gameplay.html` and `./docs/setlist.html`

Share the files to your streamers

## Notes

While you could technically host the HTML online, the `ws://` calls to Bastion won't work because of cross-domain shenanigans.
Running the `index.html` file locally is actually a workaround that allows us to perform those `ws://` calls (this is so cursed).

In a way, this is somewhat more secure because you're not hosting the server credentials online (because yea, with this building process,
the passwords are embedded in the `index.html`). This is a fucked up model anyways, but it works for all intents and purposes :shrug: