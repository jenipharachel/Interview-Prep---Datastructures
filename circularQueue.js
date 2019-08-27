class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }

   }

   print() {
     return this.queue;
   }


   enqueue(item) {
    // Only change code below this line
    if((this.write == this.max) && (this.read == 0)) {
      return null;
    } 
    else if((this.write == (this.read - 1)) && (this.read !== 0)) {
      return null;
    }
    else if(this.write == this.max && this.read !==0){
      this.queue[this.write] = item;
      this.write = 0;
      return item;
    }
    else {
      this.queue[this.write] = item;
      this.write++;
      return item;
    }
    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line
    if(this.read == 0 && this.write == 0) {
      return null;
    }
    else if(this.read == this.write) {
      let dequeuedItem = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = 0;
      this.write = 0;
      return dequeuedItem;
    }
    else if(this.read == this.max) {
      let dequeuedItem = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = 0;
      return dequeuedItem;

    }
    // Only change code above this line
   }
}
