//1 -
 /*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, ' + [info.personagem]);*/

  //2- 
  /*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'sim'
  console.log(info);*/

  //3-
 /* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
for(let index in info){
console.log(index);
}*/
  
//4-
/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
for(let key in info){
console.log(info[key]);
}*/
//5-
/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
}
for (let key in info){
    if (key === 'recorrente' &&
    info[key] === 'sim' &&
    info2[key] === 'sim')
       {
        console.log('Ambos recorrentes');
      } else {
        console.log(info[key] + ' e ' + info2[key]);
      }
    } */
// Pedido Cliente
/*let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  function customerInfo(order) {
    let personDelivery = order.order.delivery.deliveryPerson
    let ordem = order.name
    let numberPhone = order.phoneNumber
    let endereco = ', R: ' + order.address.street + ', Nº ' + order.address.number + '-Ap: ' + order.address.apartment

    return 'Olá ' + personDelivery + ', ' + ' entrega para: ' + ordem + ', '  + 'Telefone: '+ numberPhone + endereco 
  }
  
  console.log(customerInfo(order));
  
  function orderModifier(order) {
   let newName = order.newName ='Luiz Silva';
   let totalValor = order.payment.valorTotal = 50;
   
   let pizzaECoca = Object.keys(order.order.pizza) + ' e ' + order.order.drinks.coke.type + ' é R$'
   return 'Olá, ' + newName + ', o valor total de seu pedido de ' + pizzaECoca + totalValor
  }
  
  console.log(orderModifier(order));*/