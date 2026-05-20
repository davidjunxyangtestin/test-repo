# Map Application

A simple, interactive web-based map application built with Leaflet.js and vanilla JavaScript.

## Features

- 🗺️ Interactive map with pan and zoom controls
- 📍 Click anywhere on the map to place markers
- 🔍 Search for locations by name
- 📱 Get your current location with geolocation
- 📊 Real-time display of coordinates and zoom level
- 📱 Responsive design for mobile and desktop

## Technologies Used

- **Leaflet.js** - Open-source JavaScript library for interactive maps
- **OpenStreetMap** - Free map data
- **Nominatim API** - Geocoding service for location search
- **Vanilla JavaScript** - No frameworks required
- **HTML5 & CSS3** - Modern web standards

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (optional, for local development server)

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd test-repo
   ```

2. Install dependencies (optional):
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Simple File Opening
Simply open `index.html` in your web browser.

#### Option 2: Using a Local Server (Recommended)
```bash
npm start
```
This will start a local server at `http://localhost:8080`

#### Option 3: Using Live Server (for development)
```bash
npm run dev
```
This will start a live-reloading server at `http://localhost:8080`

## Usage

### Basic Navigation
- **Pan**: Click and drag the map
- **Zoom**: Use the `+` and `-` buttons, mouse wheel, or pinch gesture
- **Place Marker**: Click anywhere on the map

### Search for a Location
1. Type a location name in the search box (e.g., "Paris", "Tokyo Tower", "Central Park")
2. Click the "Search" button or press Enter
3. The map will center on the location and place a marker

### Find Your Location
1. Click the "My Location" button
2. Allow location access when prompted by your browser
3. The map will center on your current location

### View Coordinates
The info panel at the bottom shows:
- Current center latitude and longitude
- Current zoom level

## Project Structure

```
test-repo/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── app.js              # JavaScript application logic
├── package.json        # Project metadata and dependencies
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Customization

### Change Default Location
Edit the constants in `app.js`:
```javascript
const DEFAULT_LAT = 40.7128;  // Latitude
const DEFAULT_LNG = -74.0060; // Longitude
const DEFAULT_ZOOM = 13;      // Zoom level (1-19)
```

### Change Map Style
You can use different tile providers. Edit the tile layer in `app.js`:
```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '...',
    maxZoom: 19
}).addTo(map);
```

Popular alternatives:
- CartoDB: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`
- Stamen Terrain: `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Feel free to submit issues and enhancement requests!

## Resources

- [Leaflet.js Documentation](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Nominatim API](https://nominatim.org/)