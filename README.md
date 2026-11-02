Dewdrop
A beauty finder web app with a soft, neutral design. A shopper chooses what she is looking for (makeup, skincare, hair care, bras and underwear), continues to a second view, and sees matching products with prices, sale markers and the store where each item can be found.

Built by Rejoice Kaulumah as a practice project

Features
Multi-select category screen with a live selection hint and a Continue button that stays disabled until at least one choice is made.
Results view grouped by chosen category, with sorting by price and a sale-items-only filter.
Product cards showing brand, name, description, price, discount and store location.
Responsive layout, light and dark mode, keyboard-friendly buttons.
Works as a single self-contained file: no build step, no server and no external files needed.
Files
File	Role
index.html	The whole app: page structure, styling, logic and the sample product data.
dewdrop.html	An identical copy of index.html under the project name.
README.md	This file.
Run locally
Download the repository and double-click index.html (or dewdrop.html). It opens in your browser and works straight away.

Publish on GitHub Pages
Upload index.html to a public repository.
Go to Settings, then Pages.
Under Source choose "Deploy from a branch", select main and / (root), and save.
The site appears at https://<your-username>.github.io/<repository-name>/.
Note: GitHub Pages only opens a file automatically when it is named index.html. dewdrop.html is reachable at .../dewdrop.html.

Editing the products
The product list sits inside the <script> section of index.html, in an array called DATA. Each product has:

Field	Meaning
c	Category: makeup, skincare, hair or lingerie
b, n, d	Brand, product name, description
p	Regular price in Namibian dollars
off	Discount percentage (0 for none)
s, l	Store and location
id	Unique product id
If you change a product in index.html, make the same change in dewdrop.html so the two copies stay identical, or delete one of them.

Important note
All prices, stores and sales in this repository are sample values created for demonstration. They are not real offers. A production version would need a real data source, such as retailer partnerships or a feed that is kept up to date.

Possible next steps
Connect to a real product API or a retailer feed.
Add search, a wish list and a store map.
Add more categories and product images.
Split the code back into separate HTML, CSS, JS and JSON files for easier maintenance.
