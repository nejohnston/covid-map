import L from 'leaflet';
/**
 * promiseToFlyTo
 * @description
 */
export function promiseToFlyTo(map, { zoom, center }) {
  return new Promise((resolve, reject) => {
    const baseError = 'Failed to fly to area';

    if (!map.flyTo) {
      reject(`${baseError}: no flyTo method on map`);
    }

    if (typeof zoom !== 'number') {
      reject(`${baseError}: zoom invalid number ${zoom}`);
    }

    const mapCenter = center || map.getCenter();
    const mapZoom = zoom || map.getZoom();

    map.flyTo(mapCenter, mapZoom, {
      duration: 2
    });

    map.once('moveend', () => {
      resolve();
    });
  });
}

/**
 * getCurrentLocation
 * @description
 */

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err)
    );
  });
}

/**
 * createTripPointsGeoJson
 */

export function createTripPointsGeoJson({ locations } = {}) {
  return {
    type: 'FeatureCollection',
    features: locations.map(
      (
        { placename, country, location = {}, image, founded, social = {} } = {}
      ) => {
        const { fb } = social;
        const { lat, lng } = location;
        return {
          type: 'Feature',
          properties: {
            placename,
            country,
            fb,
            founded,
            image
          },
          geometry: {
            type: 'Point',
            coordinates: [ lng, lat ]
          }
        };
      }
    )
  };
}

/**
 * tripStopPointToLayer
 */

export function tripStopPointToLayer(feature = {}, latlng) {
  const { properties = {} } = feature;
  const { placename, country, fb, image, founded } = properties;

  let imageString = '';
  let text = '';

  if (image) {
    imageString = `
      <span class="trip-stop-image" style="background-image: url(${image})">${placename}</span>
    `;
  }

  // Determines wether or not to display Facebook or not
  if (fb !== '') {
    text = `
    <div class="trip-stop">
      <div class="trip-stop-left-content">
        <h2>${placename} </h2>
        <h3>${country}</h3>
        <p>Founded in ${founded}</p>
        </div>
        <div class="trip-stop-right-content">
        <div class="menu-button-wrapper">
        <a href='${fb}' id='menu-button'>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.94 29.94" style="enable-background:new 0 0 29.94 29.94;" xml:space="preserve">
<g>
	<path d="M27.56,0.684H2.383C1.065,0.684,0,1.748,0,3.064v23.813c0,1.312,1.065,2.379,2.383,2.379H27.56c1.312,0,2.38-1.066,2.38-2.379V3.064C29.939,1.748,28.871,0.684,27.56,0.684z M20.125,9.167c-0.619-0.362-1.11-0.648-1.727-0.648c-0.604,0-1.12,0.151-1.384,0.405c-0.264,0.252-0.395,0.74-0.395,1.461v1.067h3.229l-0.699,2.968h-2.53v9.862h-4.056V14.42H10.67v-2.968h1.895v-1.133c0-1.193,0.143-1.907,0.425-2.496c0.281-0.587,0.826-1.241,1.584-1.611c0.757-0.369,1.877-0.555,3.036-0.555c1.188,0,2.116,0.396,3.254,0.715L20.125,9.167z"/>
	</g>
</svg>
 </a>
 </div>
 </div>
    </div>
  `;
  } else {
    text = `
    <div class="trip-stop">
      ${imageString}
      <div class="trip-stop-content">
      <div class="trip-stop-left-content">
        <h2>${placename} </h2>
        <h3>${country}</h3>
        <p>Founded in ${founded}</p>
        </div>
      </div>
    </div>
  `;
  }

  const popup = L.popup({
    maxWidth: 400
  }).setContent(text);

  const layer = L.marker(latlng, {
    icon: L.divIcon({
      className: 'icon',
      html: `<span class="icon-trip-stop"></span>`,
      iconSize: 20
    }),
    riseOnHover: true
  }).bindPopup(popup);

  return layer;
}
