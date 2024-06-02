import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDraw from  '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9qb3N1ZSIsImEiOiJjbHZycDVsZ2cwcWthMmlvNXltZXQya2sxIn0.ULElXZA20UonSMICjccZ3w';

const Monitor = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map( {
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            projection: 'globe',
            zoom: 1,
            center: [30, 15]
        });

        const draw = new MapboxDraw();
        map.addControl(draw);

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });

        map.addControl(geocoder);

        map.on('load', () => {
            map.setFog({});
        });

        map.on('draw.create', updateArea);
        map.on('draw.delete', updateArea);
        map.on('draw.update', updateArea);

        function updateArea(e) {
            const data = draw.getAll();
            if (data.features.length > 0) {
                const area = data.features[0];
                console.log("Selected area: ", area);
            } else {
                console.log("No area slected");
            }
        }

        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Monitor;
