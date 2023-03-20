# App

Find a friend.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível cadastrar um organização;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível cadastrar um pet;
- [ ] Deve ser listar todos os pets;
- [ ] Deve ser filtrar os pets;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] A senha do usuário deve ser hashed;
- [ ] A senha do usuário deve conter no minimo 8 caracteres, sendo 1 número, 1 carater especial, 1 caracter minúsculo e maiusculo;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ] Os dados da aplicação devem ser persistidos em um banco MySQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;