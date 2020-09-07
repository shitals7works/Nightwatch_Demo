module.exports = {
    url : 'https://www.google.com/advanced_search',
    elements: {

         mainQueryInput :'input[name="as_q"]',

         languageDropdown :'#lr_button',
         //languageDropdownValue : '.goog-menuitem[value="lang_it"]',

         latUpdateDropdown: '#as_qdr_button',
        // latUpdateDropdownValue: '.goog-menuitem[value="m"]',
         submitButton: '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(value){
            const page = this;
            return this
                    .setValue('@mainQueryInput', value)          
                    
        },

        selectFilter(selector, value){
            const page = this;
            return this
                .click(selector) 
                .click('.goog-menuitem[value="${value}"]');  
        },

        search(){
            return this
            .click('@submitButton');
        }

       
    }]
}