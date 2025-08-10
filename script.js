document.addEventListener('DOMContentLoaded', function() {
    // Dados dos produtos para o modal
    const productDetails = {
        bolos: {
            title: "Bolos Caseiros",
            content: `
                <p>Nossos bolos são feitos com ingredientes frescos e muito carinho, perfeitos para o seu café da tarde ou para adoçar seu dia.</p>
                <h4>Sabores Disponíveis:</h4>
                <ul>
                    <li>Bolo de Cenoura com Cobertura de Chocolate</li>
                    <li>Bolo de Fubá Cremoso</li>
                    <li>Bolo de Milho Verde</li>
                    <li>Bolo de Chocolate com Calda Cremosa</li>
                    <li>Bolo de Laranja Fofinho</li>
                    <li>Bolo de Coco Gelado</li>
                </ul>
                <p>Consulte-nos para sabores especiais e tamanhos personalizados!</p>
            `
        },
        doces: {
            title: "Doces Finos",
            content: `
                <p>Nossos doces são a pedida certa para festas, eventos ou para satisfazer aquele desejo por um doce especial.</p>
                <h4>Opções de Doces:</h4>
                <ul>
                    <li>Brigadeiros Gourmet (diversos sabores: tradicional, Ninho, churros, limão)</li>
                    <li>Beijinhos de Coco</li>
                    <li>Casadinhos</li>
                    <li>Olho de Sogra</li>
                    <li>Mini Pudins</li>
                    <li>Tortinhas de Limão e Maracujá</li>
                </ul>
                <p>Fazemos caixas de doces variadas para presentear!</p>
            `
        },
        salgados: {
            title: "Salgados Diversos",
            content: `
                <p>Nossa linha de salgados é ideal para sua festa, reunião ou para um lanche rápido. Crocantes por fora, macios por dentro e cheios de sabor!</p>
                <h4>Variedade de Salgados:</h4>
                <ul>
                    <li>Coxinha de Frango</li>
                    <li>Risole de Carne/Queijo</li>
                    <li>Mini Esfiha (carne, queijo)</li>
                    <li>Mini Pizza</li>
                    <li>Empadinha de Frango/Palmito</li>
                    <li>Kibe</li>
                    <li>Bolinha de Queijo</li>
                </ul>
                <p>Aceitamos encomendas por cento e para grandes eventos.</p>
            `
        }
    };

    const modal = document.getElementById('product-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            const details = productDetails[category];

            if (details) {
                modalTitle.textContent = details.title;
                modalBody.innerHTML = details.content;
                modal.style.display = 'flex'; // Altera para flex para centralizar
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Função para rolar o carrossel de depoimentos (opcional, para visualização em desktop)
    // Em dispositivos móveis, o overflow-x: auto já permite a rolagem.
    // Você pode adicionar botões de navegação se desejar uma UX mais complexa.
});
