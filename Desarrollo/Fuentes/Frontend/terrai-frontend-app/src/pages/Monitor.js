import React, { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Monitor = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9qb3N1ZSIsImEiOiJjbHZycDVsZ2cwcWthMmlvNXltZXQya2sxIn0.ULElXZA20UonSMICjccZ3w';

        const map = new mapboxgl.Map( {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            projection: 'globe',
            zoom: 1,
            center: [30, 15]
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.disable();

        map.on('style.load', () => {
            map.setFog({});
        });

        const secondsPerRevolution = 240;
        const mapxSpinZoom = 5;
        const slowSpinZoom = 3;
        
        let userInteracting = false;
        const spinEnabled = true;

        function spinGlobe() {
            const zoom = map.getZoom();
            if (spinEnabled && !userInteracting && zoom < mapxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
                    const zoomDif = (mapxSpinZoom - zoom) / (mapxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = map.getCenter();
                center.lng -= distancePerSecond;
                map.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        }

        map.on('mousedown', () => {
            userInteracting = true;
        });
        map.on('dragstart', () => {
            userInteracting = true;
        });

        map.on('moveend', () => {
            spinGlobe();
        });

        spinGlobe();
    }, []);

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}></div>
        </div>
    );
};

export default Monitor;
