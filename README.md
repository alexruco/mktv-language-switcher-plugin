# Mktv Language Switcher Plugin

## Description

The **Mktv Language Switcher Plugin** dynamically generates a simple and elegant language switcher for your WordPress site. It retrieves available languages and their canonical URLs directly from `<link rel="alternate">` tags in the page's `<head>`, ensuring accurate and SEO-friendly links for each language version of your content.

This plugin is lightweight, plugin-agnostic, and does not require any specific multilingual plugin to function. It highlights the current language and provides seamless navigation between language-specific versions of your site.

---

## Features

- Automatically detects available languages using `<link rel="alternate">` tags.
- Dynamically highlights the active language.
- Displays a clean and responsive language switcher.
- Works with any multilingual setup that uses `hreflang` meta tags.
- Lightweight and straightforward, with no dependencies.

---

## Installation

1. Download and unzip the `mktv-language-switcher-plugin` folder.
2. Upload the folder to your WordPress installation directory under `/wp-content/plugins/`.
3. Activate the plugin in the WordPress admin panel under **Plugins > Installed Plugins**.

---

## Usage

1. Add the shortcode `[mktv_language_switcher]` to any page, post, or widget where you want the language switcher to appear.
2. Customize the appearance of the language switcher using the included CSS file or your theme’s styles.

---

## Example Output

If your site has the following `<link rel="alternate">` tags:

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="pt" href="https://example.com/pt/" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/" />
```

## Notes

	•	Ensure your site outputs <link rel="alternate"> tags in the <head> section. These tags are required for the plugin to detect available languages.
	•	Customize the styles using the provided css/mktv-language-switcher-style.css file or your own theme.