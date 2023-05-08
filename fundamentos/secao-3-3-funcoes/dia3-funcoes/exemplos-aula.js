/*let diasDaSemana = {
    1: 'domingo',
    2: 'segunda-feira',
    3: 'terça-feira',
    4: 'quarta-feira',
    5: 'quinta-feira',
    6: 'sexta-feira',
    7: 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo*/
  /*let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4*/
  /*let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque*/
  /*let player = {
     name: 'Marta',
     lastName: 'Silva',
     age: 34,
     medals: { golden: 2, 
        silver: 3 },
  }
  player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
 console.log('A jogadora ' + player.name  + ' tem ' + player.age  +  ' anos')
 console.log(player['bestInTheWorld']);
 console.log('A jogadora possui ' + player.medals.golden  + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');*/
 // Com o template literals
 const nome = "Gus";
const modulos = [1];
const empresa = {
  nome: "Trybe",
  nota: 8001,
};
 modulos.push(3);
 nome = "Batman";
 empresa.nota = 8002;