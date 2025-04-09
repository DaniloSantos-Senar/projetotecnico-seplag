<template>
  <div class="container mx-auto p-6 bg-gray-300">
    <form @submit.prevent="submitForm" class="space-y-8">
      <!-- Informações Gerais -->
      <div>
        <h2 class="text-xl font-bold mb-4">Informações Gerais</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="protocolo" class="block text-sm font-medium text-gray-700">Protocolo:</label>
            <input type="text" id="protocolo" v-model="formData.protocolo"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="numAip" class="block text-sm font-medium text-gray-700">Número AIP:</label>
            <input type="text" id="numAip" v-model="formData.numAip"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="numIp" class="block text-sm font-medium text-gray-700">Número IP:</label>
            <input type="text" id="numIp" v-model="formData.numIp"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="boNumero" class="block text-sm font-medium text-gray-700">Número BO:</label>
            <input type="text" id="boNumero" v-model="formData.boNumero"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="origemBO" class="block text-sm font-medium text-gray-700">Origem BO:</label>
            <input type="text" id="origemBO" v-model="formData.origemBO"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="codBO" class="block text-sm font-medium text-gray-700">Código BO:</label>
            <input type="number" id="codBO" v-model="formData.codBO"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="dataHoraFato" class="block text-sm font-medium text-gray-700">Data/Hora do Fato:</label>
            <input type="datetime-local" id="dataHoraFato" v-model="formData.dataHoraFato"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="unidadeId" class="block text-sm font-medium text-gray-700">Unidade ID:</label>
            <input type="number" id="unidadeId" v-model="formData.unidadeId"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="usuarioCadastroId" class="block text-sm font-medium text-gray-700">Usuário Cadastro ID:</label>
            <input type="number" id="usuarioCadastroId" v-model="formData.usuarioCadastroId"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
      </div>

      <!-- Endereços -->
      <div>
        <h2 class="text-xl font-bold mb-4">Endereços</h2>
        <div v-for="(endereco, index) in formData.enderecos" :key="index" class="border p-4 rounded-md space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="tipoLogradouro" class="block text-sm font-medium text-gray-700">Tipo Logradouro:</label>
              <input type="text" v-model="endereco.tipoLogradouro"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="logradouro" class="block text-sm font-medium text-gray-700">Logradouro:</label>
              <input type="text" v-model="endereco.logradouro"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="numero" class="block text-sm font-medium text-gray-700">Número:</label>
              <input type="text" v-model="endereco.numero"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="complemento" class="block text-sm font-medium text-gray-700">Complemento:</label>
              <input type="text" v-model="endereco.complemento"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="bairro" class="block text-sm font-medium text-gray-700">Bairro:</label>
              <input type="text" v-model="endereco.bairro"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="cidadeId" class="block text-sm font-medium text-gray-700">Cidade ID:</label>
              <input type="number" v-model="endereco.cidadeId"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="uf" class="block text-sm font-medium text-gray-700">UF:</label>
              <input type="text" v-model="endereco.uf"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="referencia" class="block text-sm font-medium text-gray-700">Referência:</label>
              <input type="text" v-model="endereco.referencia"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="cep" class="block text-sm font-medium text-gray-700">CEP:</label>
              <input type="text" v-model="endereco.cep"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="latitude" class="block text-sm font-medium text-gray-700">Latitude:</label>
              <input type="number" step="any" v-model="endereco.latitude"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="longitude" class="block text-sm font-medium text-gray-700">Longitude:</label>
              <input type="number" step="any" v-model="endereco.longitude"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
            </div>
            <div>
              <label for="tipoEndereco" class="block text-sm font-medium text-gray-700">Tipo Endereço:</label>
              <select v-model="endereco.tipoEndereco"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
                <option value="OUTRO">Outro</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Vítima -->
      <h2 class="text-xl font-bold mb-4">Vítima</h2>
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="nome" class="block text-sm font-medium text-gray-700">Nome:</label>
            <input type="text" id="nome" v-model="formData.vitima.nome"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="nomeSocial" class="block text-sm font-medium text-gray-700">Nome Social:</label>
            <input type="text" id="nomeSocial" v-model="formData.vitima.nomeSocial"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="razaoSocial" class="block text-sm font-medium text-gray-700">Razão Social:</label>
            <input type="text" id="razaoSocial" v-model="formData.vitima.razaoSocial"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="mae" class="block text-sm font-medium text-gray-700">Mãe:</label>
            <input type="text" id="mae" v-model="formData.vitima.mae"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="pai" class="block text-sm font-medium text-gray-700">Pai:</label>
            <input type="text" id="pai" v-model="formData.vitima.pai"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="dtNascimento" class="block text-sm font-medium text-gray-700">Data Nascimento:</label>
            <input type="date" id="dtNascimento" v-model="formData.vitima.dtNascimento"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="naturalidadeId" class="block text-sm font-medium text-gray-700">Naturalidade ID:</label>
            <input type="number" id="naturalidadeId" v-model="formData.vitima.naturalidadeId"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="sexo" class="block text-sm font-medium text-gray-700">Sexo:</label>
            <select id="sexo" v-model="formData.vitima.sexo"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Feminino</option>
              <option value="OUTRO">Outro</option>
            </select>
          </div>
          <div>
            <label for="orientacaoSexual" class="block text-sm font-medium text-gray-700">Orientação Sexual:</label>
            <select id="orientacaoSexual" v-model="formData.vitima.orientacaoSexual"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="HETEROSEXUAL">Heterossexual</option>
              <option value="HOMOSSEXUAL">Homossexual</option>
              <option value="BISSEXUAL">Bissexual</option>
              <option value="ASSEXUAL">Assexual</option>
              <option value="PANSEXUAL">Pansexual</option>
              <option value="OUTRO">Outro</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="identidadeGenero" class="block text-sm font-medium text-gray-700">Identidade de
              Gênero:</label>
            <select id="identidadeGenero" v-model="formData.vitima.identidadeGenero"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="CISGENERO">Cisgênero</option>
              <option value="TRANSEXUAL">Transexual</option>
              <option value="NAO_BINARIO">Não-binário</option>
              <option value="OUTRO">Outro</option>
            </select>
          </div>
          <div>
            <label for="escolaridade" class="block text-sm font-medium text-gray-700">Escolaridade:</label>
            <select id="escolaridade" v-model="formData.vitima.escolaridade"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="FUNDAMENTAL_INCOMPLETO">Fundamental Incompleto</option>
              <option value="FUNDAMENTAL_COMPLETO">Fundamental Completo</option>
              <option value="MEDIO_INCOMPLETO">Médio Incompleto</option>
              <option value="MEDIO_COMPLETO">Médio Completo</option>
              <option value="SUPERIOR_INCOMPLETO">Superior Incompleto</option>
              <option value="SUPERIOR">Superior</option>
              <option value="POS_GRADUACAO">Pós-graduação</option>
              <option value="MESTRADO">Mestrado</option>
              <option value="DOUTORADO">Doutorado</option>
              <option value="ANALFABETO">Analfabeto</option>
            </select>
          </div>
          <div>
            <label for="estadoCivil" class="block text-sm font-medium text-gray-700">Estado Civil:</label>
            <select id="estadoCivil" v-model="formData.vitima.estadoCivil"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="SOLTEIRO">Solteiro(a)</option>
              <option value="CASADO">Casado(a)</option>
              <option value="DIVORCIADO">Divorciado(a)</option>
              <option value="VIUVO">Viúvo(a)</option>
              <option value="SEPARADO">Separado(a)</option>
              <option value="UNIAO_ESTAVEL">União Estável</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="cutis" class="block text-sm font-medium text-gray-700">Cutis:</label>
            <select id="cutis" v-model="formData.vitima.cutis"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="BRANCA">Branca</option>
              <option value="PRETA">Preta</option>
              <option value="PARDA">Parda</option>
              <option value="AMARELA">Amarela</option>
              <option value="INDIGENA">Indígena</option>
            </select>
          </div>
          <div>
            <label for="funcaoPublica" class="block text-sm font-medium text-gray-700">Função Pública:</label>
            <input type="text" id="funcaoPublica" v-model="formData.vitima.funcaoPublica"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="nacionalidadeId" class="block text-sm font-medium text-gray-700">Nacionalidade ID:</label>
            <input type="number" id="nacionalidadeId" v-model="formData.vitima.nacionalidadeId"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="cpfCnpj" class="block text-sm font-medium text-gray-700">CPF/CNPJ:</label>
            <input type="text" id="cpfCnpj" v-model="formData.vitima.cpfCnpj"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="rgNumero" class="block text-sm font-medium text-gray-700">RG Número:</label>
            <input type="text" id="rgNumero" v-model="formData.vitima.rgNumero"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="rgEmissor" class="block text-sm font-medium text-gray-700">RG Emissor:</label>
            <input type="text" id="rgEmissor" v-model="formData.vitima.rgEmissor"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="rgUF" class="block text-sm font-medium text-gray-700">RG UF:</label>
            <input type="text" id="rgUF" v-model="formData.vitima.rgUF"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div>
            <label for="tipoPessoa" class="block text-sm font-medium text-gray-700">Tipo Pessoa:</label>
            <select id="tipoPessoa" v-model="formData.vitima.tipoPessoa"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white">
              <option value="FISICA">Física</option>
              <option value="JURIDICA">Jurídica</option>
            </select>
          </div>
          <div>
            <label for="profissao" class="block text-sm font-medium text-gray-700">Profissão:</label>
            <input type="text" id="profissao" v-model="formData.vitima.profissao"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="dtFalecimento" class="block text-sm font-medium text-gray-700">Data Falecimento:</label>
            <input type="date" id="dtFalecimento" v-model="formData.vitima.dtFalecimento"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-1 py-3 text-lg bg-white" />
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="restrito" v-model="formData.vitima.restrito"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            <label for="restrito" class="ml-2 block text-sm text-gray-700">Restrito</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="vivo" v-model="formData.vitima.vivo"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            <label for="vivo" class="ml-2 block text-sm text-gray-700">Vivo</label>
          </div>
        </div>


        <!-- Botão de Enviar -->
        <div class="text-right">
          <button type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Enviar
          </button>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "registerMissing",
  data() {
    return {
      formData: {
        protocolo: "",
        numAip: "",
        numIp: "",
        boNumero: "",
        origemBO: null,
        codBO: null,
        dataHoraFato: "",
        unidadeId: null,
        usuarioCadastroId: null,
        enderecos: [
          {
            tipoLogradouro: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidadeId: null,
            uf: "",
            referencia: "",
            cep: "",
            latitude: null,
            longitude: null,
            tipoEndereco: "RESIDENCIAL",
          },
        ],
        vitima: {
          nome: "",
          nomeSocial: "",
          razaoSocial: "",
          mae: "",
          pai: "",
          dtNascimento: "",
          naturalidadeId: null,
          sexo: "MASCULINO",
          orientacaoSexual: "HETEROSEXUAL",
          identidadeGenero: "CISGENERO",
          escolaridade: "FUNDAMENTAL_INCOMPLETO",
          estadoCivil: "SOLTEIRO",
          cutis: "BRANCA",
          funcaoPublica: "",
          nacionalidadeId: null,
          cpfCnpj: "",
          rgNumero: "",
          rgEmissor: "",
          rgUF: "",
          tipoPessoa: "FISICA",
          profissao: "",
          restrito: false,
          dtFalecimento: "",
          vivo: true,
          telefones: [
            {
              numero: "",
              tipoTelefone: "CELULAR",
            },
          ],
        },
      },
    };
  },
  methods: {
    submitForm() {
      const payload = { ...this.formData };
      if (!payload.origemBO) delete payload.origemBO;
      axios.post('https://abitus-api.geia.vip/v1/ocorrencias/delegacia-digital', payload)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
};
</script>