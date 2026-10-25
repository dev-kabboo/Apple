/* =========================================================
   script.js — Apple Store demo interactions
   Beginner guide:
   1. products is our sample catalogue (the data).
   2. renderProducts() draws cards on the page.
   3. filters and search decide which cards are shown.
   4. openDetails() opens a popup with a product's specs.
   ========================================================= */

// Each object describes one product family/model.
// The specs are short summaries for learning, not a complete technical datasheet.
const products = [
    {
        id: "iphone-duo", name: "iPhone Duo", category: "iPhone", icon: "📱",
        summary: "A foldable iPhone concept in Apple's current lineup.",
        chips: ["Foldable", "iOS"],
        specs: {
            "Display": "Large foldable display",
            "Software": "iOS",
            "Design": "Foldable, posable design",
            "Best for": "People who want a phone with a larger unfolding screen",
            "Camera": "See Apple's official model page for exact camera details",
            "Availability": "Check your local Apple Store"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "iphone-18-pro", name: "iPhone 18 Pro", category: "iPhone", icon: "📱",
        summary: "A premium iPhone focused on performance, cameras, and battery life.",
        chips: ["Pro", "iOS"],
        specs: {
            "Display": "Pro-class display; check official page for size and refresh rate",
            "Chip": "Current-generation Apple silicon for iPhone",
            "Camera": "Advanced multi-camera system",
            "Software": "iOS",
            "Best for": "Photography, video, and demanding everyday tasks",
            "Exact details": "Configurations vary; confirm on Apple's official page"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "iphone-air", name: "iPhone Air", category: "iPhone", icon: "📱",
        summary: "A very thin and light iPhone with high-end performance.",
        chips: ["Thin design", "iOS"],
        specs: {
            "Design": "Thin and lightweight",
            "Display": "See official page for exact display size",
            "Performance": "Pro-level performance positioning",
            "Software": "iOS",
            "Best for": "People who value a light, slim phone",
            "Exact details": "Check Apple's official specifications"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "iphone-17", name: "iPhone 17", category: "iPhone", icon: "📱",
        summary: "A balanced everyday iPhone for photos, apps, messages, and video.",
        chips: ["Everyday", "iOS"],
        specs: {
            "Display": "See official page for exact size and display features",
            "Chip": "Apple A-series chip",
            "Camera": "High-resolution camera system",
            "Software": "iOS",
            "Best for": "Everyday use, communication, and photography",
            "Exact details": "Storage, colours, and features depend on model"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "iphone-17e", name: "iPhone 17e", category: "iPhone", icon: "📱",
        summary: "A more affordable way to get into the current iPhone family.",
        chips: ["Value", "iOS"],
        specs: {
            "Display": "See official page for exact display details",
            "Chip": "Apple A-series chip",
            "Camera": "Main camera system",
            "Software": "iOS",
            "Best for": "People who want core iPhone features at a lower price",
            "Exact details": "Check Apple's official specifications"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "iphone-16", name: "iPhone 16 family", category: "iPhone", icon: "📱",
        summary: "Previous-generation iPhone models may remain available in some markets.",
        chips: ["Previous generation", "iOS"],
        specs: {
            "Display": "Varies by model",
            "Chip": "Apple A-series chip",
            "Camera": "Varies by model",
            "Software": "iOS",
            "Best for": "Comparing earlier models and available offers",
            "Availability": "Sales depend on region and retailer"
        },
        officialUrl: "https://www.apple.com/iphone/"
    },
    {
        id: "ipad-pro", name: "iPad Pro", category: "iPad", icon: "▯",
        summary: "Apple's high-performance tablet family for creative and professional work.",
        chips: ["Pro", "Apple Pencil"],
        specs: {
            "Sizes": "11-inch and 13-inch options in the current family",
            "Display": "Ultra Retina XDR on current listed models",
            "Chip": "Apple M-series chip (check current model)",
            "Cameras": "Wide rear camera and front camera features vary by generation",
            "Accessories": "Supports compatible Apple Pencil and Magic Keyboard accessories",
            "Best for": "Drawing, editing, multitasking, and demanding tablet workflows"
        },
        officialUrl: "https://www.apple.com/ipad/"
    },
    {
        id: "ipad-air", name: "iPad Air", category: "iPad", icon: "▯",
        summary: "A light, versatile tablet with strong performance for school and creativity.",
        chips: ["Versatile", "Apple Pencil"],
        specs: {
            "Sizes": "11-inch and 13-inch options in the current family",
            "Display": "Liquid Retina",
            "Chip": "Apple M-series chip (check current model)",
            "Accessories": "Supports compatible Apple Pencil and keyboard accessories",
            "Best for": "Study, notes, drawing, and entertainment",
            "Connectivity": "Wi-Fi; some configurations also offer cellular"
        },
        officialUrl: "https://www.apple.com/ipad/"
    },
    {
        id: "ipad", name: "iPad", category: "iPad", icon: "▯",
        summary: "A colourful everyday tablet for browsing, learning, and entertainment.",
        chips: ["Everyday", "Student-friendly"],
        specs: {
            "Display": "11-inch Liquid Retina on the current listed model",
            "Chip": "Apple A-series chip (check current model)",
            "Camera": "12MP-class cameras on the current listed model",
            "Accessories": "Compatible Apple Pencil and keyboard options",
            "Best for": "Everyday apps, video, web browsing, and schoolwork",
            "Connectivity": "Wi-Fi; cellular configurations may be available"
        },
        officialUrl: "https://www.apple.com/ipad/"
    },
    {
        id: "ipad-mini", name: "iPad mini", category: "iPad", icon: "▯",
        summary: "A compact iPad for reading, travel, notes, and one-handed portability.",
        chips: ["Compact", "Portable"],
        specs: {
            "Display": "8.3-inch class Liquid Retina display on the current listed model",
            "Chip": "Apple A-series chip (check current model)",
            "Camera": "12MP-class camera features on the current listed model",
            "Accessories": "Supports compatible Apple Pencil",
            "Best for": "Reading, travel, and portable note-taking",
            "Connectivity": "Wi-Fi; cellular configurations may be available"
        },
        officialUrl: "https://www.apple.com/ipad/"
    },
    {
        id: "macbook-neo", name: "MacBook Neo", category: "Mac", icon: "💻",
        summary: "A portable Mac notebook designed for everyday computing.",
        chips: ["Laptop", "macOS"],
        specs: {
            "Form": "Portable notebook",
            "Chip": "Apple A18 Pro family (check current configuration)",
            "Software": "macOS",
            "Colours": "Colour options vary by market",
            "Best for": "Study, browsing, documents, and everyday tasks",
            "Exact details": "Check Apple's official Mac page"
        },
        officialUrl: "https://www.apple.com/mac/"
    },
    {
        id: "macbook-air", name: "MacBook Air", category: "Mac", icon: "💻",
        summary: "A thin, fanless laptop for study, work, and everyday creative projects.",
        chips: ["Lightweight", "macOS"],
        specs: {
            "Sizes": "13-inch and 15-inch families",
            "Chip": "Apple M-series chip (check current generation)",
            "Display": "Liquid Retina",
            "Battery": "Designed for all-day use; runtime varies by task",
            "Best for": "Students, office work, coding, and travel",
            "Software": "macOS"
        },
        officialUrl: "https://www.apple.com/macbook-air/"
    },
    {
        id: "macbook-pro", name: "MacBook Pro", category: "Mac", icon: "💻",
        summary: "A powerful laptop for demanding creative and development workflows.",
        chips: ["Pro performance", "macOS"],
        specs: {
            "Sizes": "14-inch and 16-inch families",
            "Chip": "Apple M-series Pro/Max options; check exact model",
            "Display": "Liquid Retina XDR",
            "Ports": "Port selection varies by configuration",
            "Best for": "Software development, video editing, music, and 3D work",
            "Software": "macOS"
        },
        officialUrl: "https://www.apple.com/macbook-pro/"
    },
    {
        id: "imac", name: "iMac", category: "Mac", icon: "🖥️",
        summary: "An all-in-one desktop with the computer built into the display.",
        chips: ["Desktop", "All-in-one"],
        specs: {
            "Display": "24-inch class display on the current iMac family",
            "Chip": "Apple M-series chip (check current model)",
            "Design": "Computer and display in one unit",
            "Accessories": "Keyboard and mouse options vary by package",
            "Best for": "Home, study, office, and creative work",
            "Software": "macOS"
        },
        officialUrl: "https://www.apple.com/imac/"
    },
    {
        id: "mac-mini", name: "Mac mini", category: "Mac", icon: "🖥️",
        summary: "A compact desktop Mac that connects to your own display and accessories.",
        chips: ["Compact desktop", "macOS"],
        specs: {
            "Form": "Small desktop computer",
            "Chip": "Apple M-series options; check current model",
            "Display": "External display required",
            "Ports": "Port selection varies by generation",
            "Best for": "Desk setups, coding, and general desktop work",
            "Software": "macOS"
        },
        officialUrl: "https://www.apple.com/mac-mini/"
    },
    {
        id: "mac-studio", name: "Mac Studio", category: "Mac", icon: "🖥️",
        summary: "A high-performance desktop for demanding professional workflows.",
        chips: ["Workstation", "macOS"],
        specs: {
            "Form": "Compact professional desktop",
            "Chip": "Apple M-series Max/Ultra options; check current model",
            "Display": "External display required",
            "Connectivity": "Multiple pro-focused ports; exact selection varies",
            "Best for": "Video production, 3D, audio, and large creative projects",
            "Software": "macOS"
        },
        officialUrl: "https://www.apple.com/mac-studio/"
    },
    {
        id: "watch-series", name: "Apple Watch Series", category: "Watch", icon: "⌚",
        summary: "A smartwatch for fitness, notifications, and everyday health features.",
        chips: ["Fitness", "Notifications"],
        specs: {
            "Display": "Always-On Retina display on supported models",
            "Health": "Features vary by model and country",
            "Fitness": "Activity tracking and workout features",
            "Connectivity": "GPS; cellular versions may be available",
            "Compatibility": "Requires a compatible iPhone",
            "Best for": "Daily activity, workouts, and notifications"
        },
        officialUrl: "https://www.apple.com/watch/"
    },
    {
        id: "watch-se", name: "Apple Watch SE", category: "Watch", icon: "⌚",
        summary: "A more affordable Apple Watch for core smartwatch and fitness features.",
        chips: ["Everyday", "Fitness"],
        specs: {
            "Display": "Retina display; exact features depend on generation",
            "Fitness": "Activity rings and workout tracking",
            "Safety": "Selected safety features; availability varies",
            "Connectivity": "GPS and optional cellular configurations",
            "Compatibility": "Requires a compatible iPhone",
            "Best for": "First-time smartwatch users"
        },
        officialUrl: "https://www.apple.com/watch/"
    },
    {
        id: "watch-ultra", name: "Apple Watch Ultra", category: "Watch", icon: "⌚",
        summary: "A rugged watch designed for outdoor activities and endurance sports.",
        chips: ["Rugged", "Outdoor"],
        specs: {
            "Design": "Rugged titanium case family",
            "Display": "Large, bright Always-On Retina display",
            "Fitness": "Advanced workout and outdoor features",
            "Water": "Water-related ratings depend on model and activity",
            "Compatibility": "Requires a compatible iPhone",
            "Best for": "Outdoor adventures and endurance training"
        },
        officialUrl: "https://www.apple.com/watch/"
    },
    {
        id: "airpods", name: "AirPods", category: "Audio", icon: "🎧",
        summary: "Wireless earbuds for music, calls, and Apple-device listening.",
        chips: ["Wireless", "Audio"],
        specs: {
            "Connection": "Bluetooth wireless",
            "Audio": "Features vary by AirPods generation",
            "Noise control": "Active Noise Cancellation on selected models",
            "Charging": "Case and charging options vary by model",
            "Compatibility": "Works with Apple devices and Bluetooth audio sources",
            "Best for": "Music, calls, and everyday listening"
        },
        officialUrl: "https://www.apple.com/airpods/"
    },
    {
        id: "airpods-max", name: "AirPods Max", category: "Audio", icon: "🎧",
        summary: "Over-ear headphones with premium audio and noise control.",
        chips: ["Over-ear", "Noise control"],
        specs: {
            "Design": "Over-ear headphones",
            "Audio": "High-fidelity audio features",
            "Noise control": "Active Noise Cancellation and Transparency modes",
            "Controls": "Physical controls vary by generation",
            "Compatibility": "Bluetooth; Apple features work best with Apple devices",
            "Best for": "Immersive listening and travel"
        },
        officialUrl: "https://www.apple.com/airpods-max/"
    },
    {
        id: "apple-tv", name: "Apple TV 4K", category: "Home", icon: "📺",
        summary: "A streaming device that brings apps and entertainment to a TV.",
        chips: ["Streaming", "Home"],
        specs: {
            "Video": "4K output on supported content and displays",
            "HDR": "Formats depend on device, content, and TV",
            "Audio": "Dolby Atmos support on compatible setups",
            "Remote": "Siri Remote included with current packages",
            "Network": "Wi-Fi; Ethernet availability varies by configuration",
            "Best for": "Streaming, Apple services, and home entertainment"
        },
        officialUrl: "https://www.apple.com/apple-tv-4k/"
    },
    {
        id: "homepod", name: "HomePod", category: "Home", icon: "🔊",
        summary: "A smart speaker for music and controlling a compatible smart home.",
        chips: ["Smart speaker", "Home"],
        specs: {
            "Audio": "Room-filling audio; features depend on model",
            "Assistant": "Siri voice control",
            "Smart home": "Works with compatible smart-home accessories",
            "Connectivity": "Wi-Fi and Apple ecosystem integration",
            "Setup": "Designed to be configured with Apple devices",
            "Best for": "Music and smart-home control"
        },
        officialUrl: "https://www.apple.com/homepod/"
    },
    {
        id: "vision-pro", name: "Apple Vision Pro", category: "Spatial", icon: "🥽",
        summary: "A spatial-computing headset for immersive apps and digital experiences.",
        chips: ["Spatial computing", "Immersive"],
        specs: {
            "Experience": "Spatial computing with apps in your surroundings",
            "Controls": "Eye, hand, and voice interaction",
            "Display": "Micro-OLED displays; exact details depend on version",
            "Content": "Spatial photos, video, and compatible apps",
            "Fit": "Fit and availability options vary by market",
            "Best for": "Immersive media and spatial applications"
        },
        officialUrl: "https://www.apple.com/apple-vision-pro/"
    }
];

// The categories used to build the filter buttons and the welcome popup.
const categories = [
    { name: "All", icon: "✨", subtitle: "Every product" },
    { name: "iPhone", icon: "📱", subtitle: "Phones" },
    { name: "iPad", icon: "▯", subtitle: "Tablets" },
    { name: "Mac", icon: "💻", subtitle: "Computers" },
    { name: "Watch", icon: "⌚", subtitle: "Smartwatches" },
    { name: "Audio", icon: "🎧", subtitle: "Headphones" },
    { name: "Home", icon: "🏠", subtitle: "Home devices" },
    { name: "Spatial", icon: "🥽", subtitle: "Spatial computing" }
];

// Keep track of the currently selected category.
let activeCategory = "All";

// Find important HTML elements once so we can reuse them.
const productGrid = document.querySelector("#productGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const productSearch = document.querySelector("#productSearch");
const catalogModal = document.querySelector("#catalogModal");
const modalProductGrid = document.querySelector("#modalProductGrid");
const detailsModal = document.querySelector("#detailsModal");
const detailsContent = document.querySelector("#detailsContent");

// Build the category filter buttons.
function renderCategoryFilters() {
    categoryFilters.innerHTML = "";

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "filter-button";
        if (category.name === activeCategory) {
            button.classList.add("active");
        }

        button.textContent = category.name === "All"
            ? `${category.icon} ${category.name}`
            : `${category.icon} ${category.name}`;

        // Clicking a filter changes which products are visible.
        button.addEventListener("click", () => {
            activeCategory = category.name;
            renderCategoryFilters();
            renderProducts();
        });

        categoryFilters.appendChild(button);
    });
}

// Create one product card.
function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    // These chips are short highlights, not the full specification list.
    const chipsHTML = product.chips
        .map((chip) => `<span class="spec-pill">${chip}</span>`)
        .join("");

    card.innerHTML = `
        <div class="product-topline">
            <div class="product-icon" aria-hidden="true">${product.icon}</div>
            <span class="product-category">${product.category}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <div class="spec-pills">${chipsHTML}</div>
        <button class="details-button" type="button">View specifications →</button>
    `;

    // Open the detail popup for this exact product.
    card.querySelector(".details-button").addEventListener("click", () => {
        openDetails(product);
    });

    return card;
}

// Draw the cards after applying category and search filters.
function renderProducts() {
    const searchText = productSearch.value.trim().toLowerCase();

    // filter() keeps only products that match both the category and search.
    const visibleProducts = products.filter((product) => {
        const matchesCategory =
            activeCategory === "All" || product.category === activeCategory;

        const searchableText = [
            product.name,
            product.category,
            product.summary,
            product.chips.join(" "),
            Object.values(product.specs).join(" ")
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchText);
        return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = "";

    if (visibleProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try another search term or choose the “All” category.</p>
            </div>
        `;
        return;
    }

    visibleProducts.forEach((product) => {
        productGrid.appendChild(createProductCard(product));
    });
}

// Fill the first popup with product categories. A click opens a relevant product.
function renderWelcomeChoices() {
    modalProductGrid.innerHTML = "";

    categories
        .filter((category) => category.name !== "All")
        .forEach((category) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "modal-product-choice";
            button.innerHTML = `
                <span class="choice-icon" aria-hidden="true">${category.icon}</span>
                <span class="choice-title">${category.name}</span>
                <span class="choice-subtitle">${category.subtitle}</span>
            `;

            button.addEventListener("click", () => {
                // Close the welcome popup, filter the page, then scroll to the cards.
                closeCatalogModal();
                activeCategory = category.name;
                productSearch.value = "";
                renderCategoryFilters();
                renderProducts();
                document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });

                // Open the first item in the selected category so the visitor can
                // immediately see a specification popup.
                const firstProduct = products.find((product) => product.category === category.name);
                if (firstProduct) {
                    openDetails(firstProduct);
                }
            });

            modalProductGrid.appendChild(button);
        });
}

// Display the selected product's specification summary in a second popup.
function openDetails(product) {
    const specRows = Object.entries(product.specs)
        .map(([label, value]) => `
            <div class="details-spec">
                <strong>${label}</strong>
                <span>${value}</span>
            </div>
        `)
        .join("");

    detailsContent.innerHTML = `
        <p class="details-category">${product.icon} ${product.category}</p>
        <h2 class="details-title" id="detailsTitle">${product.name}</h2>
        <p class="details-summary">${product.summary}</p>
        <div class="details-specs">${specRows}</div>
        <p class="details-footer">
            Learning summary only. Exact technical specifications, prices, and availability can vary by model and country.
        </p>
        <a class="official-link" href="${product.officialUrl}" target="_blank" rel="noopener noreferrer">
            Check Apple's official website ↗
        </a>
    `;

    detailsModal.hidden = false;
    document.body.style.overflow = "hidden";
    document.querySelector("#closeDetailsButton").focus();
}

// Close the product details popup.
function closeDetails() {
    detailsModal.hidden = true;
    document.body.style.overflow = catalogModal.classList.contains("is-open") ? "hidden" : "";
}

// Close the initial catalogue popup and allow scrolling.
function closeCatalogModal() {
    catalogModal.classList.remove("is-open");
    catalogModal.hidden = true;
    document.body.style.overflow = detailsModal.hidden ? "" : "hidden";
}

// Event: update product cards whenever the visitor types in the search box.
productSearch.addEventListener("input", renderProducts);

// Event: buttons that open the initial catalogue popup again.
document.querySelector("#openCatalogButton").addEventListener("click", () => {
    catalogModal.hidden = false;
    catalogModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    document.querySelector("#closeCatalogButton").focus();
});

document.querySelector("#heroBrowseButton").addEventListener("click", () => {
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

// Event: close buttons.
document.querySelector("#closeCatalogButton").addEventListener("click", closeCatalogModal);
document.querySelector("#enterStoreButton").addEventListener("click", closeCatalogModal);
document.querySelector("#closeDetailsButton").addEventListener("click", closeDetails);

// Clicking the dim background outside the popup closes it.
catalogModal.addEventListener("click", (event) => {
    if (event.target === catalogModal) closeCatalogModal();
});

detailsModal.addEventListener("click", (event) => {
    if (event.target === detailsModal) closeDetails();
});

// Escape key closes any popup currently open.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!detailsModal.hidden) {
            closeDetails();
        } else if (!catalogModal.hidden) {
            closeCatalogModal();
        }
    }
});

// Start the website: draw filters, product cards, and popup categories.
// The first popup is visible automatically because it is not hidden in the HTML.
renderCategoryFilters();
renderProducts();
renderWelcomeChoices();
catalogModal.classList.add("is-open");
document.body.style.overflow = "hidden";
