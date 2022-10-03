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
        cy.switchToMetamaskWindow();
        cy.wait(5000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(5000);
        cy.switchToCypressWindow();
        cy.wait(5000);
        cy.get('#root > div > div > div.css-2h8wrg > div.css-i56gfm > div.css-1lzi37e > div > div.css-0 > div:nth-child(2) > div.css-eydfb5 > div:nth-child(1)').click();
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