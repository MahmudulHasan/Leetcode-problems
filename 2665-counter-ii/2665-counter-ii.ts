type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let samesamebutdifferent = init;
    return {
        increment: () => {
          return ++samesamebutdifferent;
        },
        decrement: () => {
          return --samesamebutdifferent;
        },
        reset: () => {
          return samesamebutdifferent = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */