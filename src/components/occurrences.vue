<template>
  <div class="flex flex-col gap-3 my-6">
    <button v-if="!isOpen" @click="isOpen = true"
      class="flex justify-center items-center gap-2 w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-gray-950 transition text-xl font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
        <path fill="currentColor"
          d="M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1zm-1.688 1.625l-9.03 8.938a1 1 0 0 0-.126.125l-.062.031a1 1 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.98.98 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53z" />
      </svg>
      Registrar informação...
    </button>

    <div v-if="isOpen" class="my-10 w-full text-white py-2 px-4 rounded-lg transition"
      :class="{ 'bg-green-700': !isOpen, 'bg-gray-600': isOpen }">

      <div class="flex items-center justify-between mb-2">
        <h2 class="flex gap-2 items-center text-xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
            <path fill="currentColor"
              d="M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1zm-1.688 1.625l-9.03 8.938a1 1 0 0 0-.126.125l-.062.031a1 1 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.98.98 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53z" />
          </svg>
          Registrar informação
        </h2>
        <button @click="isOpen = false" id="buttonSend" class="p-2 rounded-full hover:text-red-700 transition ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>


      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <div class="mb-4">
          <label for="description" class="flex items-center font-medium"><svg xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
            </svg>Informações</label>

          <textarea id="description" v-model="formData.description" class="w-full mt-2 p-2 border rounded text-gray-900"
            placeholder="Adicione detalhes sobre a localização ou informações que possam ajudar na busca..."></textarea>
        </div>


        <div class="mb-4">
          <label for="date" class="flex items-center gap-1 font-medium"><svg xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 21 21">
              <g fill="none" fill-rule="evenodd">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  d="M4.5 2.5h12a2 2 0 0 1 2 2v11.99a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2m-1.841 4H18.5"
                  stroke-width="1" />
                <path fill="currentColor"
                  d="M6.816 13.155v-1.079h.88c.668 0 1.122-.395 1.122-.972c0-.527-.415-.927-1.103-.927c-.713 0-1.152.366-1.201.996H5.15C5.201 9.874 6.201 9 7.788 9c1.563 0 2.432.864 2.427 1.895c-.005.854-.542 1.416-1.299 1.601v.093c.981.141 1.577.766 1.577 1.709c0 1.235-1.162 2.11-2.754 2.11S5.063 15.537 5 14.204h1.411c.044.596.552.977 1.309.977c.747 0 1.27-.406 1.27-1.016c0-.625-.489-1.01-1.28-1.01zm6.7 3.072v-5.611h-.087L11.7 11.808v-1.372l1.821-1.255h1.47v7.046z" />
              </g>
            </svg>Data do registro</label>
          <input id="date" type="date" v-model="formData.date" class="w-full mt-1 p-2 border rounded text-gray-900" />
        </div>
        <div class="mb-4">
          <label for="photo" class="flex items-center font-medium mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"
                d="M216.08 192v143.55a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 0 0 191 0V159.44" />
            </svg> Anexos
          </label>
          <div v-if="formData.files.length" class="flex flex-col gap-2">
            <div v-for="(file, index) in formData.files" :key="index"
              class="flex justify-between text-white items-center rounded-lg bg-gray-400 hover:bg-gray-300 hover:text-gray-900 px-2 py-4">
              <p class="font-medium">{{ file.name }}</p>
              <button @click="removeFile(index)" type="button"
                class="text-red-600 hover:text-red-800 transition font-medium">
                Remover
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center w-full mt-3">
            <label for="photo"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-green-600 transition">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mb-4">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5l-5 5m5-5v12" />
                </svg>
                <span class="mb-2 text-sm text-gray-500 font-semibold">Clique para enviar anexos</span>
                <p class="text-xs text-gray-500">PNG, JPG (máx. 10MB cada)</p>
              </div>
              <input id="photo" type="file" class="hidden" accept="image/png, image/jpeg" multiple
                @change="handleFileUpload" />
            </label>
          </div>
        </div>

        <button type="submit"
          class="flex gap-2 justify-center w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition my-2">
          Enviar informações <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="none" stroke="currentColor" stroke-linejoin="round"
              d="m5 4l4.5 3L14 4M2 8.5h5m-4 2h5m-3.5 2h10v-9h-10v3H1" stroke-width="1" />
          </svg>
        </button>
      </form>
    </div>

    <div v-if="occurrences.length" class="h-[39rem] overflow-y-auto grid grid-cols-1 gap-6">
      <div class="flex items-center gap-1 mt-2 text-green-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9" />
        </svg>
        <span class="text-xl font-bold">Ultimas informações</span>
      </div>
      <div v-for="occurrence in occurrences" :key="occurrence.id" class="p-4 border rounded-lg shadow bg-gray-100">
        <span v-if="occurrence.isRecente"
          class="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          informação mais recente
        </span>

        <p class="text-lg mb-2"><strong>Informação:</strong> {{ occurrence.informacao }}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Data:</strong> {{ new
          Date(occurrence.data).toLocaleString('pt-BR', {
            day: '2-digit', month:
              '2-digit', year: 'numeric',
          }) }}</p>
        <div v-if="occurrence.anexos && occurrence.anexos.length" class="mt-4">
          <p class="font-medium mb-2"><strong>imagens:</strong></p>
          <div class="flex flex-wrap gap-4">
            <div v-for="anexo in occurrence.anexos" :key="anexo.id" class="flex flex-col items-center">
              <a :href="anexo" target="_blank" rel="noopener noreferrer">
                <img :src="anexo" alt="Anexo" class="w-32 h-32 rounded border mb-2" />
              </a>
              <p class="text-sm text-gray-500">{{ anexo.descricao }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500">Carregando ou nenhuma ocorrência encontrada...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Occurrences",

  data() {
    return {
      isOpen: false,
      occurrences: [],
      formData: {
        date: "",
        description: "",
        files: []
      },
    };
  },
  props: {
    occurrenceID: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.fetchOccurrences();
  },
  methods: {
    async fetchOccurrences() {
      try {
        const response = await axios.get(
          `https://abitus-api.geia.vip/v1/ocorrencias/informacoes-desaparecido?ocorrenciaId=${this.occurrenceID}`
        );

        this.occurrences = response.data
          .sort((a, b) => b.id - a.id)
          .map((occurrence, index) => ({
            ...occurrence,
            isRecente: index === 0,
          }));

      } catch (error) {
        console.error("Erro ao buscar ocorrências:", error);
      }
    },

    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      const validTypes = ["image/png", "image/jpeg"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      files.forEach((file) => {
        if (!validTypes.includes(file.type)) {
          Swal.fire({
            icon: "error",
            title: "Formato inválido!",
            text: "Apenas arquivos PNG e JPG são permitidos.",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
          });
          return;
        }

        if (file.size > maxSize) {
          Swal.fire({
            icon: "error",
            title: "Arquivo muito grande!",
            text: "O tamanho máximo permitido é 10MB.",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
          });
          return;
        }

        this.formData.files.push(file);
      });
    },

    removeFile(index) {
      this.formData.files.splice(index, 1);
    },

    async handleSubmit() {
      if (!this.formData.description.trim() || !this.formData.date.trim()) {
        Swal.fire({
          icon: "error",
          title: "Campos obrigatórios!",
          text: "Os campos 'Informações' e 'Data do registro' não podem estar vazios.",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        return;
      }

      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(this.formData.date) || isNaN(new Date(this.formData.date).getTime())) {
        Swal.fire({
          icon: "error",
          title: "Data inválida!",
          text: "Por favor, insira uma data válida no formato AAAA-MM-DD.",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        return;
      }
      document.getElementById("buttonSend").disabled = true;

      const formData = new FormData();
      formData.append("informacao", this.formData.description);
      formData.append("descricao", this.formData.description);
      formData.append("data", this.formData.date);
      formData.append("ocoId", this.occurrenceID);

      this.formData.files.forEach((file) => {
        formData.append("files", file, file.name);
      });

      try {
        await axios.post(
          `https://abitus-api.geia.vip/v1/ocorrencias/informacoes-desaparecido`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.fetchOccurrences(); // Refresh the occurrences list
        this.isOpen = false; // Close the modal
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Informação registrada com sucesso.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });

        this.resetData();
      } catch (error) {
        document.getElementById("buttonSend").disabled = false;

        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Ocorreu um erro ao registrar a ocorrência.",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
      }
    },

    resetData() {
      document.getElementById("buttonSend").disabled = false;

      this.formData = {
        date: "",
        description: "",
        files: []
      };
    },
  },
};
</script>

<style></style>
