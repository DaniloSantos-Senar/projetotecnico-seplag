<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center rounded-xl">
    <!-- Background overlay -->
    <div @click="closeModal()" class="overflow-hidden absolute inset-0 bg-gray-600 opacity-75 pt-10"></div>

    <!-- Modal content -->
    <div
      class="bg-white rounded-xl mt-20 h-5/6 shadow-lg w-11/12 sm:w-10/12 md:w-2/3 lg:w-1/2 relative z-10 flex flex-col md:flex-row">
      <button @click="closeModal()" class="absolute top-4 right-4 text-red-500 hover:text-red-700 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <!-- Left Section: Fixed Image -->
      <div v-if="data" class="w-full md:w-1/2 h-1/3 md:h-full flex items-center justify-center">
        <img v-if="data.urlFoto" :src="data.urlFoto" alt="Foto da pessoa"
          class="w-full h-full rounded-l-xl shadow-lg object-cover" @error="data.urlFoto = null" />
        <div v-else class="w-full h-max p-10 sm:p-20 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
          <svg class="w-full h-max object-contain text-gray-300 mb-4 transition-transform duration-300 hover:scale-110"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
            <path fill="currentColor"
              d="M1408 1600v-320h128v320zm0 192v-128h128v128zM0 128h2048v1434l-128-256V256H128v677l448-447l572 572l-60 120l-512-512l-448 449v421h781l-64 128H0zm1600 384q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M896 1920l576-1152l576 1152zm181-112h790l-395-790z" />
          </svg>
        </div>
      </div>
      <!-- Right Section: Scrollable Content -->
      <div v-if="data" class="w-full md:w-1/2 h-2/3 md:h-full overflow-y-auto p-4 sm:p-6">
        <div class="mb-2">
          <label class="block text-sm text-gray-500">Nome:</label>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{{ data.nome }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm text-gray-500">Sexo:</label>
            <p class="text-base sm:text-lg font-semibold">{{ data.sexo }}</p>
          </div>
          <div>
            <label class="block text-sm text-gray-500">Idade:</label>
            <p class="text-base sm:text-lg font-semibold">{{ data.idade }}</p>
          </div>

          <div>
            <label class="block text-sm text-gray-500">Vivo:</label>
            <p class="text-base sm:text-lg font-semibold">{{ data.vivo ? 'Sim' : 'Não' }}</p>
          </div>
          <div>
            <label class="block text-sm text-gray-500">Data do Desaparecimento:</label>
            <p class="text-base sm:text-lg font-semibold">

              {{ new
                Date(data.ultimaOcorrencia.dtDesaparecimento).toLocaleString('pt-BR', {
                  day: '2-digit', month:
                    '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                }) }}</p>
          </div>
          <div>
            <label class="block text-sm text-gray-500">Local de Desaparecimento:</label>
            <p class="text-base sm:text-lg font-semibold">{{ data.ultimaOcorrencia.localDesaparecimentoConcat }}</p>
          </div>
          <div :class="data.ultimaOcorrencia.dataLocalizacao ? 'bg-green-100 p-2 rounded' : 'bg-red-100 p-2 rounded'">
            <label class="block text-sm text-gray-500">Data de Localização:</label>
            <p class="text-base sm:text-lg font-semibold">
              {{ data.ultimaOcorrencia.dataLocalizacao ? `Encontrado em: ${data.ultimaOcorrencia.dataLocalizacao}` :
                'Não localizado(a)' }}
            </p>
          </div>

        </div>

        <Occurrences :occurrenceID="data.ultimaOcorrencia.ocoId" />
      </div>
    </div>
  </div>
</template>

<script>
import Occurrences from "../components/occurrences.vue";
import apiPJC from "@/axiosPJC";

export default {
  name: "moreInfo",

  components: {
    Occurrences,
  },
  data() {
    return {
      isOpen: false,
      isLoading: true,
      data: null,
    };
  },
  methods: {
    async openModal(id) {
      this.isOpen = true;
      this.isLoading = true;

      try {
        const response = await apiPJC.get(`https://abitus-api.geia.vip/v1/pessoas/${id}`);
        this.data = response.data;
        console.log(this.data);

        document.body.classList.add("overflow-hidden"); // Bloqueia a rolagem
      } catch (err) {
        console.error("Erro ao consultar a API:", err);
        this.isOpen = false;
      } finally {
        this.isLoading = false;
      }
    },
    closeModal() {
      this.isOpen = false;
      this.data = null;
      document.body.classList.remove("overflow-hidden"); // Libera a rolagem
    },
  },
};
</script>

<style></style>
