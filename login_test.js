Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.fillField('#user', 'bruno@gmail.com');
    I.fillField('#password', secret('teste1234'));
    I.click('#btnLogin');
    I.see('Login realizado', 'h2')
    I.saveScreenshot('Login_Success.png')

}).tag('@success');

Scenario('Login com senha invalida',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.fillField('#user', 'bruno@gmail.com');
    I.fillField('#password', secret('1234'));
    I.click('#btnLogin');
    I.see('Senha inválida.','span');
    I.saveScreenshot('Senha_Inválida.png')
   
}).tag('@senha_invalida')



Scenario('Tentando logar sem digitar senha e email',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.click('#btnLogin');
    I.see("E-mail inválido.", 'span');
    I.saveScreenshot('Logar_Sem_senha_e_email.png')
    
}).tag('@no_EmailAndPass')

Scenario('Tentando logar sem digitar senha ',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.fillField('#user', 'bruno@gmail.com');
    I.click('#btnLogin');
    I.see("Senha inválida." , 'span');
    I.saveScreenshot('Logar_Sem_senha.png')
   
}).tag('@noPass')

Scenario('Tentando logar sem digitar e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.fillField('#password', secret('teste1234'));
    I.click('#btnLogin');
    I.see('E-mail inválido.', 'span');
    I.saveScreenshot(' logar_sem_digitar_e-mail.png')
   
}).tag('noEmail')

/*
Scenario('Login com e-mail não cadastrado',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
   
});
*/
