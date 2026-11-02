
# Dewdrop 🌸

A beauty finder web app with a soft, neutral design. A shopper chooses what she is looking for (makeup, skincare, hair care, bras and underwear), continues to a second view, and sees matching products with prices, sale markers, and the store where each item can be found.

**Built by Rejoice Kaulumah as a practice project.**

## Features

- Multi-select category screen with a live selection hint and a Continue button that stays disabled until at least one choice is made.
- Results view grouped by chosen category, with sorting by price and a sale-items-only filter.
- Product cards showing brand, name, description, price, discount, and store location.
- Responsive layout, light and dark mode, and keyboard-friendly buttons.
- Works as a single self-contained file: no build step, no server, and no external files needed.

## Files

| File | Role |
|---|---|
| `index.html` | The whole app: page structure, styling, logic, and sample product data. |
| `dewdrop.html` | An identical copy of `index.html` under the project name. |
| `README.md` | This file. |

## Run Locally

1. Download the repository.
2. Open the project folder.
3. Double-click `index.html` (or `dewdrop.html`).
4. The app opens in your browser and works straight away.

## Publish on GitHub Pages

1. Upload `index.html` to a public repository.
2. Go to **Settings**, then **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Click **Save**.

The site appears at:

`https://<your-username>.github.io/<repository-name>/`

**Note:** GitHub Pages only opens a file automatically when it is named `index.html`. `dewdrop.html` is reachable at `.../dewdrop.html`.

## Editing the Products

The product list sits inside the `<script>` section of `index.html`, in an array called `DATA`.

Each product has:

| Field | Meaning |
|---|---|
| `c` | Category: makeup, skincare, hair, or lingerie. |
| `b` | Brand. |
| `n` | Product name. |
| `d` | Product description. |
| `p` | Regular price in Namibian dollars (NAD). |
| `off` | Discount percentage (`0` for no discount). |
| `s` | Store name. |
| `l` | Store location. |
| `id` | Unique product ID. |

If you change a product in `index.html`, make the same change in `dewdrop.html` so the two copies stay identical, or delete one of them.

## Important Note

All prices, stores, and sales in this repository are sample values created for demonstration. They are not real offers.

A production version would need a real data source, such as retailer partnerships or a product feed that is kept up to date.

## Possible Next Steps

- Connect to a real product API or retailer feed.
- Add search, a wishlist, and a store map.
- Add more categories and product images.
- Split the code back into separate HTML, CSS, JavaScript, and JSON files for easier maintenance.
```
