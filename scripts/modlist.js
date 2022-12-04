const fs = require('fs')
const { stripIndent } = require('common-tags')
const { installedAddons } = require('../minecraftinstance.json')

const modNameList = installedAddons
  .map(({ name, webSiteURL }) => ({ name, webSiteURL }))
  .sort((a, b) => {
    const name = a.name.toLowerCase()
    const nextName = b.name.toLowerCase()
    return (name < nextName) ? -1 : (name > nextName) ? 1 : 0
  })

const data = stripIndent`
# Lista de mods atuais do projeto:

${modNameList.map((mod) => `[${mod.name}](${mod.webSiteURL})`).join(`

`)}
`

const status = (err) => {
  if (err) throw err
  else console.log('Lista de mods carregada com sucesso!')
}

fs.writeFile('MODLIST.md', data, status)
