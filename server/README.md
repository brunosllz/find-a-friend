# App

Find a friend.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um organização;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível listar o perfil do usuário;
- [ ] Deve ser possível cadastrar um pet;
- [ ] Deve ser listar todos os pets;
- [ ] Deve ser filtrar os pets;

## RNs (Regras de negócio)

- [x] Não deve ser possivél cadastrar uma organização com o e-mail duplicado;
- [x] A senha do usuário deve ser hashed;
- [x] A senha do usuário deve conter no minimo 8 caracteres, sendo 1 número, 1 carater especial, 1 caracter minúsculo e maiusculo;
- [ ] A consulta de cep dever ser realizado através de um serviço externo;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [x] Os dados da aplicação devem ser persistidos em um banco MySQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;