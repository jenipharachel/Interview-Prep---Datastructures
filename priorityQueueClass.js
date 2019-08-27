function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    
    //TODO
    this.enqueue = function(item) {
        for(var i=0; i<this.collection.length; i++) {
            if(item[1] < this.collection[i][1]) {
                var temp = this.collection.slice(i);
                var res = this.collection.slice(0,i);
                var result = res.concat(item).concat(temp);
                return result;
            }
        }
        return this.collection.push(item);
    };
    this.dequeue = function() {
        //var temp = this.collection[i].sort((a,b) => a-b);
        return this.collection.shift();        
    };
    this.front = function() {
        return this.collection[0];
    };
    this.size = function() {
        return this.collection.length;
    };
    this.isEmpty = function() {
        if(this.collection.length == 0) {
            return true;
        }
    };
    
}
