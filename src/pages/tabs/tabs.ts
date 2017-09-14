import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { QuestionPage } from '../questions/questions'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RegisterPage;
  tab3Root = QuestionPage;

  constructor() {

  }
}
