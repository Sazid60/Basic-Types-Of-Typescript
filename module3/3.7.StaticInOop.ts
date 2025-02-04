{
  // static
  // static er moddhe memory change hoy na
  class Counter {
    // count:number = 0;

    // increment(){
    //     return this.count = this.count+1
    // }
    // decrement(){
    //     return this.count = this.count-1
    // }

    // using static

    // if we do not want any memory change
    //     static count:number = 0;
    //     increment(){
    //         return Counter.count = Counter.count+1
    //         // jehetu static bole dsi so class k nam dhore dakte hobe
    //     }
    //     decrement(){
    //         return Counter.count = Counter.count-1
    //     }
    // }

    // const instance1 = new Counter()
    // console.log(instance1.increment());
    // console.log(instance1.increment());

    // const instance2 = new Counter()
    // console.log(instance2.increment());
    // console.log(instance2.increment());

    // if we want to make the method static
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter()
  console.log(Counter.increment());

  // const instance2 = new Counter()
  console.log(Counter.increment());
}
