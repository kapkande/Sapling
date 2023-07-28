const LOCATION = {
    center: [27.5667,53.9000],
    zoom: 15
};



// (async function getLoc() {
//     const ipObject = await fetch(`https://api.ipify.org/?format=json`);
//     const ip = await ipObject.json();
    
//     let response = await fetch(`https://ipinfo.io/${ip.ip}?token=504d8a3587161a`);
//     let user = await response?.json();
//     console.log(user);

//    LOCATION.center = user.loc;
//    main()
// })()
// LOCATION.center = inputText

window.map = null;




main();
async function main() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls
    } = ymaps3;

    const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

    map = new YMap(document.getElementById('app'), { location: LOCATION }, [
        new YMapDefaultSchemeLayer(),
        new YMapControls({ position: 'right' }, [
            new YMapZoomControl({})
        ]),
    ]);
}