// Current year for footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Sample music data for different locations
        const locationMusicData = {
            "Nairobi": {
                "all": [
                    {id: 1, title: "Moto", artist: "Willy Paul", trend: "up", plays: "245K", positionChange: "+2"},
                    {id: 2, title: "Sare", artist: "Sauti Sol", trend: "down", plays: "198K", positionChange: "-1"},
                    {id: 3, title: "Jeraha", artist: "Otile Brown", trend: "new", plays: "187K", positionChange: "New"},
                    {id: 4, title: "Enjoy", artist: "Nyashinski", trend: "up", plays: "176K", positionChange: "+3"},
                    {id: 5, title: "Dusuma", artist: "Harmonize", trend: "down", plays: "162K", positionChange: "-2"},
                    {id: 6, title: "Mabel", artist: "Khaligraph Jones", trend: "steady", plays: "150K", positionChange: "0"},
                    {id: 7, title: "Bazokizo", artist: "Mejja", trend: "up", plays: "142K", positionChange: "+1"},
                    {id: 8, title: "Wanjapi", artist: "Nviiri the Storyteller", trend: "down", plays: "135K", positionChange: "-1"},
                    {id: 9, title: "Kesho", artist: "Nadia Mukami", trend: "new", plays: "128K", positionChange: "New"},
                    {id: 10, title: "Hapo Tu", artist: "Sudi Boy", trend: "up", plays: "120K", positionChange: "+4"}
                ],
                "gospel": [
                    {id: 1, title: "Nadeka", artist: "Guardian Angel", trend: "up", plays: "98K", positionChange: "+1"},
                    {id: 2, title: "Nikumbushe", artist: "Christina Shusho", trend: "steady", plays: "87K", positionChange: "0"},
                    {id: 3, title: "Mungu Mkuu", artist: "Gloria Muliro", trend: "down", plays: "76K", positionChange: "-2"},
                    {id: 4, title: "Uwezo", artist: "Joel Lwaga", trend: "new", plays: "72K", positionChange: "New"},
                    {id: 5, title: "Nipe Uwezo", artist: "Eunice Njeri", trend: "up", plays: "68K", positionChange: "+3"},
                    {id: 6, title: "Mungu Baba", artist: "Rose Muhando", trend: "steady", plays: "65K", positionChange: "0"},
                    {id: 7, title: "Nataka Kulea", artist: "Size 8", trend: "down", plays: "62K", positionChange: "-1"},
                    {id: 8, title: "Nibebe", artist: "Kambua", trend: "up", plays: "58K", positionChange: "+2"},
                    {id: 9, title: "Nibariki", artist: "Bahati", trend: "new", plays: "55K", positionChange: "New"},
                    {id: 10, title: "Mfalme Wa Amani", artist: "Moji Shortbabaa", trend: "steady", plays: "52K", positionChange: "0"}
                ]
            },
            "Lagos": {
                "all": [
                    {id: 1, title: "Calm Down", artist: "Rema", trend: "up", plays: "342K", positionChange: "+1"},
                    {id: 2, title: "Soweto", artist: "Victony", trend: "steady", plays: "298K", positionChange: "0"},
                    {id: 3, title: "Last Last", artist: "Burna Boy", trend: "down", plays: "276K", positionChange: "-2"},
                    {id: 4, title: "Buga", artist: "Kizz Daniel", trend: "up", plays: "254K", positionChange: "+3"},
                    {id: 5, title: "Overloading", artist: "Mavins", trend: "new", plays: "231K", positionChange: "New"},
                    {id: 6, title: "Electricity", artist: "Pheelz", trend: "up", plays: "215K", positionChange: "+2"},
                    {id: 7, title: "Bandana", artist: "Fireboy DML", trend: "down", plays: "198K", positionChange: "-1"},
                    {id: 8, title: "Rush", artist: "Ayra Starr", trend: "up", plays: "185K", positionChange: "+4"},
                    {id: 9, title: "Terminator", artist: "Asake", trend: "steady", plays: "172K", positionChange: "0"},
                    {id: 10, title: "Monalisa", artist: "Lojay", trend: "down", plays: "160K", positionChange: "-3"}
                ],
                "gospel": [
                    {id: 1, title: "Capable God", artist: "Judikay", trend: "steady", plays: "112K", positionChange: "0"},
                    {id: 2, title: "Obinigwe", artist: "Mercy Chinwo", trend: "up", plays: "105K", positionChange: "+2"},
                    {id: 3, title: "On Fire", artist: "Victoria Orenze", trend: "down", plays: "98K", positionChange: "-1"},
                    {id: 4, title: "I Get Backing", artist: "Moses Bliss", trend: "new", plays: "92K", positionChange: "New"},
                    {id: 5, title: "Too Faithful", artist: "Moses Bliss", trend: "up", plays: "88K", positionChange: "+1"},
                    {id: 6, title: "You Are Great", artist: "Steve Crown", trend: "steady", plays: "85K", positionChange: "0"},
                    {id: 7, title: "Excess Love", artist: "Mercy Chinwo", trend: "down", plays: "82K", positionChange: "-3"},
                    {id: 8, title: "Omekannaya", artist: "Mercy Chinwo", trend: "up", plays: "78K", positionChange: "+2"},
                    {id: 9, title: "Owo Oluwa", artist: "Nike Okundaye", trend: "new", plays: "75K", positionChange: "New"},
                    {id: 10, title: "Yes You Are the Lord", artist: "Nathaniel Bassey", trend: "steady", plays: "72K", positionChange: "0"}
                ]
            },
            "Johannesburg": {
                "all": [
                    {id: 1, title: "Stimela", artist: "2Point1", trend: "up", plays: "315K", positionChange: "+2"},
                    {id: 2, title: "Mnike", artist: "Tyler ICU", trend: "steady", plays: "289K", positionChange: "0"},
                    {id: 3, title: "Sofa Silahlane", artist: "Wanitwa Mos", trend: "down", plays: "267K", positionChange: "-2"},
                    {id: 4, title: "Koo Koo Fun", artist: "Major League DJz", trend: "up", plays: "245K", positionChange: "+3"},
                    {id: 5, title: "Paris", artist: "Q-Mark", trend: "new", plays: "226K", positionChange: "New"},
                    {id: 6, title: "Abalele", artist: "Kabza De Small", trend: "up", plays: "212K", positionChange: "+1"},
                    {id: 7, title: "Adiwele", artist: "Young Stunna", trend: "down", plays: "198K", positionChange: "-1"},
                    {id: 8, title: "Sengizwile", artist: "Gaba Cannal", trend: "steady", plays: "184K", positionChange: "0"},
                    {id: 9, title: "Ngeke", artist: "Pabi Cooper", trend: "new", plays: "172K", positionChange: "New"},
                    {id: 10, title: "Tobetsa", artist: "Myztro", trend: "up", plays: "160K", positionChange: "+2"}
                ],
                "gospel": [
                    {id: 1, title: "Ndikhokhele", artist: "Jabu Hlongwane", trend: "steady", plays: "108K", positionChange: "0"},
                    {id: 2, title: "Jehova Retshepile Wena", artist: "Neyi Zimu", trend: "up", plays: "102K", positionChange: "+1"},
                    {id: 3, title: "Ngiyabonga", artist: "Sipho Makhabane", trend: "down", plays: "98K", positionChange: "-1"},
                    {id: 4, title: "UnguJehova", artist: "Takie Ndou", trend: "new", plays: "95K", positionChange: "New"},
                    {id: 5, title: "Ngiyakuthanda", artist: "Hlengiwe Mhlaba", trend: "up", plays: "92K", positionChange: "+2"},
                    {id: 6, title: "Ngena Noah", artist: "Benjamin Dube", trend: "steady", plays: "88K", positionChange: "0"},
                    {id: 7, title: "Ngiyabonga Jesu", artist: "Solly Mahlangu", trend: "down", plays: "85K", positionChange: "-2"},
                    {id: 8, title: "Thina Simnqobile", artist: "Ntokozo Mbambo", trend: "up", plays: "82K", positionChange: "+1"},
                    {id: 9, title: "Ngibonge", artist: "Ntokozo Mbambo", trend: "new", plays: "78K", positionChange: "New"},
                    {id: 10, title: "Ngiyamthanda", artist: "Ntokozo Mbambo", trend: "steady", plays: "75K", positionChange: "0"}
                ]
            },
            "Accra": {
                "all": [
                    {id: 1, title: "Case", artist: "Mr Drew", trend: "up", plays: "275K", positionChange: "+2"},
                    {id: 2, title: "Hossana", artist: "Kweku Smoke", trend: "steady", plays: "258K", positionChange: "0"},
                    {id: 3, title: "Y3 Y3 Dom", artist: "Kuami Eugene", trend: "down", plays: "245K", positionChange: "-2"},
                    {id: 4, title: "Over", artist: "Gyakie", trend: "up", plays: "232K", positionChange: "+1"},
                    {id: 5, title: "Nonstop", artist: "Sarkodie", trend: "new", plays: "225K", positionChange: "New"},
                    {id: 6, title: "Monica", artist: "Kuami Eugene", trend: "steady", plays: "218K", positionChange: "0"},
                    {id: 7, title: "Obaa Hemaa", artist: "Sista Afia", trend: "down", plays: "212K", positionChange: "-1"},
                    {id: 8, title: "Fa Me Ko", artist: "Kofi Kinaata", trend: "up", plays: "208K", positionChange: "+3"},
                    {id: 9, title: "Down Flat", artist: "Kelvyn Boy", trend: "new", plays: "205K", positionChange: "New"},
                    {id: 10, title: "Enjoyment Minister", artist: "Shatta Wale", trend: "steady", plays: "198K", positionChange: "0"}
                ],
                "gospel": [
                    {id: 1, title: "Aseda", artist: "Nacee", trend: "steady", plays: "95K", positionChange: "0"},
                    {id: 2, title: "Ye Obua Mi", artist: "Joe Mettle", trend: "up", plays: "92K", positionChange: "+1"},
                    {id: 3, title: "Mo Ne Yo", artist: "Diana Hamilton", trend: "down", plays: "88K", positionChange: "-1"},
                    {id: 4, title: "W'asem", artist: "Diana Hamilton", trend: "new", plays: "85K", positionChange: "New"},
                    {id: 5, title: "Adom", artist: "Gifty Osei", trend: "up", plays: "82K", positionChange: "+2"},
                    {id: 6, title: "Nyame Ye", artist: "Ohemaa Mercy", trend: "steady", plays: "78K", positionChange: "0"},
                    {id: 7, title: "Boa Me", artist: "Joe Mettle", trend: "down", plays: "75K", positionChange: "-2"},
                    {id: 8, title: "Asomdwe Hen", artist: "Diana Hamilton", trend: "up", plays: "72K", positionChange: "+1"},
                    {id: 9, title: "Ote Me", artist: "Nacee", trend: "new", plays: "68K", positionChange: "New"},
                    {id: 10, title: "Mesom Jesus", artist: "Kofi Owusu Peprah", trend: "steady", plays: "65K", positionChange: "0"}
                ]
            },
            "Dar es Salaam": {
                "all": [
                    {id: 1, title: "Mi Amor", artist: "Marioo", trend: "up", plays: "285K", positionChange: "+2"},
                    {id: 2, title: "Sina Mali", artist: "Harmonize", trend: "steady", plays: "268K", positionChange: "0"},
                    {id: 3, title: "Mapenzi", artist: "Rayvanny", trend: "down", plays: "255K", positionChange: "-2"},
                    {id: 4, title: "Single Again", artist: "Diamond Platnumz", trend: "up", plays: "242K", positionChange: "+1"},
                    {id: 5, title: "Kwikwi", artist: "Zuchu", trend: "new", plays: "235K", positionChange: "New"},
                    {id: 6, title: "Moto", artist: "Diamond Platnumz", trend: "steady", plays: "228K", positionChange: "0"},
                    {id: 7, title: "Nakupenda", artist: "Jay Melody", trend: "down", plays: "222K", positionChange: "-1"},
                    {id: 8, title: "Sawa", artist: "Nandy", trend: "up", plays: "218K", positionChange: "+3"},
                    {id: 9, title: "Umenitosha", artist: "Marioo", trend: "new", plays: "215K", positionChange: "New"},
                    {id: 10, title: "Sumu", artist: "Diamond Platnumz", trend: "steady", plays: "208K", positionChange: "0"}
                ],
                "gospel": [
                    {id: 1, title: "Nipe Macho", artist: "Christina Shusho", trend: "steady", plays: "102K", positionChange: "0"},
                    {id: 2, title: "Mungu Mwenye Nguvu", artist: "Rose Muhando", trend: "up", plays: "98K", positionChange: "+1"},
                    {id: 3, title: "Nimekutana Nawe", artist: "Goodluck Gozbert", trend: "down", plays: "95K", positionChange: "-1"},
                    {id: 4, title: "Nani Kama Wewe", artist: "Baraka Da Prince", trend: "new", plays: "92K", positionChange: "New"},
                    {id: 5, title: "Nimechoka", artist: "Rose Muhando", trend: "up", plays: "88K", positionChange: "+2"},
                    {id: 6, title: "Mungu Wangu", artist: "Christina Shusho", trend: "steady", plays: "85K", positionChange: "0"},
                    {id: 7, title: "Nakupenda", artist: "Angel Benard", trend: "down", plays: "82K", positionChange: "-2"},
                    {id: 8, title: "Nipe Uwezo", artist: "Eunice Njeri", trend: "up", plays: "78K", positionChange: "+1"},
                    {id: 9, title: "Nimekubali", artist: "Rose Muhando", trend: "new", plays: "75K", positionChange: "New"},
                    {id: 10, title: "Nimeamini", artist: "Christina Shusho", trend: "steady", plays: "72K", positionChange: "0"}
                ]
            }
        };

        // Default location if geolocation fails
        const defaultLocation = "Nairobi";

        // Trending artists data
        const trendingArtists = [
            {id: 1, name: "Burna Boy", genre: "Afrofusion", location: "Lagos"},
            {id: 2, name: "Sauti Sol", genre: "Afropop", location: "Nairobi"},
            {id: 3, name: "Master KG", genre: "Amapiano", location: "Johannesburg"},
            {id: 4, name: "Tiwa Savage", genre: "Afrobeats", location: "Lagos"},
            {id: 5, name: "Sho Madjozi", genre: "Gqom", location: "Johannesburg"},
            {id: 6, name: "Diamond Platnumz", genre: "Bongo Flava", location: "Dar es Salaam"},
            {id: 7, name: "Guardian Angel", genre: "Gospel", location: "Nairobi"},
            {id: 8, name: "Mercy Chinwo", genre: "Gospel", location: "Lagos"},
            {id: 9, name: "Christina Shusho", genre: "Gospel", location: "Dar es Salaam"},
            {id: 10, name: "Joe Mettle", genre: "Gospel", location: "Accra"}
        ];

        // DOM elements
        const topSongsList = document.getElementById('top-songs');
        const gospelSongsList = document.getElementById('gospel-songs');
        const trendingArtistsList = document.getElementById('trending-artists');
        const locationDisplay = document.getElementById('current-location');
        const gospelLocationDisplay = document.getElementById('gospel-location');
        const locationSelect = document.getElementById('location-select');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.querySelector('.search-bar input');

        // Current state
        let currentLocation = defaultLocation;
        let currentCategory = "all";

        // Function to render songs
        function renderSongs(location, category) {
            const targetList = category === "gospel" ? gospelSongsList : topSongsList;
            targetList.innerHTML = '';
            
            // Show loading state
            targetList.innerHTML = `
                <div class="loading">
                    <div class="loading-spinner"></div>
                    <p>Loading ${category === "gospel" ? "gospel" : "trending"} songs...</p>
                </div>
            `;
            
            // Simulate API delay
            setTimeout(() => {
                const songs = (locationMusicData[location] && locationMusicData[location][category]) || 
                              (locationMusicData[defaultLocation] && locationMusicData[defaultLocation][category]) || 
                              [];
                
                targetList.innerHTML = '';
                
                if (songs.length === 0) {
                    targetList.innerHTML = `
                        <div style="text-align: center; padding: 20px; color: var(--light-beige);">
                            <i class="fas fa-music" style="font-size: 2rem; margin-bottom: 10px;"></i>
                            <p>No ${category === "gospel" ? "gospel" : "trending"} songs found for this location</p>
                        </div>
                    `;
                    return;
                }
                
                songs.forEach(song => {
                    const li = document.createElement('li');
                    li.setAttribute('role', 'listitem');
                    li.tabIndex = 0;
                    
                    // Determine trend class
                    let trendClass = '';
                    let trendIcon = '';
                    
                    if (song.trend === "up") {
                        trendClass = "trend-up";
                        trendIcon = "fa-arrow-up";
                    } else if (song.trend === "down") {
                        trendClass = "trend-down";
                        trendIcon = "fa-arrow-down";
                    } else if (song.trend === "new") {
                        trendClass = "trend-new";
                        trendIcon = "fa-star";
                    }
                    
                    li.innerHTML = `
                        <div class="song-info">
                            <div class="song-title">${song.title}</div>
                            <div class="song-artist">${song.artist}</div>
                        </div>
                        <div class="song-stats">
                            <div class="song-stat">
                                <i class="fas fa-headphones" aria-hidden="true"></i> ${song.plays}
                            </div>
                            <div class="trend-indicator ${trendClass}">
                                <i class="fas ${trendIcon}" aria-hidden="true"></i> ${song.positionChange}
                            </div>
                        </div>
                        <div class="song-actions">
                            <button class="action-btn" aria-label="Play ${song.title} by ${song.artist}">
                                <i class="fas fa-play" aria-hidden="true"></i>
                            </button>
                            <button class="action-btn" aria-label="Add ${song.title} to favorites">
                                <i class="fas fa-heart" aria-hidden="true"></i>
                            </button>
                        </div>
                    `;
                    
                    targetList.appendChild(li);
                });
            }, 500);
        }

        // Function to render artists
        function renderArtists() {
            trendingArtistsList.innerHTML = '';
            
            trendingArtists.forEach(artist => {
                const artistCard = document.createElement('div');
                artistCard.className = 'artist-card';
                artistCard.setAttribute('role', 'listitem');
                artistCard.tabIndex = 0;
                
                // Generate initials for avatar
                const initials = artist.name.split(' ').map(n => n[0]).join('').toUpperCase();
                
                artistCard.innerHTML = `
                    <div class="artist-avatar" style="background: linear-gradient(135deg, var(--savannah-brown), var(--acacia-green)); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem;">
                        ${initials}
                    </div>
                    <div class="artist-name">${artist.name}</div>
                    <div class="artist-genre">${artist.genre}</div>
                    <div class="artist-location">${artist.location}</div>
                `;
                
                trendingArtistsList.appendChild(artistCard);
            });
        }

        // Function to update location display
        function updateLocationDisplay(location) {
            currentLocation = location;
            locationDisplay.textContent = `${location}`;
            gospelLocationDisplay.textContent = `${location}`;
            
            // Update location select to match
            locationSelect.value = location === "auto" ? "auto" : location;
            
            // Re-render songs for current category
            renderSongs(location, currentCategory);
            renderSongs(location, "gospel");
        }

        // Function to detect location
        function detectLocation() {
            // Show loading state
            locationDisplay.textContent = "Detecting your location...";
            gospelLocationDisplay.textContent = "Detecting your location...";
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // In a real app, we'd reverse geocode to get city name
                        // For demo, we'll randomly pick from available locations
                        const locations = Object.keys(locationMusicData);
                        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
                        updateLocationDisplay(randomLocation);
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        updateLocationDisplay(defaultLocation);
                    }
                );
            } else {
                console.log("Geolocation not supported");
                updateLocationDisplay(defaultLocation);
            }
        }

        // Initialize the app
        function initApp() {
            // Set default category
            currentCategory = "all";
            
            // Render artists
            renderArtists();
            
            // Set up location selection
            if (locationSelect.value === "auto") {
                detectLocation();
            } else {
                updateLocationDisplay(locationSelect.value);
            }
            
            // Set up event listeners
            locationSelect.addEventListener('change', (e) => {
                if (e.target.value === "auto") {
                    detectLocation();
                } else {
                    updateLocationDisplay(e.target.value);
                }
            });
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active state
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Update current category
                    currentCategory = btn.dataset.category;
                    
                    // Re-render main chart (gospel has its own dedicated section)
                    if (currentCategory !== "gospel") {
                        renderSongs(currentLocation, currentCategory);
                    }
                });
            });
            
            searchBtn.addEventListener('click', () => {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`In a full implementation, we would search for: ${searchTerm}`);
                    // In real app: Filter songs/artists based on search term
                }
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    searchBtn.click();
                }
            });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', initApp);