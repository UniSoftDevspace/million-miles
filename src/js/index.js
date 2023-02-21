//This function will be called when user click changing language
function translate(lng, tagAttr) {
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
}
function enTranslate()
{
  translate('en', 'lng-tag')
}

function cnTranslate()
{
  translate('cn', 'lng-tag')
}

// $(document).ready(function () {
//   //This is id of HTML element (English) with attribute lng-tag
//   $("#enTranslator").click(function () {
//     translate('en', 'lng-tag');
//   });
//   //This is id of HTML element (Chinese) with attribute lng-tag
//   $("#cnTranslator").click(function () {
//     translate('cn', 'lng-tag');
//   });
// });


