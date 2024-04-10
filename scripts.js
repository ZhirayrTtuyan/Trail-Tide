// Custom collection of hikes and beaches (aka. the spots)

// I chose to create my own data set about something I was passionate about.
// All the photos are taken by myself as well, so there is no one else to credit. (the ratings too)
// I chose to include links to Google Maps instead of definitive address', as I had planned to include some more obscure locations that would not have an exact address.

// There is the ability to sort, search, and filter the cards.
// Advanced filters also allow you to specify a minimum and maximum distance in miles from Santa Monica, as well as some tags.
// Both the names as well as the tags are searchable.
// The cards are lightly colored to differentiate between a beach and a hike.
// They are also clickable to see more details in a popup. Clicking away will close it.

// There are also the two additional buttons, I have adapted one to pick a spot at random for the user.

/**
 * @typedef {Object} Spot
 * @property {string} name - The name of the spot.
 * @property {string} description - A brief description of the spot.
 * @property {string} location - The general location of the spot.
 * @property {string} address - A link to google maps.
 * @property {number} rating - The rating of the spot. (my own)
 * @property {number} distance - The distance to the spot in miles, from Santa Monica.
 * @property {string} type - The type of spot (e.g., beach, hike).
 * @property {string} link - A URL link to an image of the spot.
 * @property {string[]} tags - Some tags to assist with search.
 * @property {string} [note] - An optional note about the spot.
 */
let spots = [
  {
    name: "Malibu Cave",
    description:
      "A secluded little cave underneath Sequit Point, it looks like a keyhole or teddy bear. To get to the cave, you can walk down the wooden stairs and make a right. You will find it past a few distinct rock features. There is also a beautiful view from the cliff above, get to it by looking for the lifeguard station.",
    address: "https://maps.app.goo.gl/EsYgz3Jf2pXSKoWf9",
    location: "Malibu",
    rating: 4.8,
    distance: 28,
    type: "beach",
    link: "photos/Malibu_Cave_1.jpg",
    tags: [
      "cave",
      "water",
      "tide warning",
      "sand",
      "secluded",
      "beach",
      "malibu",
      "easy",
      "parking",
    ],
    note: "Be very cautious of the tides as the water can raise into the cave at times...",
  },
  {
    name: "Eaton Canyon Falls",
    description:
      "An easy and flat hike that follows a stream into the mountains for a secluded waterfall. The amount of water generally fluctuates and is highly dependent on weather. Make sure to wear the right shoes, as you may need to walk through some water, depending on recent rains.",
    location: "Altadena",
    address: "https://maps.app.goo.gl/X4jPztb7Cw68CTTXA",
    rating: 4.6,
    distance: 34,
    type: "hike",
    link: "photos/Eaton_1.jpg",
    tags: [
      "water",
      "waterfall",
      "stream",
      "altadena",
      "flat",
      "easy",
      "trail",
      "hike",
      "parking",
    ],
    note: "I included the address to the official start of the trail, however, I recommend starting at the Mt Wilson/Pinecrest Gate if you want to get to the waterfall faster. You can park in the neighborhood slightly above, but pay attention to parking signs.",
  },
  {
    name: "Malibu Pier",
    description:
      "Underneath is a chill little spot to take some friends and a blanket. It's mostly empty at night with decent parking and steps down, but be mindful of the nearby houses.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/2bHfjagEet3M95gp7",
    rating: 4.6,
    distance: 12,
    type: "beach",
    link: "photos/Malibu_Pier.jpg",
    tags: ["pier", "water", "beach", "sand", "food"],
  },
  {
    name: "Hermit Falls",
    description:
      "Hermit Falls offers cliff jumping for the more adventurous. Be careful though, and check water depth before jumping. Personally I would wait to see other people do it first. There's three distinct levels with water falling from one to the next. The lowest point is a little tricky to get to and might require climbing up/down a rope. There is also Sturtevant Falls right nearby. They start from the same place and I've gone to both on the same day.",
    location: "Arcadia",
    address: "https://maps.app.goo.gl/97LXcE61YsXz2KaD7",
    rating: 4.7,
    distance: 38,
    type: "hike",
    link: "photos/Hermit_2.jpg",
    tags: ["waterfall", "water", "swim", "dive", "hike", "cliff"],
    note: "You need a California Adventure Pass to park there. You can buy the day pass for $5 from Big Five.",
  },
  {
    name: "Point Dume",
    description:
      "Chill spot that's still slightly secluded at times. I specifically link to the Westward Beach portion. There's a restaurant/bar right in front of the sand, as well as some volleyball nets. Parking is pretty easy too.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/NSn2EpL3i5t3YQar6",
    rating: 4.0,
    distance: 21,
    type: "beach",
    link: "photos/Point_Dume_1.jpg",
    tags: ["beach", "water", "sand", "cliff", "parking", "food", "malibu"],
  },
  {
    name: "Escondido Falls",
    description:
      "Perhaps the most unique-looking waterfall on this list. Located on PCH, this one's a no brainer if you want to experience Trails AND Tides all in one spot.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/6Hr2m8LwLJTzj6xs8",
    rating: 4.7,
    distance: 19,
    type: "hike",
    link: "photos/Escondido_1.jpg",
    tags: ["water", "hike", "waterfall", "malibu"],
  },
  {
    name: "Point Magu",
    description:
      "Another wonderful spot, although this might only be worth checking out if you're already passing by. It's next to a naval base that might remind any gamers out there of the one from GTA.",
    location: "Ventura County",
    address: "https://maps.app.goo.gl/Qxd7yqvgb9JtWmhLA",
    rating: 3,
    distance: 35,
    type: "beach",
    link: "photos/Point_Magu_1.jpg",
    tags: ["cliff", "water", "parking"],
  },
  {
    name: "Wisdom Tree",
    description:
      "This is the only one I've been sunburned at. LA sun and backpacks don't go well together, so make sure to apply sunscreen unless you want matching strap tanlines with me. You can also continue walking to get to the back of the Hollywood sign. It's a pretty decent workout with some great views.",
    location: "Hollywood",
    address: "https://maps.app.goo.gl/7gSgEMFvzVEDa7vr9",
    rating: 4,
    distance: 23,
    type: "hike",
    link: "photos/Wisdom_Tree_1.jpg",
    tags: ["dry", "hard", "workout", "hike", "parking"],
  },
  {
    name: "Brand Park",
    description:
      "This is the most physically demanding hike here, but it is a good workout. You start behind the historic Brand Library and work your way up the mountain. Be advised, although there is a shortcut down once you reach the top (the fire trail), it won't take you back to Brand Park, so you might have to Uber to your car.",
    location: "Glendale",
    address: "https://maps.app.goo.gl/piTX6LebY5SbUFxS6",
    rating: 2.9,
    distance: 26,
    type: "hike",
    link: "photos/Brand_Park_1.jpg",
    tags: ["dry", "sand", "hard", "workout", "parking"],
    note: "Brand Park closes it's gates at night, don't get locked in!",
  },
  {
    name: "Santa Monica Pier",
    description:
      "This one's obvious, and a must-go. Although, I find myself not returning too often. There are plenty of attractions on the pier.This ones obvious, and a must go. Although, I find myself not returning to often. There are plenty of attractions on the pier.",
    location: "Santa Monica",
    address: "https://maps.app.goo.gl/FDAs1Q3AKnW8gWBC9",
    rating: 4.5,
    distance: 0,
    type: "beach",
    link: "photos/Santa_Monica_Pier.jpg",
    tags: ["pier", "water", "beach", "sand", "attractions", "food"],
  },
  {
    name: "Stearns Wharf",
    description:
      "By far the farthest on our list, however the entire city is a place to enjoy.",
    location: "Santa Barbara",
    address: "https://maps.app.goo.gl/mzWoQng39mo2NBBt9",
    rating: 3.9,
    distance: 85,
    type: "beach",
    link: "photos/Stearns_Wharf.jpg",
    tags: ["pier", "water", "beach", "sand", "parking", "food"],
    note: "Parking is only free for the first 90 minutes.",
  },
  {
    name: "Nicholas Canyon",
    description:
      "Nothing too special, but the cliff's behind you can almost make you forget how close you are to civilization.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/Z4wnh8BFSphMTzc89",
    rating: 3,
    distance: 26,
    type: "beach",
    link: "photos/Nicholas_Canyon_1.jpg",
    tags: ["water", "beach", "sand"],
  },
  {
    name: "Staircase Beach",
    description:
      "I especially like this one just to walk along during sunset. It is also right next to the Malibu Cave so make sure to check out both.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/Jog99UmXrC4vMFWx6",
    rating: 3,
    distance: 28,
    type: "beach",
    link: "photos/Staircase_2.jpg",
    tags: ["water", "beach", "sand", "parking"],
  },
  {
    name: "Zuma Beach",
    description: "Not too special. But a great beach if you need one.",
    location: "Malibu",
    address: "https://maps.app.goo.gl/W9vkdEmkcPeA3dde8",
    rating: 3,
    distance: 20,
    type: "beach",
    link: "photos/Zuma_1.jpg",
    tags: ["water", "beach", "sand"],
  },
  {
    name: "Dockweiler Beach",
    description:
      "Not the cleanest of waters, but what it does have is firepits. This one is great for larger gatherings.",
    location: "Playa Del Rey",
    address: "https://maps.app.goo.gl/Qgwj4e7ctap9KzNB6",
    rating: 3.9,
    distance: 7,
    type: "beach",
    link: "photos/Dockweiler_2.jpg",
    tags: ["water", "beach", "sand", "fire"],
    note: "Remember to take firewood!",
  },
  {
    name: "Sturtevant Falls",
    description: "Next to Hermit Falls, it is worth checking out both.",
    location: "Arcadia",
    address: "https://maps.app.goo.gl/97LXcE61YsXz2KaD7",
    rating: 4.4,
    distance: 38,
    type: "hike",
    link: "photos/Sturtevant_1.jpg",
    tags: ["waterfall", "water", "swim", "dive", "hike"],
    note: "You need a California Adventure Pass to park there. You can buy the day pass for $5 from Big Five. Also, check water depth before jumping. Personally I would wait to see other people do it first.",
  },
  {
    name: "Millard Falls",
    description:
      "Another great waterfall to check out. There is also a camp site if you're into that.",
    location: "Arcadia",
    address: "https://maps.app.goo.gl/97LXcE61YsXz2KaD7",
    rating: 4.4,
    distance: 33,
    type: "hike",
    link: "photos/Millard_1.jpg",
    tags: ["waterfall", "water", "hike"],
    note: "You need a California Adventure Pass to park there. You can buy the day pass for $5 from Big Five.",
  },
];

/**
 * Creates and displays cards for each spot in the given array.
 * It clears the current cards in the card container, clones a template card,
 * modifies its content based on each spot's details, and appends it to the card container.
 *
 * @param {Spot[]} spots - An array of spot objects to display as cards.
 */
function showCards(spots) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < spots.length; i++) {
    let spot = spots[i];

    const nextCard = templateCard.cloneNode(true); // copy the template card
    editCardContent(nextCard, spot); // edit card contents
    cardContainer.appendChild(nextCard); // add new card to the container
  }
}

/**
 * Edits the content of a card element with the data from a given spot.
 * This function updates the card's display and sets its class based on the spot type.
 *
 * @param {HTMLElement} card - The card element to be modified.
 * @param {Spot} newSpot - The spot data object used to populate the card's content.
 */
function editCardContent(card, newSpot) {
  card.style.display = "block";

  card.classList.add(newSpot.type);

  // open detailed view on card click
  card.onclick = (event) => {
    // Passing the event object explicitly
    event.stopPropagation();
    expandCard(newSpot);
  };

  // modify spot title
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newSpot.name;

  // modify spot image
  const cardImage = card.querySelector("img");
  cardImage.src = newSpot.link;
  cardImage.alt = newSpot.name + " Photo";

  // modify spot bullet points
  const nodeList = card.querySelectorAll("li");
  nodeList[0].textContent =
    "Type: " + newSpot.type.charAt(0).toUpperCase() + newSpot.type.slice(1); // capitalize the type
  nodeList[1].textContent = "Rating: " + newSpot.rating;
  nodeList[2].textContent = "Distance: " + newSpot.distance + " miles";

  // modify spot description
  const cardDesc = card.querySelector("p");
  cardDesc.textContent = newSpot.description;

  console.log("new card:", newSpot.name, "- html: ", card);
}

/**
 * Filters and displays cards based on user input and selected criteria.
 * The function retrieves user input for search query, type, sort order, and distance range.
 * It also checks the status of specific tag checkboxes (like water, dry, food, parking).
 * Then, it sorts and filters the spots data according to these inputs and calls showCards() to display the resulting cards.
 * Could be broken up into several functions, but kept as one for simplicity.
 *
 * @function filterAndShow
 */
function filterAndShow() {
  const searchQuery = document.getElementById("searchBox").value.toLowerCase();
  const typeFilter = document.getElementById("typeFilter").value;
  const sortOrder = document.getElementById("sortOrder").value;

  // distance filter
  const minDistance =
    parseInt(document.getElementById("minDistance").value, 10) || 0;
  const maxDistance =
    parseInt(document.getElementById("maxDistance").value, 10) || Infinity;

  // check box status'
  const isWaterChecked = document.querySelector('input[value="water"]').checked;
  const isDryChecked = document.querySelector('input[value="dry"]').checked;
  const isFoodChecked = document.querySelector('input[value="food"]').checked;
  const isParkingChecked = document.querySelector(
    'input[value="parking"]',
  ).checked;

  // sort the data
  let sortedData = [...spots].sort((a, b) => {
    if (sortOrder === "name") return a.name.localeCompare(b.name);
    if (sortOrder === "rating") return b.rating - a.rating;
    if (sortOrder === "distance") return a.distance - b.distance;
    return 0; // default case if no sort order matches
  });

  // filter the data
  const filteredData = sortedData.filter((spot) => {
    const nameMatch = spot.name.toLowerCase().includes(searchQuery);
    const typeMatch = typeFilter === "all" || spot.type === typeFilter;
    const distanceMatch =
      spot.distance >= minDistance && spot.distance <= maxDistance;
    const tagSearchMatch =
      spot.tags &&
      spot.tags.some((tag) => tag.toLowerCase().includes(searchQuery));

    // check the tag check boxes
    let tagCheckMatch = true; // default to true if no checkboxes are checked, otherwise nothing will show
    if (isWaterChecked || isDryChecked || isFoodChecked || isParkingChecked) {
      tagCheckMatch =
        (!isWaterChecked || spot.tags.includes("water")) &&
        (!isDryChecked || spot.tags.includes("dry")) &&
        (!isFoodChecked || spot.tags.includes("food")) &&
        (!isParkingChecked || spot.tags.includes("parking"));
    }

    return (
      (nameMatch || tagSearchMatch) &&
      distanceMatch &&
      typeMatch &&
      tagCheckMatch
    );
  });

  showCards(filteredData);
}

/**
 * Expands a detailed popup view of a selected card.
 * If the list of spots is empty, shows an alert message to the user.
 * I really like this way of editing/generating HTML. If I were to redo this project, adapt the regular cards to work the same as well.
 *
 * @function expandCard
 * @param {Spot} spot The spot object to display in the popup.
 */
function expandCard(spot) {
  const index = spots.indexOf(spot);
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup-inner">
    <button class="nav-arrow left-arrow" onclick="changeCard(event, ${index - 1})">&#10094;</button>
            <div class="popup-content">
                <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
                <div class="popup-header">
                    <img src="${spot.link}" alt="${spot.name}" class="popup-image">
                    <h2>${spot.name}</h2>
                </div>
                <div class="popup-body">
                  <div class="popup-points">
                    <p><strong>Type:</strong> ${spot.type}</p>
                    <p><strong>Rating:</strong> ${spot.rating}</p>
                    <p><strong>Location:</strong> <a href=${spot.address}>${spot.location}</a></p>
                  </div>
                    <p>${spot.description}</p>
                    ${spot.note ? `<p><strong>Note:</strong> ${spot.note}</p>` : ""}
                </div>
            </div>
            <button class="nav-arrow right-arrow" onclick="changeCard(event, ${index + 1})">&#10095;</button>
            </div>
    `;
  document.body.appendChild(popup);
  popup.style.display = "block";
  console.log("Expanding " + spot.name + " card (popup)");
}

/**
 * Navigates to the next or previous card in the popup view based on the given index.
 * Cycles through the spots array when reaching the start or end.
 *
 * @param {Event} event - The event that triggered the function call, used to prevent default action and stop propagation.
 * @param {number} index - The index of the spot to display in the popup view. This function adjusts the index to loop within the spots array bounds.
 */
function changeCard(event, index) {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) index = spots.length - 1;
  if (index >= spots.length) index = 0;

  document.querySelector(".popup").remove();
  expandCard(spots[index]);
}

/**
 * Toggles the "Advanced Filters" section in the page's header.
 *
 * @function toggleExpandableSection
 */
function toggleExpandableSection() {
  const content = document.getElementById("expandableContent");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", filterAndShow);

// This closes the popup if the user clicks outside of it.
document.addEventListener("click", function (event) {
  const popup = document.querySelector(".popup-content");
  if (popup && !popup.contains(event.target)) {
    popup.parentElement.parentElement.remove();
  }
});

/**
 * Picks a random spot from the list of spots and displays its details.
 * If the list of spots is empty, shows an alert message to the user.
 * Was inspired/adapted from the templates "QuoteAlert" button.
 *
 * @function randomCard
 * @param {Event} event - The event object from the click event.
 * @returns {void} No return value.
 */
function randomCard(event) {
  // would not work without the stopPropogation(), but felt safer with an if check. have to read more about events
  if (event) {
    event.stopPropagation();
  }

  // check if the list is empty first (like if they removed all the cards)
  if (spots.length === 0) {
    alert("Not lucky enough! :( \nNo spots available to display!");
    return;
  }

  // pick a random spot
  const randomIndex = Math.floor(Math.random() * spots.length);
  const randomSpot = spots[randomIndex];

  // log in console, and expand the chosen card
  console.log("Random Card Picked:", randomSpot.name);
  expandCard(randomSpot);
}

/**
 * Removes the last card from the spots array.
 * Could be improved to only effect the sorted array.
 *
 * @function removeLastCard
 */
function removeLastCard() {
  spots.pop(); // remove last item in spots array
  console.log("Removed Last Card");
  filterAndShow(); // call filterAndShow again to refresh
}
