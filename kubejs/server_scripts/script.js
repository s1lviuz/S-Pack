// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.shaped('3x minecraft:clay_ball', [
		'S  '
	  ], {
		S: 'minecraft:clay'
	})

	event.shaped('16x minecraft:stick', [
		'  S',
		'  S'
		], {
		S: '#minecraft:logs'
	})
})

ServerEvents.tags('item', event => {

})