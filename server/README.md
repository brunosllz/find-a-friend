# App

Find a friend.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um organização;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível listar o perfil do usuário;
- [x] Deve ser possível cadastrar um pet;
- [x] Deve ser listar todos os pets por cidade;
- [x] Deve ser filtrar os pets;
- [x] Deve ser possivel buscar um pet;
- [x] Deve ser possivel listar todos os estados do brasil;
- [x] Deve ser possivel listar todas as cidades de acordo com o estado;

## RNs (Regras de negócio)

- [x] Não deve ser possivél cadastrar uma organização com o e-mail duplicado;
- [x] A senha do usuário deve ser hashed;
- [x] A senha do usuário deve conter no minimo 8 caracteres, sendo 1 número, 1 carater especial, 1 caracter minúsculo e maiusculo;
- [ ] A consulta de cep dever ser realizado através de um serviço externo;
- [x] A listagem de estados e cidades devem ser realizadas através de um serviço externo;
- [x] O pet deve deve ser cadastro com energia no minimo 1, no maximo 5;
- [x] O pet deve deve ser cadastro com a descrição de  minimo 1 e no maximo 300 caracteres;
- [ ] Deve ser possível inserir no maximo 5 fotos para cada pet;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ] Deve ser realizado a validação do parametro recebido na rota de buscar as cidades pelo estado;
- [x] Os dados da aplicação devem ser persistidos em um banco MySQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;