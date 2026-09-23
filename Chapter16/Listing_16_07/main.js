'use strict';
asyncFunction(
  (error, result) => {
    // more code
    asyncFunction2(
      // more code
      (error2, result2) => {
        // more code
        asyncFunction3(
          (error3, result3) => {
            // more code
            asyncFunction4(
              (error4, result4) => {
                // more code
                asyncFunction5(
                  (error5, result5) => {
                    // more code
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
