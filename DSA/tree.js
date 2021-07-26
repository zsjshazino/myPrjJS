var Tree = function(){
    var Node = function(value){
        this.value = value
        this.left = null
        this.right = null
    }
    
    var root = null

    var insertNode = function(node, newNode) {
        if(newNode.value > node.value){
            //go to right
            if(node.right == null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }else if(newNode.value < node.value){
            //go to left
            if(node.left == null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{

        }
    }

    this.insert = function(value) {
        var newNode = new Node(value)
        if(root == null){
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }

    this.search = function(value) {
        
    }

    var findMinNode = function(node){
        if(node == null) return null
        while (node && node.left) {
            node = node.left
        }
        return node
    }
    var removeNode = function(node, value){
        if(node == null) return null
        if(value > node.value){
            //go to right
            node.right = removeNode(node.right, value)
            return node
        }else if(value < node.value){
            //go to left
            node.left = removeNode(node.left, value)
            return node
        }
        else{
            //remove
            if(node.left == null && node.right == null){
                node = null
                return null
            }

            if(node.left == null && node.right){
                node = null 
                return node.right
            }else if(node.right == null && node.left){
                node = null
                return node.left
            }

            var aux = findMinNode(node)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }
    // 替换为右侧子树的最小节点
    this.remove = function(key) {
        root = removeNode(root, key)
    }

    var min = function(node){
        if(node == null) return null
        while(node && node.left){
            node = node.left
        }
        console.log(node)
    }
    this.min = function() {
        return min(root)
    }

    var max = function(node){
        if(node == null) return null
        while(node && node.right){
            node = node.right
        }
        console.log(node)
    }
    this.max = function() {
        return max(root)
    }

    var traverse = function(node, callback){
        if(node == null) return
        //callback(node.value) //pre
        traverse(node.left, callback)
        callback(node.value) //in
        traverse(node.right, callback)
        //callback(node.value) //post
    }

    this.traverse = function(callback) {
        traverse(root, callback)
    }

    this.getRoot = function(value) {
        return root
    }
}

var t = new Tree()
t.insert(8)
t.insert(2)
t.insert(3)
t.insert(9)
//t.remove(3)

var print = function(value) {
    console.log("value - ", value)
}

t.traverse(print)