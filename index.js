let firstC, money, secondC, result;

    do {
      firstC = prompt('enter the first currency');
      while (firstC != 'uah' && firstC != 'dol' && firstC != 'eur' && firstC != 'pln' && firstC != 'gbp') {
        alert('inccorect data, you can only enter : uah, dol, pln, eur, gbp');
        firstC = prompt('enter the first currency');
      }

      money = +prompt('enter the amount of money');
      while (money < 0) {
        alert('inccorect data, ....');
        money = +prompt('enter the amount of money');
      }

      secondC = prompt('enter the second currency');
      while (secondC == firstC || (secondC != 'uah' && secondC != 'dol' && secondC != 'eur' && secondC != 'pln' && secondC != 'gbp')) {
        alert('inccorect data, you can only enter : uah, dol, pln, eur, gbp and the first currency is not equal to the second');
        secondC = prompt('enter the second currency');
      }
      switch (firstC) {
        case 'uah':
          switch (secondC) {
            case 'eur':
              result = money * 0.03;
              break;
            case 'dol':
              result = money * 0.03;
              break;
            case 'pln':
              result = money * 0.14;
              break;
            case 'gbp':
              result = money * 0.02;
              break;
            default:
              break;
          }
          break;
        case 'gbp':
          switch (secondC) {
            case 'uah':
              result = money * 38.2;
              break;
            case 'dol':
              result = money * 1.46;
              break;
            case 'eur':
              result = money * 1.2;
              break;
            case 'pln':
              result = money * 5.4;
              break;
            default:
              break;
          }
          break;
        case 'dol':
          switch (secondC) {
            case 'uah':
              result = money * 26.3;
              break;
            case 'eur':
              result = money * 0.8;
              break;
            case 'pln':
              result = money * 3.5;
              break;
            case 'gbp':
              result = money * 0.6;
              break;
            default:
              break;
          }
          break;
        case 'pln':
          switch (secondC) {
            case 'uah':
              result = money * 7.5;
              break;
            case 'dol':
              result = money * 0.26;
              break;
            case 'gbp':
              result = money * 0.18;
              break;
            case 'eur':
              result = money * 0.21;
              break;
            default:
              break;
          }
          break;
        case 'eur':
          switch (secondC) {
            case 'uah':
              result = money * 32.2;
              break;
            case 'dol':
              result = money * 1.2;
              break;
            case 'pln':
              result = money * 4.2;
              break;
            case 'gbp':
              result = money * 1.5;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      alert(`Your result is first currency = ${firstC}, your second currency ${secondC}, the amount of money: ${money} you get =  ${result}`);
    } while (confirm('Do you want to continue?'));

