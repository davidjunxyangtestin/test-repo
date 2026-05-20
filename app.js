// Map Configuration
const DEFAULT_LAT = 40.7128;
const DEFAULT_LNG = -74.0060;
const DEFAULT_ZOOM = 13;

// Initialize the map
let map;
let currentMarker;

function initMap() {
    // Create map instance
    map = L.map('map').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add default marker
    currentMarker = L.marker([DEFAULT_LAT, DEFAULT_LNG])
        .addTo(map)
        .bindPopup('New York City')
        .openPopup();
    
    // Update info panel
    updateInfoPanel(DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM);
    
    // Event listeners
    map.on('click', onMapClick);
    map.on('move', updateMapInfo);
    map.on('zoom', updateMapInfo);
}

// Handle map click events
function onMapClick(e) {
    const lat = e.latlng.lat.toFixed(5);
    const lng = e.latlng.lng.toFixed(5);
    
    // Update or create marker
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    
    currentMarker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();
    
    updateInfoPanel(lat, lng, map.getZoom());
}

// Update info panel
function updateInfoPanel(lat, lng, zoom) {
    document.getElementById('lat').textContent = lat;
    document.getElementById('lng').textContent = lng;
    document.getElementById('zoomLevel').textContent = zoom;
}

// Update map info on move/zoom
function updateMapInfo() {
    const center = map.getCenter();
    const lat = center.lat.toFixed(5);
    const lng = center.lng.toFixed(5);
    const zoom = map.getZoom();
    
    updateInfoPanel(lat, lng, zoom);
}

// Search location using Nominatim API
async function searchLocation(query) {
    if (!query.trim()) {
        alert('Please enter a location to search');
        return;
    }
    
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
        );
        const data = await response.json();
        
        if (data.length > 0) {
            const result = data[0];
            const lat = parseFloat(result.lat);
            const lng = parseFloat(result.lon);
            
            // Move map to location
            map.setView([lat, lng], 15);
            
            // Update marker
            if (currentMarker) {
                map.removeLayer(currentMarker);
            }
            
            currentMarker = L.marker([lat, lng])
                .addTo(map)
                .bindPopup(result.display_name)
                .openPopup();
            
            updateInfoPanel(lat, lng, map.getZoom());
        } else {
            alert('Location not found. Please try a different search term.');
        }
    } catch (error) {
        console.error('Search error:', error);
        alert('Failed to search location. Please try again.');
    }
}

// Get user's current location
function locateUser() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                // Move map to user location
                map.setView([lat, lng], 15);
                
                // Update marker
                if (currentMarker) {
                    map.removeLayer(currentMarker);
                }
                
                currentMarker = L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup('Your Location')
                    .openPopup();
                
                updateInfoPanel(lat, lng, map.getZoom());
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Unable to get your location. Please check your browser permissions.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    initMap();
    
    // Search button
    document.getElementById('searchBtn').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        searchLocation(query);
    });
    
    // Search on Enter key
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = document.getElementById('searchInput').value;
            searchLocation(query);
        }
    });
    
    // Locate button
    document.getElementById('locateBtn').addEventListener('click', locateUser);
});
