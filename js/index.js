// (function() {
//     var words = ["Designer", "Developer", "Gamer", "Programmer"],
//         i = 0;
//     setInterval(function() {
//         $("#changingword").slideUp(function() {
//             $(this)
//                 .html(words[(i = (i + 1) % words.length)])
//                 .slideDown();
//         });
//     }, 3000);
// })();