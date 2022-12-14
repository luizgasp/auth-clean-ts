# Auth API

---

## Getting Started ๐

Project Clean Structure:

```
--project
|   โโโ src
โ   โ   โโโ modules
โ   โ   โ   โโโ name
โ   โ   โ   โ   โโโ application
|   |   |   |   |   โโโ mappers
|   |   |   |   |   |   โโโ name-mapper.ts
|   |   |   |   |   โโโ repositories
|   |   |   |   |   |   โโโ name-repository-impl.ts
|   |   |   |   |   |   |
|   |   |   |   โโโ domain
|   |   |   |   |   โโโ dtos
|   |   |   |   |   |   โโโ name-dto.dart
|   |   |   |   |   โโโ entities
|   |   |   |   |   |   โโโ name-entity.ts
|   |   |   |   |   โโโ repositories
|   |   |   |   |   |   โโโ i-name-repository.ts
|   |   |   |   |   โโโ usecases
|   |   |   |   |   |   โโโ name_repository_impl.dart
|   |   |   |   |   |   |
|   |   |   |   โโโ presenter
|   |   |   |   |   โโโ controllers
|   |   |   |   |   |   โโโ name-controller.ts
|   |   |   โโโ โโโ โโโ
โ   โ   โโโ 
โ   โโโ  
โโโ ...
```

---

How to run this project?

To run this project, use those commands below:

```sh
# Install dependencies
$ yarn

# Run in developing mode
$ yarn dev
```

---

## Running Tests ๐งช

To run all unit and integration tests use the command below:

```sh
# Simple test result overview
$ yarn test

# Run tests and get coverage
$ yarn test:cov

# Run E2E tests
$ yarn test:e2e
```