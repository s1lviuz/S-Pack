const fs = require('fs')
const { stripIndent } = require('common-tags')
const { installedAddons } = require('../minecraftinstance.json')

const modNameList = installedAddons.map((mod) => mod.name)

const data = stripIndent`
# Lista de mods atuais do projeto:

${modNameList.join('\n')}
`

const status = (err) => {
  if (err) throw err
  else console.log('Lista de mods carregada com sucesso!')
}

fs.writeFile('MODLIST.md', data, status)
