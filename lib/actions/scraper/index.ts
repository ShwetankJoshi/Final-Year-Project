import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeProduct(url:string){
    if(!url) return;



    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_59a2e3b1-zone-dealseeker:j79wz8w569gz -k https://lumtest.com/myip.json


    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth:{
            username:'${username}-session-${session_id}',
            password,
        },
        host:'brd.superproxy.io',
        port , 
        rejectUnauthorized:false,
    }
    try {
        const resonse = await axios.get(url,options)
        // console.log(resonse.data);
        const $ = cheerio.load(resonse.data);

        const title = $('#productTitle').text().trim();
        console.log(title)


    } catch (error:any) {
        throw new Error('Failed to scrape product:${error.message')
    }
}