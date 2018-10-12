var foo = (function () { 

  function bar() {
    console.log('this is public');
  }

  function test() {
    console.log('this is public too');
  }

  function privateMethod() {
    console.log('this is private');
  }

  return {
    bar: bar,
    test: test
  }


 }

)();
foo.bar();
foo.test();
