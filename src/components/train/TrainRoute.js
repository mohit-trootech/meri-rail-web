import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { mappls } from "mappls-web-maps";
import { GetRequest } from "../../utils/AxiosRequest";
import { getBearerToken } from "../../utils/utils";
import { BaseUrlPath } from "../../utils/contants";
const API_URL = "api/secrets/mappls/";

const mapplsClassObject = new mappls();

const TrainRoute = ({ route }) => {
  const mapRef = useRef(null);
  const [mapplsToken, setMapplsToken] = useState(null);

  const getMapplsToken = useCallback(async () => {
    try {
      const response = await GetRequest(BaseUrlPath + API_URL, getBearerToken);
      if (response) {
        setMapplsToken(response.data.token);
      }
    } catch (error) {
      console.error("Failed to fetch Mappls token:", error);
    }
  }, []);

  const mapPoints = useMemo(() => {
    return route.map((item) => ({
      type: "Feature",
      properties: {
        description: `
          <div class="flex flex-col gap-3 items-start justify-center">
            <div class="flex flex-row items-center justify-start gap-2">
              ${item.station.name}
              <span class="badge badge-xs badge-primary">${item.station.code}</span>
            </div>
            <p class="text-sm font-semibold">${item.station.name_hi}</p>
            <p class="text-xs font-semibold">${item.station.address}</p>
          </div>
        `,
        icon: "https://apis.mapmyindia.com/map_v3/2.png",
      },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(item.station.latitude),
          parseFloat(item.station.longitude),
        ],
      },
    }));
  }, [route]);

  useEffect(() => {
    getMapplsToken();
  }, [getMapplsToken]);

  useEffect(() => {
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
        const geoData = {
          type: "FeatureCollection",
          features: mapPoints,
        };
        mapplsClassObject.addGeoJson({
          map: newMap,
          data: geoData,
          icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
          fitbounds: true,
        });
        mapRef.current = newMap;
      });
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }
  }, [mapplsToken, mapPoints]);

  return (
    <>
      <dialog id="train_route_map" className="modal">
        <div className="modal-box max-w-4xl w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 transition duration-150 hover:rotate-180">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Map Route!</h3>
          <div className="py-4">
            <div id="map" className="w-full h-96"></div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TrainRoute;