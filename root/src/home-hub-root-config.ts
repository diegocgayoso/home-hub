import { registerApplication, start, LifeCycles, checkActivityFunctions, getAppNames, getAppStatus, getMountedApps } from "single-spa";

// Navbar
registerApplication({
	name: '@home-hub/navbar',
	app: () => System.import<LifeCycles>('@home-hub/navbar'),
	activeWhen: ['/'],
});
//HelloWorld
// registerApplication({
// 	name: '@home-hub/hello-world',
// 	app: () => System.import<LifeCycles>('@home-hub/hello-world'),
// 	activeWhen: (location) => location.pathname.includes('/'),
// });
//Dashboard
registerApplication({
	name: '@home-hub/dashboard',
	app: () => System.import<LifeCycles>('@home-hub/dashboard'),
	activeWhen: ['/'],
});
start({
	urlRerouteOnly: true,
});

