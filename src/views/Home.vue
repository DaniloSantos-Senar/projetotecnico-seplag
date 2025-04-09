<template>
  <div class="flex flex-col lg:flex-row bg-gray-100 h-auto lg:h-max" style="height: 96%;">
    <div
      class="flex flex-col gap-10 justify-center items-center text-center lg:text-left px-4 py-5 sm:px-8 md:px-12 lg:w-1/2">
      <div class="flex itens-start justify-start flex-col gap-2 w-full">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 md:text-4xl">
          Ajude a localizar <span class="text-gray-900 uppercase">pessoas desaparecidas</span>
        </h2>
        <p class="mt-2 text-sm text-gray-500 md:text-base">
          Participe na missão de reunir famílias e renovar esperanças. Consulte informações sobre pessoas
          desaparecidas ou registre um novo caso.
        </p>
        <p class="text-lg font-bold text-gray-700">
          Atualmente, <span class="text-red-600 text-2xl font-extrabold">{{ estatisticas.quantPessoasDesaparecidas
          }}</span>
          pessoas
          estão
          desaparecidas, mas graças à colaboração de todos,
          <span class="text-green-800 text-2xl font-extrabold">{{ estatisticas.quantPessoasEncontradas }}</span> já
          foram
          encontradas e
          reunidas com suas famílias.
        </p>

        <div class="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 gap-4">
          <router-link :to="{ name: 'missings' }"
            class="flex items-center gap-2 px-4 py-3 bg-gray-600 text-gray-200 font-semibold rounded hover:bg-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M10.25 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" />
                <path
                  d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m8.25-4.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 11.5 7.25" />
              </g>
            </svg>
            Procurar Pessoas
          </router-link>
          <router-link :to="{ name: 'registerMissing' }"
            class="flex items-center gap-2 px-4 py-3 bg-gray-300 text-gray-900 font-semibold rounded hover:bg-green-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path
                  d="M21.25 8.814V6.758a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-2.056m-18.5 0v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 6.758v2.056" />
                <path
                  d="M18.177 22.175c0-2.92-3.256-5.294-6.177-5.294s-6.176 2.373-6.176 5.294M12 14.234a3.53 3.53 0 1 0 0-7.06a3.53 3.53 0 0 0 0 7.06" />
              </g>
            </svg>
            Registrar Caso
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2" style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
      <div v-if="recentes.length > 0" class="h-full bg-cover bg-center relative"
        :style="{ backgroundImage: `url(${recentes[activeIndex].urlFoto})` }">
        <div
          class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-gray-800 to-transparent text-white text-center py-8">
          <div class="text-xl font-extrabold mt-10">{{ recentes[activeIndex].nome }}</div>
          <div class="text-sm font-light mt-1">
            Local do desaparecimento: <span class="font-medium">{{
              recentes[activeIndex].ultimaOcorrencia.localDesaparecimentoConcat }}</span>
          </div>
        </div>
        <transition name="fade">
          <div class="h-full bg-black opacity-25"></div>
        </transition>
      </div>
      <div v-else class="h-full bg-cover bg-center"
        style="background-image: url(https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)">
        <transition name="fade">
          <div class="h-full bg-black opacity-25"></div>
        </transition>
      </div>
    </div>
    <div class="lg:hidden flex flex-col gap-4 overflow-y-auto p-4">
      <div v-for="(item, index) in recentes" @click="goToDetalhes(item.id)" :key="index"
        class="flex items-center p-4 bg-white shadow rounded-lg">
        <div class="w-16 h-16 flex-shrink-0 rounded-full bg-cover bg-center mr-4"
          :style="{ backgroundImage: `url(${item.urlFoto})` }">
        </div>
        <div>
          <h4 class="text-lg font-medium text-red-600">{{ item.nome }}</h4>
          <p class="mt-1 text-sm text-gray-500">Local do desaparecimento: {{
            item.ultimaOcorrencia.localDesaparecimentoConcat }}</p>
        </div>
      </div>
    </div>
  </div>

  <MoreInfo ref="moreInfo" />
</template>



<script>
import apiPJC from "@/axiosPJC";
import MoreInfo from "../components/moreInfo.vue";

export default {
  name: "Home",
  components: {
    MoreInfo,
  },
  data() {
    return {
      estatisticas: [],
      recentes: [],
      activeIndex: 0,
      intervalId: null,
    };
  },
  methods: {
    async fetchRecentes() {
      try {
        const response = await apiPJC.get("/pessoas/aberto/dinamico", {
          params: { registros: 10 }, // Solicita 10 registros
        });
        this.recentes = response.data;
      } catch (err) {
        console.error("Erro ao carregar atualizações recentes:", err);
      }
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.recentes.length;
      }, 5000); // Altera o índice a cada 5 segundos
    },
    async fetchEstatisticas() {
      try {
        const response = await apiPJC.get("/pessoas/aberto/estatistico");
        this.estatisticas = response.data;

      } catch (err) {
        console.error("Erro ao carregar estatísticas:", err);
      }
    },
    goToDetalhes(id) {
      this.$refs.moreInfo.openModal(id);
    },
  },
  mounted() {
    this.fetchRecentes().then(() => {
      if (this.recentes.length > 0) {
        this.startCarousel();
      }
    });
    this.fetchEstatisticas();
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpa o intervalo ao destruir o componente
    }
  },
};
</script>
