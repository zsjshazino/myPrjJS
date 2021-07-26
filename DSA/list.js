var LinkedList = function(){
    var head = null
    var length = 0

    var Node = function(element){
        this.element = element
        this.next = null
    }

    this.append = function(element){
        var node = new Node(element)

        if(head == null){
            head = node
        }else{
            var current = head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.getHead = function(){
        return head
    }

    this.insert = function(position, element){
        if(position >= 0 && position < length){
            var node = new Node(element)
            if(position == 0){
                var current = head
                head = node
                head.next = current
            }else{
                var current = head
                var index = 0
                var previous = null
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = node
                node.next = current
            }
            length++            
        }
    }

    this.removeAt = function(position){
        if(position >= 0 && position < length){
            var node = new Node(element)
            if(position == 0){
                var current = head
                head = current.next
            }else{
                var current = head
                var index = 0
                var previous = null
                while (index < position) {
                    previous = current
                    current = current.nexts
                    index++
                }
                previous.next = current.next
            }
            length--  
            return current         
        }
        return null
    }

    this.indexOf = function(element){
        var current = head
        var index = 0
        while (current !== null) {
            if(current.element == element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.remove = function(element){
        return this.removeAt(this.indexOf(element))
    }

    this.isEmpty = function(){
        return length == 0
    }

    this.size = function(){
        return length
    }
}


//insert test code
var lt = new LinkedList
lt.append(1)
lt.append(1)
lt.append(1)
lt.insert(1, 10)