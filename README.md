# 911 GT3 RS: scroll-driven 3D concept page

A minimal, luxury-styled single page where scrolling plays a short film: the car arrives, the camera pushes in on the wing and brakes, the whole car explodes into its parts, labels appear, and it rebuilds. The scroll bar doubles as a rev counter, from 0 to 9,000 rpm.

Built with Vite, three.js and Lenis. No framework.

This is an unofficial concept page. It is not affiliated with or endorsed by Porsche. Porsche and 911 are trademarks of Dr. Ing. h.c. F. Porsche AG.

## Run locally

```bash
npm install
npm run dev
```

Open the Local link. Use the Network link to test on a phone on the same Wi-Fi.

URL option: `?debug` gives a free orbit camera (`C` prints the camera for the cue table, `E` toggles the explode).

## Deploy to GitHub Pages

1. Create a repository and push this folder to the `main` branch.
2. In the repository, open **Settings, Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it at `https://USERNAME.github.io/REPOSITORY/`.

The Vite `base` is `./`, so it works on a project page or a custom domain without changes.

## Customise

| What | Where |
| --- | --- |
| Camera shots, explode timing | `CUES` in `src/main.js` |
| How each part flies apart | `RULES` in `src/main.js` |
| Parts to hide, label text | `HIDE`, `LABELS` in `src/main.js` |
| Copy and specs | `index.html` |
| Colours and fonts | `src/style.css` |

Console helpers (F12): `gt3.hide(/regex/i)`, `gt3.show(/regex/i)`, `gt3.paint('#d5001c')`.

## Make the model lighter

The model in `public/models/porsche.glb` is about 19 MB. For faster loading, especially on phones:

```bash
npx @gltf-transform/cli optimize public/models/porsche.glb public/models/porsche-small.glb --compress meshopt --texture-compress webp --texture-size 2048 --join false --flatten false
```

Then point `modelUrl` in `src/main.js` to `porsche-small.glb`.

## Credits

- 3D model: "Porsche 911 Gt3 Rs" by [musiss](https://sketchfab.com/musiss), [Sketchfab](https://sketchfab.com/3d-models/porsche-911-gt3-rs-73a595bff7d5498fa1891c4a78787d26), licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). The model was repackaged into a single GLB; no other changes were made to it.
- Font: [Archivo](https://fonts.google.com/specimen/Archivo), SIL Open Font License.
- Facts: Porsche press materials and automotive press. Check them before publishing anything commercial.

## License

Code: MIT (see `LICENSE`). 3D model: CC BY 4.0 (see above).
