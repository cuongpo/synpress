describe('Test User Login', () => {

    
    it('Connects with Metamask', () => {
        // cy.visit('https://trading-qc.nonprodposi.com/USD-M/BTC/BUSD').contains('Enviroment:Acceptance');;
        cy.visit({url: 'https://trading-qc.nonprodposi.com/USD-M/BTC/BUSD', failOnStatusCode: false});
        cy.wait(1000);
        // close popup start trading
        cy.contains('Start Trading').click();
        cy.wait(1000);
        // get lastPrice
        
        // connect wallet
        cy.contains('Connect Wallet').click();
        cy.wait(1000);
        cy.contains('Metamask').click();
        cy.wait(1000);
        cy.acceptMetamaskAccess();
        cy.wait(1000);
        
        // close popup onboarding
        cy.get('#react-joyride-step-0 > div > div > div > div.css-133zqc2 > div.css-jx88qh').click();
        
        cy.wait(1000);
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[1]/div[1]/div[2]/span/div/div/div[2]/div[1]/p').then(($x) => {
            let lastPrice = $x.text();
            cy.log(lastPrice);
            // 19,668.82 -> 19668.82
            var t = lastPrice.indexOf(",");
            var chuoi_dau = lastPrice.slice(0,t);
            cy.log("chuoi_dau"+chuoi_dau);
            var chuoi_sau = lastPrice.slice(t+1,lastPrice.length-1);
            cy.log("chuoi_sau"+chuoi_sau);
            var final = chuoi_dau + chuoi_sau;
            const final2 = Number.parseInt(final) + 300;
            cy.log("final"+final2);
        
        cy.wait(1000);

        // input price 
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[1]/div/div[1]/div[3]/div/input').clear();
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[1]/div/div[1]/div[3]/div/input').type(final2);
        cy.wait(2000);
        });
        
        // switch currency by base or quote
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/button').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/div/div/button[2]').click();
        
        cy.wait(5000);
        // input quantity of market order
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/input').type('0.1');
        cy.wait(3000);
        // change leverage by type
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/div/div/input').type('15x');
        cy.wait(1000);
        // choose buton long/short
        cy.get('#root > div > div > div.css-2h8wrg > div.css-i56gfm > div.step-fp-five.css-1lzi37e > div > div.css-l8af7v > div:nth-child(1) > button').click();
        cy.wait(3000);
        // confirm transaction
        cy.contains('Confirm').click();
        cy.wait(5000);
        cy.confirmMetamaskTransaction();
        cy.wait(10000);
        
        

    })
})
