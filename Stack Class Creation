function Stack() { 

    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    
    this.push = function(item) {
       return collection.push(item);
    };
    this.pop = function() {
        return collection.pop();
    };
    this.peek = function() {
        return collection[0];
    };
    this.isEmpty = function() {
        if(collection.length == 0) {
            return true;
        }
    };
    this.clear = function() {
        return collection.forEach((item) => {
            collection.pop(item);
        });
    };
    
}
