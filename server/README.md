# App

Find a friend.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um organização;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível listar o perfil do usuário;
- [x] Deve ser possível cadastrar um pet;
- [x] Deve ser listar todos os pets por cidade;
- [x] Deve ser filtrar os pets;
- [ ] Deve ser possivel buscar um pet;
- [ ] Deve ser possivel listar todos os estados do brasil;
- [ ] Deve ser possivel listar todos as cidades do brasil;

## RNs (Regras de negócio)

- [x] Não deve ser possivél cadastrar uma organização com o e-mail duplicado;
- [x] A senha do usuário deve ser hashed;
- [x] A senha do usuário deve conter no minimo 8 caracteres, sendo 1 número, 1 carater especial, 1 caracter minúsculo e maiusculo;
- [ ] A consulta de cep dever ser realizado através de um serviço externo;
- [ ] O pet deve deve ser cadastro com energia no minimo 1, no maximo 5;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [x] Os dados da aplicação devem ser persistidos em um banco MySQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;