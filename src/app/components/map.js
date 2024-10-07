'use client'

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap(){
    return (
        <div className='w-full'>
            <YMaps>
                <Map 
                    width={'full'}
                    height={551}
                    defaultState={{
                        center: [56.581660, 85.133452],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}>
                    <Placemark defaultGeometry={[56.581660, 85.133452]} />
                </Map>
            </YMaps>
        </div>
    )
}