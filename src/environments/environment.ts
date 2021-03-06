// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  productoURL: 'http://localhost:8080/producto/',
  authURL: 'http://localhost:8080/auth/',
  clienteURL: 'http://localhost:8080/clientes/',
  maritimaURL: 'http://localhost:8080/maritima/',
  envioURL: 'http://localhost:8080/envio/',
  terrestreURL: 'http://localhost:8080/terrestre/',
  changePasswordURL: 'http://localhost:8080/email-password/',
  apiUrl: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
