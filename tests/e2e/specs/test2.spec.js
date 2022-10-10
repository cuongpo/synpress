describe('Test User Login', () => {

    
    it('Connects with Metamask', () => {
       
        cy.wait(10000);

        // cy.visit('https://trading-qc.nonprodposi.com/USD-M/BTC/BUSD').contains('Enviroment:Acceptance');;
        cy.visit({url: 'https://trading-qc.nonprodposi.com/USD-M/BTC/BUSD', failOnStatusCode: false});
        cy.wait(5000);
        // close popup start trading
        cy.contains('Start Trading').click();
        cy.wait(5000);
        
        // import acc new
        cy.switchToMetamaskWindow();
        cy.wait(1000);
        cy.disconnectMetamaskWalletFromDapp();
        cy.wait(1000);
        cy.importMetamaskAccount("3fc4aa705f67d00dcc2587d55e618615b965504b502c4c3e6947ee5e86b07b2d");
        cy.wait(1000);
        cy.switchMetamaskAccount("Account 3");
        cy.wait(10000);
        
        // connect wallet
        cy.switchToCypressWindow();
        cy.wait(1000);
        cy.contains('Connect Wallet').click();
        cy.wait(1000);
        cy.contains('Metamask').click();
        cy.wait(1000);
        cy.acceptMetamaskAccess();
        cy.wait(1000);

        // close popup onboarding
        cy.get('#react-joyride-step-0 > div > div > div > div.css-133zqc2 > div.css-jx88qh').click();
        cy.wait(1000);
        // open market
        cy.get('#root > div > div > div.css-2h8wrg > div.css-i56gfm > div.step-fp-five.css-1lzi37e > div > div.css-7dgn02 > div > div.css-wv79st > button').click();
        cy.wait(1000);
        // switch currency by base or quote
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/button').click();
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/div[2]/div/div/button[2]').click();
        cy.wait(1000);
        // input quantity of market order
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/input').type("0.05");
        cy.wait(1000);
        // change leverage by type
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/div/div/input').type('15x');
        cy.wait(1000);
        // choose buton long/short
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[4]/div[3]/button').click();
        cy.wait(3000);
        // confirm transaction
        cy.contains('Confirm').click();
        cy.wait(5000);
        cy.confirmMetamaskTransaction();
        cy.wait(10000);
       
    })
  })
