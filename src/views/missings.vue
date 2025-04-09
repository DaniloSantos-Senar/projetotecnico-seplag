<template>
  <div class="flex flex-col md:flex-row p-6 pb-8 bg-gray-100">
    <!-- Conteúdo principal -->
    <div class="flex-1 bg-white shadow-lg rounded-lg p-6 h-max">
      <h1 class="flex gap-1 items-center text-4xl font-bold text-gray-800 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M10.25 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" />
            <path
              d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m8.25-4.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 11.5 7.25" />
          </g>
        </svg>Buscar desaparecidos
      </h1>

      <!-- Formulário de Filtros -->
      <div>
        <form @submit.prevent="fetchPessoas" class="mb-8 bg-gray-600 text-white p-6 rounded-lg shadow">
          <h2 class="flex items-center gap-2 text-2xl font-semibold mb-4 text-white"><svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4.5 7h15M7 12h10m-7 5h4" />
            </svg>Filtrar</h2>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4">
            <div class="col-span-1 md:col-span-2 w-full">
              <label for="nome" class="block text-sm font-medium">Nome:</label>
              <input id="nome" v-model="filtros.nome" type="text" placeholder="Pesquise pelo nome..."
                class="mt-1 p-2 border-gray-300 rounded-lg shadow-sm w-full text-gray-900" />
            </div>
            <div>
              <label for="faixaIdadeInicial" class="block text-sm font-medium">Idade Inicial:</label>
              <input id="faixaIdadeInicial" v-model.number="filtros.faixaIdadeInicial" type="number"
                class="mt-1 p-2 border-gray-300 rounded-lg shadow-sm w-full text-gray-900" />
            </div>
            <div>
              <label for="faixaIdadeFinal" class="block text-sm font-medium">Idade Final:</label>
              <input id="faixaIdadeFinal" v-model.number="filtros.faixaIdadeFinal" type="number"
                class="mt-1 p-2 border-gray-300 rounded-lg shadow-sm w-full text-gray-900" />
            </div>
            <div>
              <label for="sexo" class="block text-sm font-medium">Sexo:</label>
              <select id="sexo" v-model="filtros.sexo"
                class="mt-1 py-2 border-gray-300 rounded-lg shadow-sm w-full text-gray-900">
                <option value="">Todos</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMININO">Feminino</option>
              </select>
            </div>
            <div>
              <label for="status" class="block text-sm font-medium">Status:</label>
              <select id="status" v-model="filtros.status"
                class="mt-1 py-2 border-gray-300 rounded-lg shadow-sm w-full text-gray-900">
                <option value="">Todos</option>
                <option value="DESAPARECIDO">Desaparecido</option>
                <option value="LOCALIZADO">Localizado</option>
              </select>
            </div>
          </div>
          <button type="submit"
            class="mt-5 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
            Filtrar
          </button>
        </form>

        <!-- Cards -->
        <div v-if="loading" class="text-center text-gray-500 flex flex-col items-center h-max">
          <img src="../assets/images/logo_pjc.png" alt="Logo PJC" class="mb-4 animate-pulse" />
          <span class="animate-pulse mt-8">Carregando...</span>
        </div>
        <div v-else-if="error" class="text-center text-red-500 bg-red-100 border border-red-400 rounded-lg p-4">
          <p class="text-lg font-semibold">{{ error }}</p>
        </div>
        <div v-else-if="pessoas.content.length > 0" class="w-full flex flex-col items-center mb-8">
          <div class="flex justify-end items-center w-full gap-3 mb-5">
            <label for="porPagina" class="block text-sm font-medium">Registros por página:</label>
            <select id="porPagina" v-model.number="filtros.porPagina"
              class="mt-1 py-2 border-gray-300 rounded-lg shadow-sm text-gray-900" @change="fetchPessoas">
              <option :value="10">10</option>
              <option :value="25">25</option>
              <option :value="50">50</option>
              <option :value="100">100</option>
            </select>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div v-for="pessoa in pessoas.content" :key="pessoa.id"
              class="rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-gray-200 transition cursor-pointer bg-gray-50 text-gray-800"
              @click="goToDetalhes(pessoa.id)">
              <div class="overflow-hidden rounded-t-lg h-1/2 flex justify-center items-center">
                <img v-if="pessoa.urlFoto" :src="pessoa.urlFoto" alt="Foto"
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 mb-4"
                  @error="pessoa.urlFoto = null" />
                <svg v-else
                  class="w-full h-3/5 object-contain text-gray-300 mb-4 transition-transform duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                  <path fill="currentColor"
                    d="M1408 1600v-320h128v320zm0 192v-128h128v128zM0 128h2048v1434l-128-256V256H128v677l448-447l572 572l-60 120l-512-512l-448 449v421h781l-64 128H0zm1600 384q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M896 1920l576-1152l576 1152zm181-112h790l-395-790z" />
                </svg>
              </div>
              <div class="flex flex-col my-2">
                <label class="block text-sm text-gray-500">Nome:</label>
                <h2 class="text-xl font-bold">{{ pessoa.nome }}</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm text-gray-500">Sexo:</label>
                  <p class="text-base sm:text-lg font-semibold">{{ pessoa.sexo }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-500">Idade:</label>
                  <p class="text-base sm:text-lg font-semibold">{{ pessoa.idade }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-500">Vivo:</label>
                  <p class="text-base sm:text-lg font-semibold">{{ pessoa.vivo ? 'Sim' : 'Não' }}</p>
                </div>
                <div class="col-span-3">
                  <label class="block text-sm text-gray-500">Data do Desaparecimento:</label>
                  <p class="text-base sm:text-lg font-semibold"> {{ new
                    Date(pessoa.ultimaOcorrencia.dtDesaparecimento).toLocaleString('pt-BR', {
                      day: '2-digit', month:
                        '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    }) }}
                  </p>
                </div>
                <div class="col-span-3">
                  <label class="block text-sm text-gray-500">Local de Desaparecimento:</label>
                  <p class="text-base sm:text-lg font-semibold">{{ pessoa.ultimaOcorrencia.localDesaparecimentoConcat }}
                  </p>
                </div>
                <div
                  v-if="pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO && pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido"
                  class="col-span-3">
                  <label class="block text-sm text-gray-500">Vestimentas:</label>
                  <p class="text-base sm:text-lg font-semibold">{{
                    pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido }}
                  </p>
                </div>
                <div
                  v-if="pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO && pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao"
                  class="col-span-3">
                  <label class="block text-sm text-gray-500">informação:</label>
                  <p class="text-base sm:text-lg font-semibold">{{
                    pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao }}
                  </p>
                </div>
                <div class="col-span-3"
                  :class="pessoa.ultimaOcorrencia.dataLocalizacao ? 'bg-green-100 p-2 rounded' : 'bg-red-100 p-2 rounded'">
                  <label class="block text-sm text-gray-500">Data de Localização:</label>
                  <p class="text-base sm:text-lg font-semibold">
                    {{ pessoa.ultimaOcorrencia.dataLocalizacao ? `Encontrado(a) em:
                    ${pessoa.ultimaOcorrencia.dataLocalizacao}` : 'Não localizado(a)' }}
                  </p>
                </div>
              </div>
            </div>


          </div>
          <!-- Paginação -->
          <div class="w-full mt-8 flex justify-center items-center space-x-4">
            <button @click="changePage(-1)" :disabled="filtros.pagina === 0"
              class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50">
              Anterior
            </button>
            <span class="text-gray-700">
              Página {{ filtros.pagina + 1 }} de {{ pessoas.totalPages }}
            </span>
            <button @click="changePage(1)" :disabled="filtros.pagina + 1 >= pessoas.totalPages"
              class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50">
              Próximo
            </button>
          </div>
        </div>

        <div v-else class="flex flex-col items-center text-gray-500 mt-10 justify-center h-96">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <mask id="lineMdFilterOffTwotone0">
              <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56"
                  d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5Z">
                  <animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3" />
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
                </path>
                <path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26"
                  transform="rotate(45 12 12)">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.4s" values="28;0" />
                </path>
                <path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.4s" values="28;0" />
                </path>
              </g>
            </mask>
            <rect width="24" height="24" fill="currentColor" mask="url(#lineMdFilterOffTwotone0)" />
          </svg>
          <p class="text-lg font-semibold">Nenhum registro encontrado</p>
          <p class="text-sm">Tente ajustar os filtros para encontrar resultados.</p>
        </div>



      </div>

      <MoreInfo ref="moreInfo" />
    </div>

    <!-- Atualizações Recentes -->
    <div class="w-full md:w-1/4 mt-6 md:mt-0 md:ml-6 hidden md:block">
      <div class="shadow-lg rounded-lg p-6 bg-gray-100">
        <div class="flex gap-2 text-xl font-bold mb-4 text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
            <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1">
              <animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </rect>
            <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1">
              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </rect>
          </svg>Atualizações Recentes
        </div>
        <div v-for="pessoa in recentes" :key="pessoa.id" class="mb-6 cursor-pointer" @click="goToDetalhes(pessoa.id)">
          <img v-if="pessoa.urlFoto" :src="pessoa.urlFoto" alt="Foto"
            class="w-full h-max object-cover rounded-lg mb-2" />
          <svg v-else class="w-full h-32 object-contain text-gray-300 mb-2" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              color="currentColor">
              <circle cx="16.5" cy="7.5" r="1.5" />
              <path
                d="M2 14.135q1.001-.135 2.016-.132c2.856-.056 5.642.77 7.86 2.331c2.06 1.448 3.505 3.44 4.124 5.666m-2.5-4.5c1-1 1.677-1.223 2.5-1.5" />
              <path
                d="M20 20.213C18.601 21.5 16.363 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.363 0-6.601 1.287-8M20 16c.543 0 1.048.294 1.397.564c.103-1.195.103-2.681.103-4.564c0-4.478 0-6.718-1.391-8.109S16.479 2.5 12 2.5c-2.41 0-4.17 0-5.5.217M2 2l20 20" />
            </g>
          </svg>
          <h3 class="text-lg font-bold text-gray-800">{{ pessoa.nome }}</h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MoreInfo from "../components/moreInfo.vue";
import apiPJC from "@/axiosPJC";

export default {
  name: "Home",
  components: {
    MoreInfo,
  },
  data() {
    return {
      pessoas: [],
      recentes: [],
      estatisticas: {
        quantPessoasDesaparecidas: 0,
        quantPessoasEncontradas: 0,
      },
      loading: true,
      error: null,
      filtros: {
        nome: "",
        faixaIdadeInicial: 0,
        faixaIdadeFinal: 0,
        sexo: "",
        status: "",
        pagina: 0,
        porPagina: 25,
      },
    };
  },
  mounted() {
    this.fetchPessoas();
    this.fetchRecentes();
    this.fetchEstatisticas();
    setInterval(this.fetchRecentes, 50000);
  },
  methods: {
    async fetchPessoas() {
      this.loading = true;
      this.error = null;
      try {
        const response = await apiPJC.get("/pessoas/aberto/filtro", {
          params: this.filtros,
        });
        this.pessoas = response.data;
      } catch (err) {
        this.error = "Erro ao carregar os dados. atualize a página.";
      } finally {
        this.loading = false;
      }
    },
    async fetchRecentes() {
      try {
        const response = await apiPJC.get("/pessoas/aberto/dinamico", {
          params: { registros: 7 },
        });
        this.recentes = response.data;
      } catch (err) {
        console.error("Erro ao carregar atualizações recentes:", err);
      }
    },
    async fetchEstatisticas() {
      try {
        const response = await apiPJC.get("/pessoas/aberto/estatistico");
        this.estatisticas = response.data;
      } catch (err) {
        console.error("Erro ao carregar estatísticas:", err);
      }
    },
    changePage(direction) {
      this.filtros.pagina += direction;
      this.fetchPessoas();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    goToDetalhes(id) {
      this.$refs.moreInfo.openModal(id);
    },
  },
};
</script>
