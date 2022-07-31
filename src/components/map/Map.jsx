import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AOS from "aos";
import "aos/dist/aos.css";

function Map() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex m-[2em] lg:items-center lg:mx-[9em] justify-center "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="rounded-sm w-[70%] md:w-[70%] mb-20">
        <MapContainer
          className="h-72 w-full lg:h-[43em]"
          // style={{ height: "40vh", width: "50vw" }}
          center={[26.664001, 87.267671]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[26.664001, 87.267671]}>
            <Popup>
              <p className="text-red-600">Huncha Digital Agency</p>
              <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
