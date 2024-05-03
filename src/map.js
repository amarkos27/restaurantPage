import { Loader } from '@googlemaps/js-api-loader';

async function findPlaces(map, center, existingMarkers = null) {
  const { Place } = await google.maps.importLibrary('places');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
  const markerArray = [];

  const request = {
    textQuery: 'KFC',
    fields: ['location'],
    includedType: 'restaurant',
    locationBias: center,
    isOpenNow: true,
    language: 'en-US',
    maxResultCount: 10,
    region: 'us',
    useStrictTypeFiltering: false,
  };

  if (existingMarkers) {
    existingMarkers.forEach((marker) => {
      marker.map = null;
    });
  }

  const { places } = await Place.searchByText(request);

  if (places.length) {
    const { LatLngBounds } = await google.maps.importLibrary('core');
    const bounds = new LatLngBounds();

    places.forEach((place) => {
      const markerView = new AdvancedMarkerElement({
        map,
        position: place.location,
        title: 'Los Pollos Hermanos',
      });

      markerArray.push(markerView);
      bounds.extend(place.location);
    });
    map.fitBounds(bounds);

    return markerArray;
  } else {
    console.log('No results');
  }
}

async function updateMarkers(map) {
  let existingMarkers;
  let previousCenter = map.getCenter();
  const { spherical } = await google.maps.importLibrary('geometry');

  // Do this to extract markers from async function
  (async () => {
    existingMarkers = await findPlaces(map, map.getCenter());
  })();

  map.addListener('dragend', async () => {
    let p1 = previousCenter;
    let p2 = map.getCenter();
    if (calcDistance(p1, p2) > 7) {
      existingMarkers = await findPlaces(map, map.getCenter(), existingMarkers);

      previousCenter = p2;
    }

    // Get distance in miles
    function calcDistance(p1, p2) {
      return (spherical.computeDistanceBetween(p1, p2) / 1609).toFixed(2);
    }
  });
}

export default function createMap() {
  let map;
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map');

  const loader = new Loader({
    apiKey: 'AIzaSyAoT-2jehAdGYCLVFbaxf3L8zhlDFOOp_k',
    version: 'weekly',
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary('maps');

    map = new Map(mapContainer, {
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 8,
      mapId: 'POLLOS_MAP',
      mapTypeControl: false,
    });

    updateMarkers(map);
  });

  return mapContainer;
}
