var Set2 = function(){
    var items = {}
    var length = 0
    //template
    this.action = function(){

    }

    this.has = function(value){
        return items.hasOwnProperty(value)
    }

    this.add = function(value){
        if(this.has(value)){
            return false
        }else{
            items[value] = value
            length++
            return value
        }
    }
    this.getItems = function(){
        return items
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value]
            length--
            return true
        }else{
            return false
        }
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        //return length

        // var count = 0
        // for(var i in items){
        //     if(items.hasOwnProperty(i)){
        //         count++
        //     }
        // }
        // return count
        return Object.keys(items).length
    }

    this.value = function(){
        var values = []
        for(var i in items){
            if(items.hasOwnProperty(i)){
                values.push(items[i])
            }
        }
        return values
    }

    this.union = function(otherSet){
        var resultSet = new Set2()

        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            resultSet.add(arr[i])
        }

        arr = otherSet.value()
        for(var i = 0; i < arr.length; i++){
            resultSet.add(arr[i])
        }
        return resultSet
    }

    this.intersection = function(otherSet){
        var resultSet = new Set2()

        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            if(otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
    }

    this.intersection = function(otherSet){
        var resultSet = new Set2()

        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            if(otherSet.has(arr[i])){
                
            }else{
                resultSet.add(arr[i])
            }
        }
        return resultSet 
    }
        

}


//test code
var set = new Set2()
set.add(1)
set.add(2)
set.add(3)

var set2 = new Set2()
set2.add(2)
set2.add(3)
set2.add(4)
set2.add(5)

//set.union(set2)