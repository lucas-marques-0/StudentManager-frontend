# StudentManager (Inicie) [Front-end]

![studentmanager-front](https://github.com/user-attachments/assets/6aa6e0dd-f40d-4668-8c9d-746d69412e10)

### ⚠️ ATENÇÃO: Esse projeto consiste em duas partes (Front-end e Back-end), e para que ele funcione completamente, as duas precisam estar rodando. Então acesse o repositório para rodar o Back-end aqui (https://github.com/lucas-marques-0/StudentManager-backend). 

## Etapas até rodar o projeto (Front-end):

1. Inicie rodando `npm install` no terminal, para instalar as dependências nescessárias.

## Caso queira rodar em formato de página web:

2. Para rodar o projeto em uma página web, rode `ng serve`.

## Caso queira rodar em formato de extensão:

2. Rode `ng build --output-path=dist/extensao --base-href ./` no terminal.

3. Note que foi criada essa pasta na raiz do seu projeto:
   
![{B60B12CE-2727-4736-90CE-0FE2D27C4468}](https://github.com/user-attachments/assets/12b49f18-7ddd-425d-abd7-449168b6a725)

4. Caso queira fazer alguma alteração nas configurações da extensão, configure o `manifest.json` na rais do seu projeto como quiser (opcional).

5. Rode `cp manifest.json dist/extensao/browser/` e confirme que uma cópia do `manifest.json` foi adicionada dentro do diretório `dist/extensao/browser/`.
  
6. Abra o Google Chrome (ou qualquer outro navegador baseado no chrome) e vá até chrome://extensions/.
  
7. Ative a opção Modo de desenvolvedor (Developer mode) no canto superior direito.
  
8. Clique em Carregar sem compactação (Load unpacked).

9. Selecione o diretório `dist/extensao/browser/` do seu projeto (onde está o manifest.json).

10. Observe que a extensão foi adicionada e está pronta para usar (ao clicar nela) na seção superior do seu navegador (onde ficam as extensões), normalmente no canto superior direito.

   
