function trocarCores() {
    return {
        // atributos
        titulo: document.querySelector('h1'),
        sobremim:document.getElementById('sobremim'),
        meulink:document.querySelector('.meulink'),

        // métodos
        inicia() {
            this.trocaTitulo();
            this.trocaSobreMim()
            this.trocaLink()
        },

        trocaTitulo() {
            this.titulo.addEventListener('mouseout', (e) => {
                const el = e.target;

                if (el.tagName === 'H1') {
                    this.titulo.style.color = 'white';
                } 
            });

            this.titulo.addEventListener('mouseover', () => {
                this.titulo.style.color = '#5061FA';
            });
        },

        trocaSobreMim(){
            this.sobremim.addEventListener('mouseout', e => {
                const el = e.target

                if(el === this.sobremim) {
                    this.sobremim.style.color = 'white'
                }
            });

            this.sobremim.addEventListener('mouseover', () => {
                this.sobremim.style.color = 'black'
            })
        },

        trocaLink() {
            this.meulink.addEventListener('mouseout', () => {
                this.meulink.style.color = '#5061FA';
            });
        
            this.meulink.addEventListener('mouseover', () => {
                this.meulink.style.color = 'white';
            });
        }  
    }.inicia(); // Chama a função inicia após retornar o objeto
}

trocarCores();
