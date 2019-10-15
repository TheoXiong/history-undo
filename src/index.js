const _stack = Symbol('_stack')

class History {
  constructor (options) {
    options = options || {}
    this[_stack] = []
    this.position = -1
    this.maxLength = (typeof options.maxLength !== 'undefined') ? options.maxLength : 10
  }
  destroy () {
    this.clear()
  }
  clear () {
    this[_stack] = []
    this.position = -1
  }
  push (target) {
    if ((this.position + 1) >= this.maxLength) {
      while (this[_stack].length >= this.maxLength) {
        this[_stack].shift()
      }
    }
    this.position = Math.min(this.position, this[_stack].length - 1)
    this[_stack].splice(this.position + 1)
    this[_stack].push(JSON.stringify(target))
    this.position++
  }
  undo (callback) {
    if (!this.undoable) {
      return
    }
    let target = JSON.parse(this[_stack][--this.position])
    typeof callback === 'function' ? callback(target) : ''

    return target
  }
  redo (callback) {
    if (!this.redoable) {
      return
    }
    let target = JSON.parse(this[_stack][++this.position])
    typeof callback === 'function' ? callback(target) : ''

    return target
  }
  get current () {
    if (this.position >= 0 && this.position < this[_stack].length) {
      return JSON.parse(this[_stack][this.position])
    } else {
      return undefined
    }
  }
  get undoable () {
    return this.position > 0
  }
  get redoable () {
    return this.position < (this.count - 1)
  }
  get count () {
    return this[_stack].length
  }
}

module.exports = {
  History
}