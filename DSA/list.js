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
}