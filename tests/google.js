module.exports ={
    '@tags' : ['google'],
    'Google advanced search: Elon Musk'(browser) {
       
        const mainQuery = 'Elon Musk';
       // const mainQueryInputSelector = 'input[name="as_q"]';

        //const languageDropdownOpnerSelector = '#lr_button';
        //const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

       // const latUpdateDropdownOpnerSelector = '#as_qdr_button';
       //const latUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        //const submitButtonSelector = '.jfk-button[type="submit"]';

        const page = browser.page.googleAdvancedSearch(); //we have all above commited selectors     in page object file

        const resultsPageQuerySelector = '#searchform input[name="q"][value= "${mainQuery}"]'
        const resultsPageLanguageSelector = '[aria-label="Search Italian Pages"]'
        const resultsPageLatUpdateSelector = '[aria-label="Past Month"]'

       // browser
       // .url('https://www.google.com/advanced_search') // page object has url also

       page
       .navigate()
        //.setValue(mainQueryInputSelector, mainQuery)
        .setQuery(mainQuery)

        //.click(languageDropdownOpnerSelector) 
        //.click(languageDropdownValueSelector)
        //Applying filter command in page object
        .selectFilter('@languageDropdown', 'lang_it')

        //.click(latUpdateDropdownOpnerSelector)
        //.click(latUpdateDropdownValueSelector)
        .selectFilter('@lastUpdateDropdown', 'm')

        //.perform(() => {debugger;})

       // .click(submitButtonSelector)
       .search();   //using search in case of submit button and use in page object

       browser
        .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
        .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
        .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Italian Pages', 'UI: Language is set yo Italian');
        browser.assert.containsText(resultsPageLatUpdateSelector, 'Past Month', 'UI: Lat update is set to past month');

        browser.saveScreenshots('tests_output/google.png')
    }
}