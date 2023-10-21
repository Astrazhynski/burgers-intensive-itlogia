import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currency = '$';

  form = this.fb.group({
      order:  ["", Validators.required],
      name:  ["", Validators.required],
      phone:  ["", Validators.required],
    });

    productsData = [
      {
        image: "1.png",
        alt: "Burger 1",
        title: "Бургер чеддер & бекон",
        text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
        price: 8,
        basePrice: 8,
        grams: 360
      },
      {
      image: "2.png",
      alt: "Burger 2",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390,
      },
      {
      image: "3.png",
      alt: "Burger 3",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420,
      },
      {
      image: "4.png",
      alt: "Burger 4",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      grams: 220,
      },
      {
      image: "5.png",
      alt: "Burger 5",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220,
      },
      {
      image: "6.png",
      alt: "Burger 6",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320,
      },
      {
      image: "7.png",
      alt: "Burger 7",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 280,
      },
      {
      image: "8.png",
      alt: "Burger 8",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      grams: 380,
      },
      {
      image: "9.png",
      alt: "Burger 9",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: 400,
      },
      {
      image: "10.png",
      alt: "Burger 10",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      grams: 300,
      },
      {
      image: "11.png",
      alt: "Burger 11",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 320,
      },
      {
      image: "12.png",
      alt: "Burger 12",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 360,
      },
    ];
  
    constructor (private fb: FormBuilder) {
    
  }
  
  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: 'smooth'});
    if (burger) {
      this.form.patchValue({
        order: burger.title + ' (' + burger.price + ' ' + this.currency + ' / ' + burger.grams + 'гр)'
      });
    }
  }

  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ! Мы скоро свяжемся с Вами!');
      this.form.reset();
    }
  }

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;


    switch (this.currency) {
        case '$':
            newCurrency = '₽';
            coefficient = 80;
            break;

        case '₽':
            newCurrency = 'BYN';
            coefficient = 3;
            break;

        case 'BYN':
            newCurrency = '€';
            coefficient = 0.9;
            break;

        case '€':
            newCurrency = '¥';
            coefficient = 6.9;
            break;

        case '¥':
            newCurrency = 'ITC';
            coefficient = 4.5;
            break;

        case 'ITC':
            newCurrency = '₿';
            coefficient = 0.1;
            break;

        case '₿':
            newCurrency = '£';
            coefficient = 13;
            break;

        case '£':
            newCurrency = '$';
            coefficient = 1;
            break;
    
        default:
            newCurrency = '$';
            coefficient = 1;
            break;
    }

    this.currency = newCurrency;
    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    })
  }


}
