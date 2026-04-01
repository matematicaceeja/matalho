
  function atualizarBlocos() {
    // Esconde todos os .block
    document.querySelectorAll(".block").forEach(div => {
      div.style.display = "none";
    });

    // Pega o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    const hoje = new Date().getDay();

    // Só executa se for de segunda (1) até sexta (5)
    if (hoje >= 1 && hoje <= 5) {
      // Mostra todos os blocos do dia atual
      const divs = document.querySelectorAll(`.d${hoje}`);
      divs.forEach(div => {
        div.style.display = "initial";
      });
    }
  }

  // Executa logo ao carregar
  atualizarBlocos();

  // Atualiza automaticamente a cada minuto (60000 ms)
  setInterval(atualizarBlocos, 60000);
