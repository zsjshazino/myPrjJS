var Dictionary = function(){
    var items = {}
    this.action = function(){

    }

    this.has = function(key){
        // return items.hasOwnProperty(key)
        return key in items
    }

    this.set = function(key, value){
        // items.key = value
        items[key] = value
    }

    this.delete = function(key){
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.get = function(key){
        if(this.has(key)){
            return items[key]
        }
        return undefined
    }

    this.getItems = function(){
        return items
    }
}

//test code
var d = new Dictionary()
d.set("price", 200)
d.set("price1", 100)


