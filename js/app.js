/* COMPONENTS */
const TreskHome = {
  template: '#tresk-home'
}

const Natecaji = {
  template: '#natecaji'
}

const NajboljsiVideospot = {
  template: '#najboljsi-videospot'
}

const NajboljsaFotografija = {
  template: '#najboljsa-fotografija'
}

const NajboljsaPodoba = {
  template: '#najboljsa-podoba'
}

const NajboljsiPlakat = {
  template: '#najboljsi-plakat'
}

const NajboljInovativen = {
  template: '#najbolj-inovativen'
}

/* ROUTES */
const routes = [
  { path: '/', component: TreskHome },
  { path: '/natecaji', component: Natecaji },
  { path: '/najboljsi-videospot', component: NajboljsiVideospot },
  { path: '/najboljsa-fotografija', component: NajboljsaFotografija },
  { path: '/najboljsa-podoba', component: NajboljsaPodoba },
  { path: '/najboljsi-plakat', component: NajboljsiPlakat },
  { path: '/najbolj-inovativen', component: NajboljInovativen }
]

const router = new VueRouter({
  routes
});

/* MAIN */
const app = new Vue({
  router,
}).$mount('#app')

function natecajiOpen() { 
  window.location = 'index.html/natecaji' 
} 