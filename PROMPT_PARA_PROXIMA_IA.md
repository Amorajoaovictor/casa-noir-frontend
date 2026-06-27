# Handoff para implementação — Casa Noir

Você é a IA responsável por implementar integralmente a primeira versão da landing page da **Casa Noir — Fragrâncias Especiais**. Trabalhe diretamente no projeto existente, examine sua estrutura antes de fazer alterações e entregue uma aplicação funcional — não apenas explicações ou pseudocódigo.

## 1. Objetivo

Crie uma landing page premium, elegante, responsiva e sensorial para apresentar a marca Casa Noir e exibir seu catálogo de produtos. A experiência deve valorizar a sofisticação das fragrâncias e da decoração, funcionar bem em celular, tablet e desktop e evitar aparência de template genérico.

## 2. Arquivos disponíveis

Na inspeção inicial deste repositório, foram encontrados estes arquivos na raiz:

- Catálogo CSV: `E:\casa noir\catalogo_casa_noir_com_imagens.csv`
- Catálogo JSON: `E:\casa noir\catalogo_mapeado.json`
- Página HTML existente: `E:\casa noir\catalog-whatsapp.html`
- Arquivo auxiliar existente: `E:\casa noir\whapi-cookies.txt`

Não foram encontradas pastas `public`, `static` ou `assets`. Também não foram encontrados arquivos de vídeo, logotipo, imagens avulsas ou fontes no repositório durante esta inspeção. Antes de implementar o hero, confira novamente se algum desses recursos foi adicionado. Não invente caminhos nem substitua silenciosamente recursos ausentes por nomes genéricos.

## 3. Regras sobre os dados

- Inspecione primeiro a estrutura real de `E:\casa noir\catalogo_mapeado.json` e `E:\casa noir\catalogo_casa_noir_com_imagens.csv`.
- Prefira o JSON como fonte principal dos produtos, caso esteja válido e completo.
- Use o CSV como referência, conferência ou fallback.
- Não invente propriedades antes de verificar o formato real dos dados.
- Normalize os dados somente se necessário e preserve fielmente seu conteúdo.
- Carregue os produtos localmente pelo frontend.
- Não crie backend nem banco de dados e não consuma API externa.
- Não duplique manualmente no código produtos que já estejam nesses arquivos.

## 4. Direção visual

A estética deve ser sofisticada, minimalista, sensorial e elegante, inspirada em marcas premium de fragrâncias e decoração. Use uma paleta de preto, branco, creme, bege e detalhes dourados, com bastante espaço em branco, hierarquia tipográfica refinada e composição editorial. Evite aparência de template genérico, excesso de gradientes, efeitos neon e animações exageradas.

## 5. Hero com vídeo

O material esperado inclui um vídeo de apresentação de um difusor Casa Noir, mas **nenhum arquivo de vídeo estava presente no repositório no momento deste handoff**. Confira novamente os arquivos antes de implementar. Se o vídeo tiver sido adicionado, use exatamente seu caminho real como protagonista da página. Se continuar ausente, implemente um fallback visual elegante e deixe a integração preparada sem inventar um arquivo ou URL.

Quando o vídeo real estiver disponível, a seção deve:

- ocupar a tela inteira;
- usar o vídeo com `object-cover`, sem controles e sem áudio;
- aplicar uma camada sutil para garantir a leitura do texto;
- vincular o tempo do vídeo à rolagem, avançando ao descer e retrocedendo ao subir;
- usar uma implementação performática com `requestAnimationFrame`;
- evitar atualizações de estado React a cada pixel de rolagem;
- oferecer fallback para dispositivos com limitações;
- respeitar `prefers-reduced-motion`;
- manter o produto visível e valorizado.

Use textos em HTML sobre a composição, nunca incorporados ao vídeo. Sugestões:

- “Fragrâncias que transformam ambientes.”
- “Elegância percebida em cada detalhe.”
- “Descubra a essência da Casa Noir.”

## 6. Estrutura sugerida da página

Inclua pelo menos:

- cabeçalho;
- hero com vídeo ou fallback apropriado enquanto o arquivo estiver ausente;
- apresentação da marca;
- seção de produtos;
- benefícios ou diferenciais;
- seção sensorial sobre as fragrâncias;
- chamada para ação;
- rodapé.

## 7. Catálogo de produtos

Gere os cards dinamicamente com base no JSON ou, como fallback, no CSV. Cada card deve usar somente campos realmente disponíveis nos dados. Quando existirem, apresente nome, categoria, fragrância, descrição, volume, preço e imagem.

Se um campo não existir, não invente informações. Se os dados apontarem para imagens, valide os caminhos e use somente recursos realmente disponíveis. Caso não existam imagens individuais acessíveis, crie cards tipográficos elegantes ou um placeholder visual discreto, sem associar imagens incorretas aos produtos. Adicione filtros apenas quando os campos reais dos dados os justificarem.

## 8. Responsividade e acessibilidade

- Garanta funcionamento em celular, tablet e desktop.
- Use HTML semântico.
- Permita navegação por teclado e mantenha foco visível.
- Garanta contraste adequado e boa legibilidade sobre o vídeo.
- Forneça textos alternativos e labels reais.
- Respeite `prefers-reduced-motion` em toda a experiência.

## 9. Restrições

Não:

- crie backend ou banco de dados;
- implemente login ou painel administrativo;
- integre pagamentos ou crie checkout;
- invente produtos, preços ou propriedades inexistentes nos arquivos;
- use lorem ipsum;
- deixe botões principais sem funcionamento;
- substitua recursos fornecidos por materiais genéricos sem necessidade;
- invente um vídeo, logotipo, imagem, fonte, caminho local ou URL para compensar recursos ausentes.

## 10. Resultado esperado

- Examine todo o projeto existente antes de alterar qualquer coisa.
- Respeite a stack já configurada; se não houver uma estrutura de aplicação configurada, determine uma solução frontend adequada e mínima antes de implementar.
- Entregue todos os arquivos necessários para a aplicação funcionar.
- Mantenha o código organizado e crie componentes reutilizáveis.
- Garanta que o projeto execute sem erros.
- Revise imports e tipos.
- Teste a leitura local dos produtos tanto na fonte principal quanto no fallback pertinente.
- Verifique o comportamento do vídeo caso o arquivo esteja disponível; se estiver ausente, verifique o fallback e documente claramente a pendência.
- Verifique responsividade, acessibilidade básica e movimento reduzido.
- Não encerre o trabalho apenas com uma explicação ou pseudocódigo: implemente e valide o resultado completo.
