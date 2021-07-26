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

var Graph = function(){
    var vertices = []

    var adjList = {}



    this.addVertex = function(v){
        vertices.push(v)
        adjList[v] = []
    }

    this.addEdge = function(a, b){
        adjList[a].push(b)
        adjList[b].push(a)
    }
    this.print = function(){
        var s = '\n'
        for(var i = 0; i < vertices.length; i++){

            var vertex = vertices[i]
            s += vertex + ' => '
            var edge = adjList[vertex]            
            for(var j = 0; j < edge.length; j++){
                s += edge[j]
            }
            s += '\n'
        }
        console.log(s)
    }

    var initColor = function(){
        var color = {}
        for(var i = 0; i < vertices.length; i++){
            color[vertices[i]] = 'white'
        }
        return color
    }
    this.bfs = function(v, callback){
        var color = initColor()
        var queue = new Queue()
        queue.enqueue(v)

        while (!queue.isEmpty()) {
            var now = queue.dequeue()
            var edge = adjList[now]
            for(var i = 0; i < edge.length; i++){
                var w = edge[i]
                if(color[w] == 'white'){
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }
            color[now] = 'black'
            if(callback){
                callback(now)
            }
            
        }
    }    

    var dfsVisit = function(u, color, callback){
        color[u] = 'grey'
        var n = adjList[u]
        for(var i = 0; i < n.length; i++){
            var w = n[i]
            if(color[w] == 'white'){
                dfsVisit(w, color, callback)
            }
        }
        
        color[u] = 'black'
        if(callback){
            callback(u)
        }
    }
    this.dfs = function(v, callback){
        var color = initColor()
        dfsVisit(v, color, callback)
    }
}

var g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('C', 'D')
