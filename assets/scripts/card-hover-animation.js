function handleMouseEnter(){
    this.classList.add('s-card--Hovered');
    document.body.id =`${this.id}-hovered`;
}
function handleMouseLeave(){
    this.classList.remove('s-card--Hovered')
    document.body.id = '';
    // Para remover
}

function addEventiListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventiListenersToCards, false);

// Funcão apenas funcinarar, assim que carregar a página inteira. False: informando que não quero passar nenhuma paraametro, Pq é opcional 