const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
        
  document.addEventListener('keydown', function(e) {
    if ( e.key === 20 ) {
      moveDodgerLeft();
    }
    if ( e.key === 22 ) {
      moveDodgerRight();
    }
  });


// function moveDodgerRight() {
//     const rightNumbers = dodger.style.right.replace("px", "")
//     const left = parseInt(rightNumbers, 10)

//     if (left < 0) {
//         dodger.style.left = `${left + 1}px`
//     }
// }
//     document.addEventListener("keydown", function (e) {
//         if (e.key === "ArrowRight") {
//             moveDodgerRight
//         }
//     })

// moving dodger back to right position