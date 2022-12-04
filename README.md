# S-Pack

Um Modpack em desenvolvimento utilizando MinecraftForge, a API de modificação do Minecraft, e diversos mods disponibilizados pelo CurseForge.

**Mod**: Conjunto de modificações desenvolvidas por um autor independente da desenvolvedora do jogo.

**Modpack**: Pacote de Mods que geralmente busca um proposito além do padrão do jogo com grandes ou pequenas adições de recursos.

[Ver lista completa de mods](https://github.com/s1lviuz/S-Pack/blob/develop/MODLIST.md)

## Scripts

As mudanças em jogo são feitas atraves do mod KubeJS 6 que permite criar scripts em linguagem **JavaScript** para gerenciar servidores, adicionar novos blocos e itens, alterar receitas, e etc...

Outras modificações são feitas pelo formato de arquivo para arquivos de configuração "**.toml**" geradas pelos proprios mods.

Este projeto usa no seu desenvolvimento [Node.js](https://nodejs.org/) para gerar arquivos úteis e validar a formatação dos arquivos em JSON, TOML e JS atraves do [ESLint](https://eslint.org/) e seus plugins.

## Versões

- Minecraft - **1.19.2**
- MinecraftForge - **43.1.65**

## Documentações

- <a href="https://mods.latvian.dev/books/kubejs-6-1192/">KubeJS 6</a>
- <a href="https://docs.minecraftforge.net/en/latest/">MinecraftForge</a>
- <a href="https://docs.curseforge.com/#getting-started/">CurseForge</a>
