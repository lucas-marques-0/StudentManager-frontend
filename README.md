![{B60B12CE-2727-4736-90CE-0FE2D27C4468}](https://github.com/user-attachments/assets/2c804ec5-81f1-4702-9740-370c13632251)# StudentManager (Inicie) [Front-end]

![studentmanager-front](https://github.com/user-attachments/assets/6aa6e0dd-f40d-4668-8c9d-746d69412e10)

## Etapas até rodar o projeto:

1. Inicie rodsando `npm install` no terminal, para instalar as dependências nescessárias.

## Caso queiro rodar em formato de página web:

1. Para rodar o projeto em uma página web, rode `ng serve`

## Caso queiro rodar em formato de extensão:

1. Rode `ng build --output-path=dist/extensao --base-href ./` no terminal

2. Note que foi criada essa pasta na raiz do seu projeto:
   
![{B60B12CE-2727-4736-90CE-0FE2D27C4468}](https://github.com/user-attachments/assets/12b49f18-7ddd-425d-abd7-449168b6a725)

3. Caso queira fazer alguma alteração nas configurações da extensão, configure o `manifest.json` na rais do seu projeto como quiser (opcional).

4. Rode `cp manifest.json dist/extensao/browser/` e confirme que uma cópia do `manifest.json` foi adicionada dentro do diretório `dist/extensao/browser/`.
  
5. Abra o Google Chrome (ou qualquer outro navegador baseado no chrome) e vá até chrome://extensions/.
  
6. Ative a opção Modo de desenvolvedor (Developer mode) no canto superior direito.
  
7. Clique em Carregar sem compactação (Load unpacked).

8. Selecione o diretório `dist/extensao/browser/` do seu projeto (onde está o manifest.json).

9. Observe que a extensão foi adicionada e está pronta para usar (ao clicar nela) na seção superior do seu navegador (onde ficam as extensões), normalmente no canto superior direito.

   
