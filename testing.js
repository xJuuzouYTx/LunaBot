const fetch = require("node-fetch");
const cheerio = require('cheerio');

const myscrapper = async() => {
    const response = await fetch("https://www.pdfdrive.com/search?q=pideme+lo+que+quieras");
    const body = await response.text();
    // Load body data
    const $ = cheerio.load(body);
    
    var message = "";
    $('.files-new > ul > li').map((i, el) => {
        const title = $(el).find('a > h2').text();
        const pageCount = $(el).find('div .fi-pagecount').text();
        const year = $(el).find('div .fi-year').text();
        const lang = $(el).find('div .fi-lang').text();
        const url = "https://www.pdfdrive.com" + $(el).find('.ai-search').attr('href');
        
        console.log(title);
        console.log(pageCount);
        console.log(year);
        console.log(lang);
        console.log(url);
    });
}

myscrapper();