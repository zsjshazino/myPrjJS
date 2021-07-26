//this 指向要创建的对象
var Stack = function(){
    var items = []
    this.push = function(element){
       items.push(element)
    }
    this.pop = function(){
        return items.pop()
    }
    this.getItems = function(){
       return items
    }
    this.peak = function(){
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        return items.length === 0
    }
    this.clear = function(){
        items = []
    }
    this.size = function(){
        return items.length
    }
}

// 10 to 2 进制转换
var divBy2 = function(number){
    var stack = new Stack()
    var rem
    var str = ''
    while (number > 0) {
        rem = number % 2
        stack.push(rem)
        number = Math.floor(number / 2)
    }
    while(stack.isEmpty() == false){
        str += stack.pop()
    }
    return str
}

var fun = function(){
    return alert("hello")
}
