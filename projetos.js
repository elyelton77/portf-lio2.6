// Dados dos projetos
const projetos = {
    portfolio: {
        titulo: "Meu Portfólio",
        imagem: "portfolio.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        descricao: "Um portfólio moderno e responsivo desenvolvido com HTML, CSS e JavaScript. Este projeto foi criado para apresentar meus trabalhos e habilidades de forma interativa e atraente, utilizando as mais recentes tecnologias web. O objetivo principal era criar uma interface intuitiva e responsiva que destacasse meus projetos e experiência profissional.",
        features: [
            "Design moderno e responsivo",
            "Animações suaves e interativas",
            "Modo claro/escuro",
            "Seções organizadas e intuitivas",
            "Otimizado para performance"
        ],
        demoLink: "#",
        githubLink: "https://github.com/elyelton77/portfolio2.0"
    },
    Loja_de_Roupas: {
        titulo: "Loja de Roupas",
        imagem: "LojaRoupas.jpg",
        tags: ["HTML", "CSS", "Java", "JavaScript"],
        descricao: "Projeto de e-commerce desenvolvido com foco em usabilidade, identidade visual moderna e experiência do usuário. A loja permite a visualização de produtos, detalhes como preço e descrição, além de funcionalidades essenciais como carrinho de compras e finalização de pedidos. O sistema foi pensado para ser responsivo, intuitivo e escalável, simulando um ambiente real de vendas online e aplicando conceitos de design, organização de dados e boas práticas de desenvolvimento web.",
        features: [
            "Catálogo de produtos",
            "Busca e filtros",
            "Carrinho de compras",
            "Checkout (finalização de compra)",
            "Cadastro e login de usuários",
            "Design responsivo",
            "Área administrativa (gestão de produtos)",
            "Simulação de pagamento",
        ],
        demoLink: "https://elyelton77.github.io/Loja-de-Roupas-Virtual/",
        githubLink: "https://github.com/elyelton77/Loja-de-Roupas-Virtual"
    }
};

// Função para abrir o modal
function openModal(projetoId) {
    const projeto = projetos[projetoId];
    if (!projeto) return;

    const modal = document.getElementById('projectModal');
    const elements = {
        title: document.getElementById('modalTitle'),
        image: document.getElementById('modalImage'),
        description: document.getElementById('modalDescription'),
        tags: document.getElementById('modalTags'),
        features: document.getElementById('modalFeatures'),
        links: document.getElementById('modalLinks')
    };
    
    // Preencher dados do modal
    elements.title.textContent = projeto.titulo;
    elements.image.src = projeto.imagem;
    elements.description.textContent = projeto.descricao;

    // Preencher tags
    elements.tags.innerHTML = projeto.tags.map(tag => 
        `<span class="modal-tag">${tag}</span>`
    ).join('');

    // Preencher features
    elements.features.innerHTML = projeto.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    // Preencher links
    let linksHTML = '';
    if (projeto.demoLink && projeto.demoLink !== '#') {
        linksHTML += `
            <a href="${projeto.demoLink}" target="_blank" rel="noopener noreferrer" class="btn modal-link-btn">
                <i class="fas fa-external-link-alt"></i>
                Ver Projeto
            </a>
        `;
    }
    if (projeto.githubLink && projeto.githubLink !== '#') {
        linksHTML += `
            <a href="${projeto.githubLink}" target="_blank" rel="noopener noreferrer" class="btn modal-link-btn">
                <i class="fab fa-github"></i>
                Código no GitHub
            </a>
        `;
    }
    elements.links.innerHTML = linksHTML;

    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Atualizar ícone
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Verificar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        const themeIcon = document.querySelector('#theme-toggle i');
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Fechar modal ao clicar fora (mas não nos links)
    document.getElementById('projectModal').addEventListener('click', (e) => {
        // Não fechar se clicar em um link ou dentro do modal-content
        if (e.target.closest('.modal-content') || e.target.closest('a')) {
            return;
        }
        if (e.target === e.currentTarget) {
            closeModal();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Adicionar evento de clique ao botão de tema
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

// Adiciona o flag quando o usuário clicar em um link para voltar
document.querySelectorAll('a[href="index.html"]').forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem('fromProjects', 'true');
    });
});

