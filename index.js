// Navegação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação da barra de navegação ao rolar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animação de entrada dos elementos
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para um backend
        
        // Exemplo de feedback visual
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular envio (remover em produção)
        setTimeout(() => {
            submitButton.textContent = 'Mensagem Enviada!';
            this.reset();
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Adicionar classe de animação aos elementos quando visíveis
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Verificar tema salvo
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Adicionar evento de clique ao botão
    themeToggle.addEventListener('click', toggleTheme);
});

// Controle da tela de introdução
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.intro-screen');
    const mainContent = document.querySelector('.main-content');
    const enterButton = document.querySelector('.enter-button');

    // Verifica se veio da página de projetos
    const fromProjects = localStorage.getItem('fromProjects');
    
    if (fromProjects) {
        // Se veio da página de projetos, esconde a tela de introdução
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('show');
        // Limpa o flag
        localStorage.removeItem('fromProjects');
    } else {
        // Se não veio da página de projetos, mostra a tela de introdução
        mainContent.style.display = 'block';
    }

    enterButton.addEventListener('click', () => {
        // Adiciona classe para animar a saída
        introScreen.classList.add('hide');
        
        // Mostra o conteúdo principal com fade in
        mainContent.classList.add('show');
        
        // Remove a tela de introdução após a animação
        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 800);
    });
    
});

// Dados dos projetos
const projetos = {
    portfolio: {
        titulo: "Portfólio",
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
    if (elements.links) {
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
                    <i class="fas fa-external-link-alt"></i>
                    Código no GitHub
                </a>
            `;
        }
        elements.links.innerHTML = linksHTML;
    }

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

// Função para mostrar o balão de agradecimento
function showThankYouBalloon() {
    const balloon = document.getElementById('thankYouBalloon');
    const overlay = document.getElementById('balloonOverlay');
    
    balloon.classList.add('show');
    overlay.classList.add('show');

    // Remover após 3 segundos
    setTimeout(() => {
        balloon.classList.remove('show');
        overlay.classList.remove('show');
    }, 3000);
}

// Função para enviar email
async function sendEmail(e) {
    e.preventDefault();
    
    const button = document.querySelector('.contact-form button[type="submit"]');
    const buttonText = button.querySelector('.button-text');
    const loadingSpinner = button.querySelector('.loading-spinner');
    
    try {
        // Mostrar loading
        buttonText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        button.disabled = true;

        const templateParams = {
            user_name: document.querySelector('input[name="user_name"]').value,
            user_email: document.querySelector('input[name="user_email"]').value,
            message: document.querySelector('textarea[name="message"]').value
        };

        await emailjs.send('service_237adpf', 'template_0s4glio', templateParams);
        
        // Limpar formulário
        document.getElementById('contact-form').reset();
        
        // Mostrar balão de agradecimento
        showThankYouBalloon();
    } catch (error) {
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        console.error('Erro ao enviar email:', error);
    } finally {
        // Restaurar botão
        buttonText.style.display = 'inline-block';
        loadingSpinner.style.display = 'none';
        button.disabled = false;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
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

    // Adicionar evento de submit ao formulário
    document.getElementById('contact-form').addEventListener('submit', sendEmail);

    // Toggle do tema claro/escuro
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });
});

