// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

ItemEvents.modification(event => {
	let itemsStackChangeTo64 = [
		'minecraft:ender_pearl',
		'minecraft:egg',
		'minecraft:snowball'
	]
	itemsStackChangeTo64.forEach(item => {
		event.modify(item, item => {
			item.maxStackSize = 64
		  })
	})
})