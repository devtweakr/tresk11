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

const NajboljsiPlakat = {
  template: '#najboljsi-plakat'
}

const NajboljsaPodoba = {
  template: '#najboljsa-podoba'
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
  { path: '/najboljsi-plakat', component: NajboljsiPlakat },
  { path: '/najboljsa-podoba', component: NajboljsaPodoba },
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