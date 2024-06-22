const botoesLike = document.querySelectorAll('.btn-like'); // Seleciona todos os botões com classe "btn-like"

botoesLike.forEach(botao => { // Percorre cada botão "like"
  botao.addEventListener('click', function(event) {
    const iconeLike = this.querySelector('.icon-like'); // Seleciona o elemento "icon-like" dentro do botão
    
    if (iconeLike.textContent === 'sentiment_neutral') { // Verifica o estado atual do ícone
      // Curtida
      iconeLike.textContent = 'mood'; // Muda o ícone para "favoritado"
      iconeLike.style.color = 'yellow';
      this.title = "Descurtir"; // Muda o título do botão para "Descurtir"
    } else {
      // Descurtida
      iconeLike.textContent = 'sentiment_neutral'; // Volta o ícone para o estado inicial
      this.title = "Curtir"; // Volta o título do botão para "Curtir"
      iconeLike.style.color = '#004aad';
    }
  });
});


const modal = document.getElementById('modal-comentarios');
const btnsComentario = document.querySelectorAll('.btn-coment');

btnsComentario.forEach(botaob =>{
    botaob.addEventListener('click', function(e){
        let botaoClicado = e.target;
        modal.classList.toggle('ativo');

        const fecharBtn = document.querySelector('.fechar-modal-comentario');

        fecharBtn.addEventListener('click', ()=>{
            modal.classList.remove('ativo');
        })
    })
})