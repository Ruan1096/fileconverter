# FILE CONVERTER

Aplicação Front-End desenvolvida para gerenciamento e simulação de conversão de arquivos multimídia e documentos, utilizando manipulação dinâmica do DOM, arquitetura modular baseada em eventos e interface moderna construída com conceitos de Glassmorphism e responsividade.

O sistema foi projetado para fornecer uma experiência de usuário fluida através de uma interface interativa capaz de alternar dinamicamente entre categorias de conversão, validar arquivos em tempo real e controlar estados da aplicação de maneira assíncrona.

---

# Arquitetura do Projeto

A aplicação é estruturada em três camadas principais:

* **HTML5** → Estrutura semântica da interface
* **CSS3** → Estilização avançada e responsividade
* **JavaScript Vanilla** → Controle de estado, eventos e manipulação dinâmica do DOM

---

# Estrutura Funcional

## Sistema de Navegação Interna

O projeto implementa um sistema SPA-like (Single Page Application behavior) utilizando:

* Alternância dinâmica de seções
* Controle de visibilidade via classes CSS
* Manipulação de estados utilizando `classList`

Exemplo técnico:

* Ativação/desativação de telas através da classe `.escondido`
* Controle visual de navegação utilizando `.link-ativo`

---

# Gerenciamento de Estado

A aplicação utiliza variáveis globais para controle de estado da interface:

```javascript
let arquivoCarregado = null;
let abaAtual = "video";
```

Esses estados são utilizados para:

* Validar uploads
* Habilitar/desabilitar ações
* Controlar renderização condicional
* Definir lógica de conversão

---

# Sistema de Upload

O upload de arquivos é realizado utilizando:

```html
<input type="file">
```

Com:

* Ocultação visual do input nativo
* Interface customizada via `<label>`
* Captura de eventos `change`

Fluxo técnico:

1. Seleção do arquivo
2. Captura do objeto `File`
3. Atualização dinâmica da interface
4. Validação de prontidão

---

# Manipulação Dinâmica do DOM

A aplicação utiliza:

* `querySelector`
* `getElementById`
* `classList`
* `innerText`
* `addEventListener`

Para atualizar:

* Botões
* Inputs
* Estados visuais
* Containers ativos
* Feedbacks da interface

---

# Sistema de Validação

A função principal de validação:

```javascript
function verificarProntidao()
```

é responsável por:

* Validar existência de arquivo carregado
* Validar formato selecionado
* Liberar bloqueio do botão principal
* Atualizar estado visual do conversor

A lógica utiliza condicionais baseadas no estado atual da aba ativa.

---

# Arquitetura de Eventos

A aplicação é orientada a eventos (Event-Driven):

## Eventos utilizados

* `click`
* `change`

## Fluxo de interação

* Upload → Atualização de estado
* Seleção de formato → Validação
* Conversão → Simulação assíncrona

---

# Simulação Assíncrona

A conversão é simulada utilizando:

```javascript
setTimeout()
```

Permitindo:

* Simular processamento
* Alterar estados temporariamente
* Atualizar UI dinamicamente

Fluxo:

1. Estado “Convertendo”
2. Delay assíncrono
3. Estado “Concluído”

---

# Design System

## Glassmorphism

A interface utiliza:

* Transparência RGBA
* `backdrop-filter: blur()`
* Sombras suaves
* Bordas translúcidas

Objetivo:

* Criar profundidade visual
* Melhorar percepção de interface moderna

---

# Responsividade

A estrutura utiliza:

* Flexbox
* `min-height`
* `background-size: cover`
* Containers adaptativos

Permitindo compatibilidade com:

* Desktop
* Tablets
* Dispositivos móveis

---

# Organização Visual

O layout foi dividido em:

* Header
* Zona de ação
* Área dinâmica
* Rodapé
* Sistema de abas

Cada módulo possui responsabilidade isolada, facilitando:

* Escalabilidade
* Manutenção
* Reutilização de componentes

---

# Recursos Técnicos Aplicados

## Front-End

* HTML5 Semântico
* CSS3 Moderno
* JavaScript ES6+

## Técnicas Utilizadas

* DOM Manipulation
* Event Handling
* Conditional Rendering
* State Management
* Responsive UI
* Glassmorphism
* UX-oriented Interface Design

---

# Possíveis Evoluções Técnicas

## Conversão Real

Integração com:

* FFmpeg.wasm
* CloudConvert API
* LibreOffice Headless
* Sharp
* PDF-lib

---

## Backend

Possível arquitetura futura:

* Node.js + Express
* FFmpeg
* Python Workers
* APIs REST
* Upload Streaming

---

# Objetivo Técnico

O projeto foi desenvolvido com foco em:

* Experiência do usuário
* Arquitetura Front-End limpa
* Manipulação eficiente do DOM
* Estrutura modular
* Interface visual moderna
* Simulação de fluxo real de conversão de arquivos





PREVIA:

<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/31cc6914-8118-4f7d-972d-5d1fd816409b" />

