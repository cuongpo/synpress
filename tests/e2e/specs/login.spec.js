describe('Test User Login', () => {

    
    it('Connects with Metamask', () => {
        cy.wait(5000);
        // cy.visit('https://trading-qc.nonprodposi.com/USD-M/BNB/BUSD').contains('Enviroment:Acceptance');;
        cy.visit({url: 'https://trading-qc.nonprodposi.com/USD-M/BNB/BUSD', failOnStatusCode: false});
        cy.wait(5000);
        cy.contains('Start Trading').click();
        cy.wait(5000);
        cy.contains('Connect Wallet').click();
        cy.wait(5000);
        cy.contains("Metamask").click();
        cy.wait(5000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(5000);
        cy.contains('No Thanks').click();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[3]/div/input').type('0.2');
        cy.wait(5000);
        cy.get("#root > div > div > div.css-2h8wrg > div.css-i56gfm > div.css-1lzi37e > div > div.css-l8af7v > div:nth-child(1) > button").click();
        cy.wait(5000);
        cy.contains("Confirm").click();
        cy.wait(10000);
        cy.switchToMetamaskWindow();
        cy.wait(10000);
        cy.confirmMetamaskTransaction();
        cy.wait(10000);
    })
  })