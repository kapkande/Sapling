const LOCATION = { center: [27.5667,  53.9], zoom: 12 };

window.map = null;

main();
async function main() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

    map = new YMap(document.getElementById('app'), {location: LOCATION}, [
        new YMapDefaultSchemeLayer(),
        new YMapControls({position: 'right'}, [
            new YMapZoomControl({})
        ]),
    ]);
}