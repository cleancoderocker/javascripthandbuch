'use strict';
asyncFunction(
  (error, result) => {
    // weiterer Code
    asyncFunction2(
      // weiterer Code
      (error2, result2) => {
        // weiterer Code
        asyncFunction3(
          (error3, result3) => {
            // weiterer Code
            asyncFunction4(
              (error4, result4) => {
                // weiterer Code
                asyncFunction5(
                  (error5, result5) => {
                    // weiterer Code
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
