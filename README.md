Dewdrop 🌸

A beauty finder web app with a soft, neutral design. Dewdrop allows shoppers to choose what they are looking for (makeup, skincare, hair care, bras and underwear), continue to a second view, and browse matching products with prices, sale markers, and store locations.

Built by Rejoice Kaulumah as a practice project.

Features
Multi-select category screen with a live selection hint.
Continue button that stays disabled until at least one category is selected.
Results view grouped by selected category.
Product sorting by price.
Filter to show sale items only.
Product cards displaying:
Brand
Product name
Description
Price
Discount
Store and location
Responsive layout.
Light and dark mode.
Keyboard-friendly buttons and navigation.
Fully self-contained application with no build step, server, or external files required.
Files
File	Description
index.html	Contains the entire application, including page structure, styling, logic, and sample product data.
dewdrop.html	An identical copy of index.html under the project name.
README.md	Project documentation and setup instructions.
Run Locally
Download or clone the repository.
Open the downloaded project folder.
Double-click index.html or dewdrop.html.
The application will open directly in your browser.

No installation, build process, or server is required.

Publish on GitHub Pages

To make Dewdrop accessible online using GitHub Pages:

Upload index.html to a public GitHub repository.
Open the repository's Settings.
Navigate to Pages.
Under Build and deployment, select Deploy from a branch.
Select the main branch and / (root) folder.
Click Save.

Your website will be available at:

https://<your-username>.github.io/<repository-name>/

Note: GitHub Pages automatically opens index.html as the default page. The dewdrop.html file can also be accessed directly by adding /dewdrop.html to your website URL.

Editing the Products

The sample product list is located inside the <script> section of index.html, in an array called DATA.

Each product contains the following fields:

Field	Description
c	Product category: makeup, skincare, hair, or lingerie.
b	Product brand.
n	Product name.
d	Product description.
p	Regular price in Namibian dollars (NAD).
off	Discount percentage. Use 0 if there is no discount.
s	Store name.
l	Store location.
id	Unique product ID.

If you make changes to the product data in index.html, make sure to apply the same changes to dewdrop.html so both files remain identical.

Alternatively, you can remove one of the files to avoid maintaining two copies.

Important Note

All product prices, stores, and discounts included in this repository are sample values created for demonstration purposes. They do not represent real products, retailers, or current offers.

A production version of Dewdrop would require a reliable data source, such as retailer partnerships, product APIs, or an automatically updated product feed.

Possible Future Improvements

Some ideas for expanding Dewdrop include:

Connect to a real product API or retailer product feed.
Add a product search feature.
Introduce a wishlist so users can save their favourite products.
Add a store map to help shoppers find products in physical locations.
Include more shopping categories.
Add product images.
Separate the application into HTML, CSS, JavaScript, and JSON files for easier maintenance.

Dewdrop — Making beauty discovery a little easier. 🌷
