import { AppPage } from './app.po';

describe('pokedex App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bem vindo para o App!');
  });
});
