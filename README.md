# Vortec location page template mockup

Open `index.html` in a browser. Melbourne is the worked example. The page targets buyers of Vortec hydroseeders and erosion control equipment, including contractors, councils and civil teams.

## Preview deployment

The [public repository](https://github.com/Lilmonstersam/vortec-location-pages) deploys its `main` branch to [GitHub Pages](https://lilmonstersam.github.io/vortec-location-pages/) through `.github/workflows/deploy.yml`. Pages must use **GitHub Actions** as the build and deployment source. The workflow checks JavaScript syntax and local asset paths, then publishes only `index.html`, `style.css`, `script.js`, `.nojekyll` and `assets/`.

The preview retains `noindex, nofollow`. The equipment quote popup prepares an email draft; it is not connected to a live form endpoint. Product and case study links lead to Vortec's published site.

The visual reference is `../hydromulching-services/index.html`: Rubik typography, `#FE5002` orange, `#202322` charcoal, `#F7F7F5` and `#ECE8E1` section backgrounds, a compact photographed title bar, a dark “On this page” strip, square bordered cards and orange left-rule panels. The title image is copied from that reference mockup. Styles live in `style.css`.

## Before producing a location page

1. Replace the city and region in the title, meta description, H1, eyebrow, body copy, FAQs and breadcrumb. Adapt the page copy to genuine project conditions for that market; do not just swap the city name.
2. Keep equipment sales as the page's primary purpose. Contractors are a buyer group, alongside councils and other project teams. Describe civil construction, roadworks, landscaping and rehabilitation as uses for customer-owned machinery.
3. Confirm product models, specifications, current imagery and destinations before publishing. The seven-card product grid follows Vortec's published hydroseeder range; product links lead to the relevant model pages.
4. Use a locally verified case study if one exists. The six stories in this example are labelled by project type and organisation. Do not imply they took place in Melbourne unless the linked source confirms it.
5. Resolve the live URL strategy before publishing: at the time of this mockup, `/hydroseeders-melbourne/` redirects to `/hydroseeders/`. Give any new location page its own final URL and self-referencing canonical, and remove `noindex, nofollow` only when ready to index.
6. Connect the popup to Vortec's production product quote form before publishing. Its fields follow the [VR600 pricing request form](https://vortecglobal.com/product/hydroseeders-vr600/): first and last name, email, phone, product, address, business type and message. This static mockup opens a prefilled email draft to `sales@vortecglobal.com`; the visitor must send it from their mail app.

The case studies sit in a horizontally scrollable row with fixed-height cards, visible scrollbar and previous/next buttons. The page has no build step.

The seven product cards use the updated transparent PNGs supplied in `../../images/products`, copied into this mockup's `assets` directory. Every image sits in the same fixed-height, centred panel and scales to fit without cropping.

## Published source pages used

- [Hydroseeder range](https://vortecglobal.com/hydroseeders/)
- [VR600 product and pricing request form](https://vortecglobal.com/product/hydroseeders-vr600/)
- [Fulton Hogan case study](https://vortecglobal.com/fulton-hogan-vx2000-hydroseeder/)
- [NACAP case study](https://vortecglobal.com/nacap-erosion-control-case-study/)
- [The Regenerative case study](https://vortecglobal.com/vx2000-hydroseeder-case-study-regenerative/)
- [Ground Tamers case study](https://vortecglobal.com/ground-tamers-vx2000-hydromulcher-review/)
- [Lawn & Order case study](https://vortecglobal.com/hydroseeding-lawns-case-study/)
- [7 Mile Beach case study](https://vortecglobal.com/worlds-1-hydroseeder-vx2000-case-study/)

This is a static, `noindex` review artifact with local assets.
