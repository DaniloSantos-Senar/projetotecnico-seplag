<template>
  <header class="bg-gray-800 text-white py-4 w-full fixed top-0 left-0 z-10">
    <div class="mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div class="flex items-center space-x-4">
        <router-link :to="{ name: 'Home' }">
          <img src="./assets/images/logo_pjc.png" alt="Logo Polícia Judiciária Civil de MT"
            class="w-12 md:w-16 animate-spin-slow transition-transform duration-500 ease-in-out transform hover:scale-110">
        </router-link>
        <div class="text-center md:text-left">
          <h1 class="text-base md:text-lg font-bold">POLÍCIA JUDICIÁRIA CIVIL</h1>
          <h3 class="text-xs md:text-sm">Estado de Mato Grosso</h3>
        </div>
      </div>
      <div class="hidden md:block text-center md:text-right">
        <p class="text-xs md:text-sm">Contato: (65) 99999-9999</p>
        <p class="text-xs md:text-sm">Email: contato@pjc.mt.gov.br</p>
      </div>
    </div>
  </header>

  <div id="app">
    <router-view></router-view>
  </div>

  <footer class="bg-gray-800 text-white py-4 mt-auto fixed bottom-0 left-0 w-full z-10">
    <div class="mx-auto flex items-center justify-center gap-5">
      <span class="text-xs md:text-sm text-center md:text-left">Projeto técnico - Seletivo SEPLAG</span>
      <span class="text-xs md:text-sm text-center md:text-left">© 2025 Danilo Santos</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.flex-grow {
  flex: 1;
}

/* Ajustes para telas pequenas */
@media (max-width: 768px) {
  #app {
    padding-top: 3rem;
  }
}

/* Ajustes para telas médias */
@media (min-width: 769px) and (max-width: 1024px) {
  #app {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* Ajustes para telas grandes */
@media (min-width: 1025px) {
  #app {
    padding-top: 3.5rem;
  }
}
</style>
