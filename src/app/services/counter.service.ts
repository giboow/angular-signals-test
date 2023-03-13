import { computed, effect, signal } from "@angular/core";

const counter = signal(0);

const double = computed(() => counter() * 2);

const isEven = computed(() => counter() % 2 === 0);


effect(() => console.log("counter", counter()));

export default { counter, double, isEven}