YUI().use('test', 'console', function (Y) {
      var testCase = new Y.Test.Case({

          name: "Test function mycat",

          //---------------------------------------------
          // Special instructions
          //---------------------------------------------

          _should: {
              ignore: {
                  testName: true, //ignore this test
              }
          },

          //---------------------------------------------
          // Setup and tear down
          //---------------------------------------------

          setUp : function () {

          },

          tearDown : function () {

          },

          //---------------------------------------------
          // Tests
          //---------------------------------------------

          testIsItFunction: function () {
              Y.Assert.areEqual("function", typeof mycat, "type of 'mycat' should be function.");
          },
          testMyCatWithOneParameter: function() {
              Y.Assert.areEqual("Hello", mycat("Hello"));
          },
          testMyCatWithLeftWithSpecialTextAndRightIsNull: function() {
              Y.Assert.areEqual("Hello, nat", mycat("Hello, nat"));
          },
          testMyCatWithLeftIsNullRightIsNotNull: function() {
              Y.Assert.areEqual("Hello, nat", mycat(null, "Hello, nat"));
          },
          testMyCatWithTwoParameters: function() {
              Y.Assert.areEqual("Hello, nat", mycat("Hello", ", nat"));
          },
          testMyCatWithOutParameter: function() {
              Y.Assert.areEqual(undefined, mycat());
          },
          testTooMuchParameters: function() {
              Y.Assert.areEqual("Hello, nat", mycat('Hello, ', 'nat', 'third param'));
          },
          testBothNullReturnUndefined: function() {
              Y.Assert.areEqual(undefined, mycat(null, null));
          },
          testBothNullReturnNull: function() {
              Y.Assert.areEqual(null, mycat(null, null));
          },

      });

      //example test suite
      var ExampleSuite = new Y.Test.Suite("Example Suite");

      ExampleSuite.add(testCase);

      /**
        * Use console on Web or Use console.log
        */
      var useWebConsole = true;

      if (useWebConsole) {
        var r = new Y.Console({
            newestOnTop : true,
            style: 'block' // to anchor in the example content
        });
        r.render('#testLogger');
      }

      //run test
      Y.Test.Runner.add(ExampleSuite);
      Y.Test.Runner.run();

})

