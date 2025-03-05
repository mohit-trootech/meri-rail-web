/* eslint-disable */
import { useRef, useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    getMapplsToken();
  }, []);

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
        var geoData = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description: `
          <div className="flex flex-col gap-3 items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              ${pnr.source.name}
              <span className="badge badge-xs badge-primary">${pnr.source.code}</span>
            </div>
            <p className="text-sm font-semibold">${pnr.source.name_hi}</p>
            <p className="text-xs font-semibold">${pnr.source.address}</p>
          </div>
        `,
                icon: "https://apis.mapmyindia.com/map_v3/2.png",
              },
              geometry: {
                type: "Point",
                coordinates: [
                  parseFloat(pnr.source.latitude),
                  parseFloat(pnr.source.longitude),
                ],
              },
            },
            {
              type: "Feature",
              properties: {
                description: `
          <div className="flex flex-col gap-3 items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              ${pnr.destination.name}
              <span className="badge badge-xs badge-primary">${pnr.destination.code}</span>
            </div>
            <p className="text-sm font-semibold">${pnr.destination.name_hi}</p>
            <p className="text-xs font-semibold">${pnr.destination.address}</p>
          </div>
        `,
                icon: "https://apis.mapmyindia.com/map_v3/2.png",
              },
              geometry: {
                type: "Point",
                coordinates: [
                  parseFloat(pnr.destination.latitude),
                  parseFloat(pnr.destination.longitude),
                ],
              },
            },
            {
              type: "Feature",
              properties: {
                description: `
          <div className="flex flex-col gap-3 items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              ${pnr.boarding.name}
              <span className="badge badge-xs badge-primary">${pnr.boarding.code}</span>
            </div>
            <p className="text-sm font-semibold">${pnr.boarding.name_hi}</p>
            <p className="text-xs font-semibold">${pnr.boarding.address}</p>
          </div>
        `,
                icon: "https://apis.mapmyindia.com/map_v3/2.png",
              },
              geometry: {
                type: "Point",
                coordinates: [
                  parseFloat(pnr.boarding.latitude),
                  parseFloat(pnr.boarding.longitude),
                ],
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
