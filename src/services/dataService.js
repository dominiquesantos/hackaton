// src/services/dataService.js

const RECADOS_KEY = 'recadosData';
const EVENTOS_KEY = 'eventosData';

// Dados iniciais para Recados
const initialRecados = [
  { 
    id: 'rec1', 
    nome: "Alice Ramos Santana", 
    turma: "1º ano Sala A", 
    texto: "Olá! Esse é um recado protegido. Ele será exibido após autenticação.", 
    protegido: true, 
    lido: false,
    dataCriacao: "2025-07-20T10:00:00Z" // Data atualizada para 2025
  },
  { 
    id: 'rec2', 
    nome: "Felipe Gabriel Mendes", 
    turma: "1º ano Sala A", 
    texto: "O Felipe esqueceu o caderno duas vezes essa semana...", 
    protegido: false, 
    lido: true,
    dataCriacao: "2025-07-19T14:30:00Z" // Data atualizada para 2025
  },
  { 
    id: 'rec3', 
    nome: "Bruno Henrique Costa", 
    turma: "1º ano Sala B", 
    texto: "Recado sobre o desempenho do aluno durante a semana...", 
    protegido: true, 
    lido: false, 
    dataCriacao: "2025-07-18T09:15:00Z" // Data atualizada para 2025
  },
];

// Dados iniciais para Eventos - AGORA DEFINITIVAMENTE EM 2025
const initialEventos = [
  { 
    id: 'evt1', 
    titulo: "Reunião de pais – 2º Bimestre", 
    data: "2025-08-05", // ATUALIZADA para 2025
    horario: "09h / 10h", 
    turmas: "1º ano Sala A, 1º ano Sala B", 
    tipo: "reuniao",
    descricao: "Reunião para discutir o desempenho e adaptação dos alunos no segundo bimestre."
  },
  { 
    id: 'evt2', 
    titulo: "Feira de Ciências", 
    data: "2025-08-10", // ATUALIZADA para 2025
    horario: "manhã", 
    turmas: "3º e 4º ano", 
    tipo: "feira",
    descricao: "Exposição de projetos de ciências desenvolvidos pelos alunos."
  },
  { 
    id: 'evt3', 
    titulo: "Entrega de Atividade", 
    data: "2025-08-15", // ATUALIZADA para 2025
    horario: "horário de aula", 
    turmas: "4º e 5º ano", 
    tipo: "atividade",
    descricao: "Entrega da atividade de leitura do livro 'Meu Pé de Laranja Lima'."
  },
  { 
    id: 'evt4', 
    titulo: "Reunião de pais – 2º Bimestre", 
    data: "2025-08-20", // ATUALIZADA para 2025
    horario: "08h30 / 10h30", 
    turmas: "1º ano Sala C, 2º ano Sala A, 2º ano Sala B", 
    tipo: "reuniao",
    descricao: "Reunião de pais para turmas específicas, com foco no rendimento escolar."
  },
  { 
    id: 'evt5', 
    titulo: "Palestra sobre Segurança Online", 
    data: "2025-08-22", // ATUALIZADA para 2025
    horario: "14h", 
    turmas: "Todas as turmas", 
    tipo: "outros",
    descricao: "Palestra com especialista sobre uso consciente e seguro da internet."
  },
  { 
    id: 'evt6', 
    titulo: "Dia da Família na Escola", 
    data: "2025-09-01", // ATUALIZADA para 2025
    horario: "Integral", 
    turmas: "Todas as turmas", 
    tipo: "atividade",
    descricao: "Atividades recreativas e educativas para toda a família."
  },
];

// Função auxiliar para obter dados do localStorage ou inicializar
const getData = (key, initialData) => {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error(`Erro ao parsear dados do localStorage para a chave ${key}:`, e);
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
  }
  localStorage.setItem(key, JSON.stringify(initialData));
  return initialData;
};

// Função auxiliar para salvar dados no localStorage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  console.log(`dataService: Salvando chave '${key}' no localStorage.`); // LOG para verificar salvamento
};

// --- Funções para Recados ---

export const getRecados = () => {
  console.log("dataService: Obtendo recados...");
  return getData(RECADOS_KEY, initialRecados);
};

export const addRecado = (newRecado) => {
  const recados = getRecados(); 
  const id = 'rec' + Date.now().toString(); 
  const recadoToSave = { 
    ...newRecado, 
    id, 
    lido: newRecado.lido !== undefined ? newRecado.lido : false, 
    dataCriacao: new Date().toISOString() 
  };
  recados.push(recadoToSave);
  saveData(RECADOS_KEY, recados);
  console.log("dataService: Recado adicionado:", recadoToSave);
  return recadoToSave; 
};

export const getRecadoById = (id) => {
  const recados = getRecados();
  console.log("dataService - getRecadoById: Buscando ID:", id, "na lista de recados:", recados);
  return recados.find(r => r.id === id);
};

export const updateRecado = (id, updatedFields) => {
  let recados = getRecados();
  const index = recados.findIndex(r => r.id === id);
  if (index > -1) {
    recados[index] = { ...recados[index], ...updatedFields };
    saveData(RECADOS_KEY, recados);
    console.log("dataService: Recado atualizado:", recados[index]);
    return recados[index];
  }
  console.log("dataService: Recado não encontrado para atualização (ID:", id, ")");
  return null;
};

export const deleteRecado = (id) => {
  let recados = getRecados();
  const filteredRecados = recados.filter(r => r.id !== id);
  saveData(RECADOS_KEY, filteredRecados);
  console.log("dataService: Recado excluído (ID:", id, ")");
  return filteredRecados; 
};

// --- Funções para Eventos ---

export const getEventos = () => {
  console.log("dataService: Obtendo eventos...");
  return getData(EVENTOS_KEY, initialEventos);
};

export const addEvento = (newEvento) => {
  const eventos = getEventos();
  const id = 'evt' + Date.now().toString();
  const eventoToSave = { 
    ...newEvento, 
    id,
    dataCriacao: new Date().toISOString()
  };
  eventos.push(eventoToSave);
  saveData(EVENTOS_KEY, eventos);
  console.log("dataService: Evento adicionado:", eventoToSave);
  return eventoToSave;
};

export const getEventoById = (id) => {
  const eventos = getEventos();
  console.log("dataService - getEventoById: Buscando ID:", id, "na lista de eventos:", eventos);
  return eventos.find(e => e.id === id);
};

export const updateEvento = (id, updatedFields) => {
  let eventos = getEventos();
  const index = eventos.findIndex(e => e.id === id);
  if (index > -1) {
    eventos[index] = { ...eventos[index], ...updatedFields };
    saveData(EVENTOS_KEY, eventos);
    console.log("dataService: Dados SALVOS no localStorage para EVENTOS. Novo array:", eventos); // Log da nova lista de eventos
    console.log("dataService: Evento atualizado:", eventos[index]);
    return eventos[index];
  }
  console.log("dataService: Evento não encontrado para atualização (ID:", id, ")");
  return null;
};

export const deleteEvento = (id) => {
  let eventos = getEventos();
  const filteredEventos = eventos.filter(e => e.id !== id);
  saveData(EVENTOS_KEY, filteredEventos);
  console.log("dataService: Evento excluído (ID:", id, ")");
  return filteredEventos;
};