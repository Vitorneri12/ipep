# IPEP — Pós-Graduação Executiva em IA para Negócios

Landing page da Pós-Graduação Executiva em Inteligência Artificial para Negócios das Faculdades Integradas IPEP.

## Estrutura do projeto

```
ipep/
├── index.html          # Página principal (HTML)
├── css/
│   └── styles.css      # Estilos da página
├── js/
│   └── main.js         # Scripts (interações)
└── assets/
    └── img/            # Imagens (logos, fotos, backgrounds)
```

Originalmente todo o site era um único `index.html` de ~7 MB com CSS, JS e imagens embutidas em base64. O código foi reorganizado em arquivos separados e as imagens extraídas para `assets/img/`, reduzindo o HTML para ~28 KB.

## Como rodar localmente

É um site estático — basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
# Python
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Contato

- Central de Matrículas: 0800 7 712 712
- Informações: (19) 3737-3270
- Campinas – SP — R. José de Alencar, 442, Centro
