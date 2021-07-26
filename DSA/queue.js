var Queue = function(){
    var items = []

    this.enqueue = function(element){
        items.push(element)
    }
    this.dequeue = function(){
        return items.shift()
    }
    this.getItems = function(){
        return items
    }
    this.front = function(){
        return items[0]
    }
    this.isEmpty = function(){
        return items.length === 0
    }
    this.size = function(){
        return items.length
    }
}

var PriorityQueue = function(){
    var items = []
    //辅助类
    var QueueItem = function(element, priority){
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element, priority){
        var queueItem = new QueueItem(element, priority)
        var added = false
        for(var i = 0; i < items.length; i++){
            if(queueItem.priority > items[i].priority){
                items.splice(i, 0, queueItem)
                added = true
                break
            }
        }
        if(added == false){
            items.push(queueItem)
        }
        console.log(items)
    }
    this.getItems = function(){
        return items
    }
}

var pq = new PriorityQueue()
pq.enqueue("aa", 10)
pq.enqueue("bb", 12)
