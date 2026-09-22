(function(){
  const WORDS = [
    ["BRUCELOSE", "Doença que pode causar problemas reprodutivos em bovinos"],
    ["MASTITE", "Inflamação da glândula mamária, comum em vacas leiteiras"],
    ["INSEMINACAO", "Técnica utilizada para realizar a reprodução sem a monta natural"],
    ["FERTILIZACAO", "Forma de reprodução em que o sêmen é colocado na fêmea para gerar um filhote."],
    ["OVULACAO", "Liberação do óvulo pelo ovário para a reprodução."],
    ["GESTACAO", "Período em que o filhote se desenvolve dentro da mãe"],
    ["PARTO", "Momento em que o filhote nasce"],
    ["BEZERRO", "Filhote jovem dos bovinos"],
    ["POTRO", "Filhote dos cavalos"],
    ["GARROTE", "Macho bovino jovem"],
    ["BOVINO", "Animal como vaca, boi e touro"],
    ["EQUINO", "Animal da espécie dos cavalos"],
    ["OVINO", "Animal da espécie das ovelhas"],
    ["CAPRINO", "Animal da espécie das cabras"],
    ["SUINO", "Animal da espécie dos porcos"],
    ["MIIASE", "Infestação causada por larvas de moscas que se desenvolvem em feridas ou tecidos de animais."],
    ["VERMINOSE", "Doença causada pela presença de vermes no organismo"],
    ["TRISTEZA", "Condição caracterizada pela diminuição de células vermelhas no sangue"],
    ["PNEUMONIA", "Doença que afeta principalmente o sistema respiratório"],
    ["LEPTOSPIROSE", "Doença bacteriana que pode afetar animais e seres humanos"],
    ["RAIVA", "Doença viral grave que afeta o sistema nervoso"],
    ["CASTRACAO", "Procedimento que impede a reprodução do animal"],
    ["TOQUE", "Exame realizado para avaliar estruturas internas do animal"],
    ["ULTRASSONOGRAFIA", "Exame usado para observar estruturas internas do organismo"],
    ["COLOSTRO", "Primeiro leite produzido pela mãe após o parto"],
    ["PLACENTA", "Estrutura que fornece nutrientes ao feto durante a gestação"],
    ["SEMEM", "Célula reprodutiva masculina vendida para reprodução, inseminação na fêmea"],
    ["EMBRIAO", "Estágio inicial do desenvolvimento de um novo organismo"],
    ["REPRODUCAO", "Processo biológico que permite gerar novos indivíduos"],
    ["CIO", "Período de receptividade sexual da fêmea"],
    ["HORMONIO", "Substância que atua na regulação de várias funções do organismo"],
    ["PRENHEZ", "Estado da fêmea durante a gestação"],
    ["FECUNDACAO", "Processo em que o espermatozoide fecunda o óvulo"],
    ["RUMINANTE", "Animal que realiza a ruminação dos alimentos"],
    ["RUMINACAO", "Processo em que o animal regurgita e mastiga novamente o alimento"],
    ["ESTOMAGO", "Órgão do sistema digestivo responsável por parte da digestão"],
    ["INTESTINO", "Órgão onde ocorre grande parte da digestão e absorção"],
    ["FIGADO", "Órgão que participa do metabolismo e da desintoxicação"],
    ["RIM", "Órgão responsável por filtrar o sangue e produzir urina"],
    ["TOURO", "Macho adulto dos bovinos"],
    ["VACA", "Fêmea adulta dos bovinos"],
    ["BOI", "Bovino macho geralmente criado para produção de carne"],
    ["NOVILHA", "Fêmea bovina jovem que ainda não teve cria"],
    ["BEZERRA", "Fêmea bovina jovem"],
    ["REBANHO", "Conjunto de animais criados em uma propriedade"],
    ["PECUARIA", "Atividade de criação de animais"],
    ["FAZENDA", "Propriedade rural onde são criados animais e cultivadas plantas"],
    ["PASTAGEM", "Área com vegetação usada para alimentar os animais"],
    ["CURRAL", "Local onde os bovinos são reunidos e manejados"],
    ["ESTABULO", "Local coberto onde os animais podem ficar protegidos"],
    ["MANEJO", "Conjunto de práticas usadas para cuidar dos animais"],
    ["ALIMENTACAO", "Fornecimento de alimentos necessários aos animais"],
    ["NUTRICAO", "Processo de aproveitamento dos nutrientes dos alimentos"],
    ["RACAO", "Alimento preparado para os animais"],
    ["FORRAGEM", "Plantas utilizadas na alimentação dos animais"],
    ["SILAGEM", "Alimento vegetal conservado por fermentação"],
    ["FENO", "Forragem seca utilizada na alimentação animal"],
    ["AGUA", "Substância essencial para a sobrevivência dos animais"],
    ["BEBEDOURO", "Recipiente ou local onde os animais bebem água"],
    ["COCHO", "Recipiente usado para colocar alimentos para os animais"],
    ["VACINA", "Substância usada para estimular a proteção contra doenças"],
    ["VACINACAO", "Aplicação de vacinas para prevenir doenças"],
    ["VERMIFUGACAO", "Uso de medicamentos para controlar vermes"],
    ["MEDICAMENTO", "Substância utilizada para prevenir ou tratar doenças"],
    ["VETERINARIO", "Profissional responsável pela saúde dos animais"],
    ["SAUDE", "Estado de bem-estar e funcionamento adequado do organismo"],
    ["DOENCA", "Alteração que prejudica o funcionamento do organismo"],
    ["SINTOMA", "Sinal que pode indicar a presença de uma doença"],
    ["DIAGNOSTICO", "Identificação de uma doença ou problema de saúde"],
    ["TRATAMENTO", "Medidas utilizadas para combater uma doença"],
    ["PREVENCAO", "Ações realizadas para evitar problemas ou doenças"],
    ["CONTROLE", "Acompanhamento para reduzir riscos e problemas"],
    ["HIGIENE", "Cuidados para manter a limpeza e evitar doenças"],
    ["DESINFECCAO", "Processo de eliminação de muitos microrganismos"],
    ["QUARENTENA", "Separação temporária de animais para evitar a transmissão de doenças"],
    ["ISOLAMENTO", "Separação de um animal para proteger os demais"],
    ["CONTAMINACAO", "Presença de agentes que podem causar danos ou doenças"],
    ["BACTERIA", "Microrganismo que pode ser benéfico ou causar doenças"],
    ["VIRUS", "Agente infeccioso que pode causar doenças"],
    ["PARASITA", "Organismo que vive associado a outro e retira dele nutrientes"],
    ["INFECCAO", "Entrada e multiplicação de agentes infecciosos no organismo"],
    ["INFLAMACAO", "Resposta do organismo a uma lesão ou agente agressor"],
    ["FEBRE", "Aumento da temperatura corporal"],
    ["ANEMIA", "Diminuição da quantidade de células vermelhas ou hemoglobina no sangue"],
    ["IMUNIDADE", "Capacidade do organismo de se defender de agentes causadores de doenças"],
    ["ANTICORPO", "Proteína produzida pelo organismo para ajudar na defesa"],
    ["CELULA", "Menor unidade estrutural e funcional dos seres vivos"],
    ["TECIDOS", "Conjunto de células que desempenham funções semelhantes"],
    ["ORGAO", "Estrutura do corpo formada por diferentes tecidos"],
    ["OVARIO", "Órgão feminino que produz óvulos"],
    ["TESTICULO", "Órgão masculino que produz espermatozoides"],
    ["UTERO", "Órgão onde o embrião pode se desenvolver"],
    ["OVULO", "Célula reprodutiva feminina"],
    ["ESPERMATOZOIDE", "Célula reprodutiva masculina"],
    ["FETO", "Estágio do desenvolvimento após a fase embrionária"],
    ["EMBRIAO", "Estágio inicial do desenvolvimento de um novo organismo"],
    ["NASCIMENTO", "Momento em que o filhote vem ao mundo"],
    ["LACTACAO", "Período em que a mãe produz leite"],
    ["DESMAME", "Período em que o filhote deixa de depender do leite materno"],
    ["GENETICA", "Área da biologia que estuda a hereditariedade"],
    ["HEREDITARIEDADE", "Transmissão de características dos pais para os descendentes"],
  ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
}
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();  
  