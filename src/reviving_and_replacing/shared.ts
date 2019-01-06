class Counter {
  count:number;
  constructor(value?:number) {
    this.count = value || 0;
  }
  increment() {
    this.count += 1;
  }
}

exports.replacer = function(key:any, value:any) {
  if(value instanceof Counter) {
    return {$class: 'counter', $props: {count: value.count}};
  }
  return value;
};

exports.reviver = function(key:any, value:any) {
  if(value && value.$class === 'counter') {
    var obj = new Counter(value.$props.count);
    return obj;
  }
  return value;
};
