// script.js
document.addEventListener('DOMContentLoaded', () => {
  const rackList = document.getElementById('racks');
  const addRackForm = document.getElementById('addRackForm');

  let racks = []; // Store rack data

  function renderRacks() {
    rackList.innerHTML = ''; // Clear the list
    racks.forEach(rack => {
      const listItem = document.createElement('li');
      listItem.textContent = `${rack.name} (Lat: ${rack.latitude}, Lon: ${rack.longitude})`;
      rackList.appendChild(listItem);
    });
    // Here is where you would also update the map with markers.
  }

  addRackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('rackName').value;
    const latitude = parseFloat(document.getElementById('rackLatitude').value);
    const longitude = parseFloat(document.getElementById('rackLongitude').value);

    racks.push({ name, latitude, longitude });
    renderRacks();

    // Clear the form
    addRackForm.reset();
  });

  // Example: Add initial racks (for testing)
  racks.push({ name: 'Library Rack', latitude: 41.8781, longitude: -87.6298 });
  racks.push({ name: 'Park Rack', latitude: 41.8819, longitude: -87.6322 });
  renderRacks();

  // Map Initialization (using a placeholder, you'll need a mapping library)
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = '<p>Map will be loaded here.</p>'; // Replace with your map initialization
});
