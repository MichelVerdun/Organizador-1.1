// Função para alternar entre páginas
document.getElementById('btn-home').addEventListener('click', () => {
    showPage('home-page');
});

document.getElementById('btn-calendar').addEventListener('click', () => {
    showPage('calendar-page');
});

document.getElementById('btn-goals').addEventListener('click', () => {
    showPage('goals-page');
});

function showPage(pageId) {
    // Esconde todas as páginas
    const pages = ['home-page', 'calendar-page', 'goals-page'];
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });

    // Mostra a página correspondente
    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = 'block';
    } else {
        console.error(`Página "${pageId}" não encontrada.`);
    }
}

// Função para lidar com a alternância de tarefas concluídas
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const taskStatus = event.target.checked ? 'Concluída' : 'Não concluída';
        console.log(`Tarefa de ${event.target.id} está: ${taskStatus}`);
        // Atualizar a barra de progresso ou lógica adicional aqui
    });
});
