# AngularSignalsTest

Example project to test the implementation of signals in Angular 16

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/giboow/angular-signals-test)

## signals
### Create a signal with init value

```js
const counter = signal(0);
```

### Modify value of signal

```js
counter.set(1);
```


```js
counter.update( v => v = v + 1);
```

### Compute value 
```js
const double = computed(() => counter() * 2);
```


### Consume signals 

```js
effect(() => console.log("counter", counter()));
```

### Links : 
- https://github.com/angular/angular/discussions/49090
- https://www.angulararchitects.io/aktuelles/angular-signals/
