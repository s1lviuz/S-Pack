/* eslint-disable no-undef */

// courtesy of ChiefArug and KubeJS Discord
const CROP = Java.loadClass('net.minecraft.world.level.block.CropBlock')
BlockEvents.rightClicked(event => {
  const block = event.block
  const mcLevel = block.minecraftLevel
  const blockState = block.blockState
  const mcBlock = blockState.block
  if (mcBlock instanceof CROP) {
    const mcPlayer = event.player.minecraftPlayer
    if (mcBlock.isMaxAge(blockState) && !event.player.isFake()) {
      const loot = CROP.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
      let seedYeeted = false
      for (const i in loot) {
        if (loot[i].asKJS().id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).asKJS().id) {
          loot[i].count--
          seedYeeted = true
          break
        }
      }
      const dir = event.getFacing()
      loot.forEach(item => {
        CROP.popResourceFromFace(mcLevel, block.pos, dir, item)
      })
      if (seedYeeted || block.hasTag('minecraft:leaves')) {
        block.set(block.id, { age: '0' })
        event.server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
      } else { // if no seed was dropped for some odd reason
        mcLevel.destroyBlock(block.pos, true, null, 32)
      }
      event.cancel()
      event.player.swingArm(event.hand)
    }
  }
})
