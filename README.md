# history-undo
一个用于管理历史状态的库，支持撤销与重做

## 安装
```
npm i history-undo --save
```

## 使用

### 引入模块
1. ES6 import 引入
```
import { History } from 'history-undo'
```

2. CommonJs require 引入
```
const { History } = require('history-undo')
```

3. Browser script 引入
```
<script src="/dist/history.min.js"></script>
```

### 基础用法
示例：
```
const history = new History()

let obj = { value: 100 }
history.push(obj)
obj.value = 200
history.push(obj)

console.log('[ undo ]:  ', history.undo())  // { value: 100 }
console.log('[ redo ]: ', history.redo()) // { value: 200 }
console.log('[ undo ]:  ', history.undo())  // { value: 100 }
console.log('[ current ]: ', history.current) // { value: 100 }

```

## API
### History
创建实例
```
new History(options)
```
`options.maxLength` {Number}: 栈最大长度（最多可保存的状态数量，超过后移出最先入栈的数据），默认为`10`
`options.onChange` {Function}: 调用push/undo/redo/clear时的事件回调

### push
新状态入栈

```
history.push(target)
```
`target` {Object}: 任意要保存的状态数据

### undo
撤销，返回上一个保存的状态数据。如果不可撤销，则返回null
```
history.undo()
```

### redo
重做，返回下一个保存的状态数据。如果不可重做，则返回null
```
history.redo()
```

### clear
清空栈内容
```
history.clear()
```

### current
只读属性，返回当前状态数据
```
history.current
```

### undoable
只读属性，是否可撤销
```
history.undoable
```

### redoable
只读属性，是否可重做
```
history.redoable
```

### count
只读属性，栈长度（保存的状态数量）
```
history.count
```


## 测试
```
npm run test
```


