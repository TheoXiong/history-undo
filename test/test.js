const { History } = require('../')

const history = new History()

history.push({})

let obj = { value: 100 }
history.push(obj)

obj.value = 200
history.push(obj)

console.log('[ current ]: ', history.current)
console.log('[ count ]: ', history.count)
console.log()

console.log('[ undoable ]: ', history.undoable)
console.log('[ undo ]:  ', history.undo())
console.log()

console.log('[ current ]: ', history.current)
console.log()

console.log('[ redo ]: ', history.redo())
console.log('[ redoable ]: ', history.redoable)