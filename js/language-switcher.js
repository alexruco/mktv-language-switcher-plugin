document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    // Function to fetch available languages from hreflang meta tags
    function getAvailableLanguages() {
        const hreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
        console.log("Found hreflang tags:", hreflangTags);

        const currentUrl = window.location.href;
        const languages = [];

        hreflangTags.forEach((tag) => {
            const hreflang = tag.getAttribute("hreflang");
            const href = tag.getAttribute("href");
            console.log("Processing tag:", { hreflang, href });

            const isActive = href === currentUrl; // Check if the current URL matches this language's URL
            if (hreflang && href) {
                languages.push({ code: hreflang, url: href, active: isActive });
            }
        });

        console.log("Languages detected:", languages);
        return languages;
    }

    // Render the switcher in the designated container
    function renderLanguageSwitcher(languages) {
        const container = document.getElementById("language-switcher-container");
        console.log("Switcher container:", container);
    
        if (!container || languages.length === 0) {
            console.warn("Language switcher container not found or no languages available.");
            return;
        }
    
        const switcher = document.createElement("ul");
        switcher.className = "language-switcher";
    
        languages.forEach((lang, index) => {
            const listItem = document.createElement("li");
            listItem.className = "language-item";
    
            const link = document.createElement("a");
            link.href = lang.url;
            link.textContent = lang.code;
            link.className = "language-link";
    
            if (lang.active) {
                listItem.classList.add("active-language");
                link.setAttribute("aria-current", "page");
            }
    
            listItem.appendChild(link);
    
            // Add the separator (|) after the link if it's not the last item
            if (index < languages.length - 1) {
                const separator = document.createElement("span");
                separator.textContent = " | ";
                separator.className = "language-separator";
                listItem.appendChild(separator);
            }
    
            switcher.appendChild(listItem);
        });
    
        container.appendChild(switcher);
        console.log("Language switcher rendered");
    }
    // Main Logic
    const availableLanguages = getAvailableLanguages();
    renderLanguageSwitcher(availableLanguages);
});