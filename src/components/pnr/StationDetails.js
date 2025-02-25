import { useEffect, useState, useRef } from "react";
import { GetRequest } from "../../utils/AxiosRequest";
import { getBearerToken } from "../../utils/utils";
import { BaseUrlPath } from "../../utils/contants";
import { mappls } from "mappls-web-maps";

const mapplsClassObject = new mappls();

const API_URL = "api/secrets/mappls/";
const StationDetails = ({ pnr }) => {
  /**Station Details Daisy UI Modal */
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapplsToken, setMapplsToken] = useState(null);
  useEffect(() => {
    async function getMapplsToken() {
      const response = await GetRequest(BaseUrlPath + API_URL, getBearerToken);
      response && setMapplsToken(response.data.token);
    }
    getMapplsToken();
    const loadObject = {
      map: true,
      layer: "raster",
      version: "3.0",
      libraries: ["polydraw"],
      plugins: ["direction"],
    };
    if (mapplsToken) {
      mapplsClassObject.initialize(mapplsToken, loadObject, () => {
        const newMap = mapplsClassObject.Map({
          id: "map",
          properties: {
            center: [28.61, 77.23],
            zoomControl: true,
            location: true,
          },
        });
        var geoData = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description: "aburoad",
                icon: "https://apis.mapmyindia.com/map_v3/1.png",
              },
              geometry: {
                type: "Point",
                coordinates: [24.470775, 72.775695],
              },
            },
            {
              type: "Feature",
              properties: {
                description: "faridabad",
                icon: "https://apis.mapmyindia.com/map_v3/1.png",
              },
              geometry: {
                type: "Point",
                coordinates: [28.27189158, 77.2158203125],
              },
            },
            {
              type: "Feature",
              properties: {
                description: "delhi",
                icon: "https://apis.mapmyindia.com/map_v3/1.png",
              },
              geometry: {
                type: "Point",
                coordinates: [28.549511, 77.267825],
              },
            },
          ],
        };
        mapplsClassObject.addGeoJson({
          map: newMap,
          data: geoData,
          icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
          fitbounds: true,
        });
        newMap.on("load", () => {
          setIsMapLoaded(true);
        });
        mapRef.current = newMap;
      });
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }
  }, [mapplsToken]);

  return (
    <dialog id="pnr_station_detail_modal" className="modal">
      <div className="modal-box w-9/12 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 tranisition duration-300 ease-in-out hover:rotate-180">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Station Details</h3>
        <div className="py-4">
          <div id="map" className="w-full h-96">
            {isMapLoaded}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default StationDetails;
