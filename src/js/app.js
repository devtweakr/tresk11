/* COMPONENTS */
var TreskHome = {
  template: '#tresk-home'
}

var Natecaji = {
  template: '#natecaji'
}

var NajboljsiVideospot = {
  template: '#najboljsi-videospot'
}

var NajboljsaFotografija = {
  template: '#najboljsa-fotografija'
}

var NajboljsiPlakat = {
  template: '#najboljsi-plakat'
}

var NajboljsaPodoba = {
  template: '#najboljsa-podoba'
}

var NajboljInovativen = {
  template: '#najbolj-inovativen'
}

/* ROUTES */
var routes = [
  { path: '/', component: TreskHome },
  { path: '/natecaji', component: Natecaji },
  { path: '/najboljsi-videospot', component: NajboljsiVideospot },
  { path: '/najboljsa-fotografija', component: NajboljsaFotografija },
  { path: '/najboljsi-plakat', component: NajboljsiPlakat },
  { path: '/najboljsa-podoba', component: NajboljsaPodoba },
  { path: '/najbolj-inovativen', component: NajboljInovativen }
]

var router = new VueRouter({
  routes
});

/* MAIN */
var app = new Vue({
  router,
}).$mount('#app')
