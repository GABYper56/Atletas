function pesquisar() {
  
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    
    let resultados = ""
    
    for (let dado of dados){ 
        resultados += `
        <div class="item-resultado">
            <h3>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>`;
    }
    
    section.innerHTML = resultados

}


