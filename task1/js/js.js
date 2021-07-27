class EventEmitter {

  constructor() {
    this.events = {};
  }
  
  
  
addEventListener(name, handler) {('name', () => {
  emitter.emit('event:name-changed', {name: input.value});
});}

removeEventListener(name, handler)  {('name', () => {
  emitter.emit('event:name-changed', {name: ''});
});}

  

  emit(name, event) {
    const data = this.events[name];
    if( data ) {
      data.forEach(fn => {
         fn.call(null, event);
       });
     }
  }
}

export { EventEmitter };
