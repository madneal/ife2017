/**
 * Created by neal1 on 2017/3/6.
 */
var webPage = require('webpage');
var page = webPage.create();

var requestBaidu = function (word) {
    page.includeJs(
        'https://www.baidu.com',
        function () {
            (page.evaluate(function () {
                var $searchForm = $('form#form');
                $searchForm.find('input[name="wd"]').value(word);
                $searchForm.find('input[id="su"]').click();
                return document;
            }))
        }
    )

}