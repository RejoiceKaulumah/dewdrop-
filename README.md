# Dewdrop

A beauty finder web app with a soft, neutral design. A shopper chooses what she is looking for (makeup, skincare, hair care, bras and underwear), continues to a second view, and sees matching products with prices, sale markers and the store where each item can be found.

Built by Rejoice Kaulumah as a practice project

## Features

- Multi-select category screen with a live selection hint and a Continue button that stays disabled until at least one choice is made.
- Results view grouped by chosen category, with sorting by price and a sale-items-only filter.
- Product cards showing brand, name, description, price, discount and store location.
- Product data loaded with `fetch` from a JSON feed, the same way a real API would be called.
- Responsive layout, light and dark mode, keyboard-friendly buttons.

## Files

| File | Role |
| --- | --- |
| `index.html` | Page structure for the selection view and the results view. |
| `style.css` | Styling and the light and dark colour themes. |
| `app.js` | Selection logic, API call, sorting, filtering and rendering. |
| `data/products.json` | The product feed (sample data). |

## Run locally

The page loads `data/products.json` with `fetch`, so open it through a web server and not by double-clicking the file.

- With Python: run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.
- With VS Code: use the Live Server extension.

## Publish on GitHub Pages

1. Create a public repository and upload all files, keeping the `data` folder.
2. Go to Settings, then Pages.
3. Under Source choose "Deploy from a branch", select `main` and `/ (root)`, and save.
4. The site appears at `https://<your-username>.github.io/<repository-name>/`.

## Data format

Each product in `data/products.json` has:

| Field | Meaning |
| --- | --- |
| `c` | Category: `makeup`, `skincare`, `hair` or `lingerie` |
| `b`, `n`, `d` | Brand, product name, description |
| `p` | Regular price in Namibian dollars |
| `off` | Discount percentage (0 for none) |
| `s`, `l` | Store and location |

## Important note

All prices, stores and sales in this repository are sample values created for demonstration. They are not real offers. A production version would need a real data source, such as retailer partnerships or a feed that is kept up to date.

## Possible next steps

- Connect to a real product API or a retailer feed.
- Add search, a wish list and a store map.
- Add more categories and product images.
