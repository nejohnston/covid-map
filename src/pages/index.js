import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import { TileLayer } from 'react-leaflet';

import { createTripPointsGeoJson, tripStopPointToLayer } from 'lib/map';

import Layout from 'components/Layout';

import Map from 'components/Map';

import { locations } from 'data/locations';

const DEFAULT_ZOOM = 2.5;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement } = {}) {
    if (!leafletElement) return;

    leafletElement.eachLayer((layer) => leafletElement.removeLayer(layer));
    const tripPoints = createTripPointsGeoJson({ locations });
    const tripPointsGeoJsonLayers = new L.geoJson(tripPoints, {
      pointToLayer: tripStopPointToLayer
    });
    tripPointsGeoJsonLayers.addTo(leafletElement);
    const bounds = tripPointsGeoJsonLayers.getBounds();
    leafletElement.fitBounds(bounds);
  }

  const mapSettings = {
    defaultBaseMap: 'mapSettings',
    zoom: DEFAULT_ZOOM,
    mapEffect
  };

  return (
    <Layout pageName='home'>
      <Helmet>
        <title>#AgainstCorona</title>
      </Helmet>

      <Map {...mapSettings}>
        <TileLayer
          url={process.env.GATSBY_APP_MAP}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>
'
        />
      </Map>
    </Layout>
  );
};

export default IndexPage;
