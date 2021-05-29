# PYP / Day - 18

Table of Contents :

1. [Prerequisites](#prerequisites)
1. [Lessons topics](#lessons-topics)  
1. [Assigment](#assigment)
1. [Resources](#resources)

---
## Prerequisites

Measures to take before starting

* Install [VS Code](https://code.visualstudio.com/download) on your local machine
* Setup [Github Desktop](https://desktop.github.com/) on your local machine

---

## Lessons topics:

* Redux
    * Basic knowledge of middleware.
    * `combineReducers`
    * `connect` HOC.

---

## Assigment:

Create coffee shop order management system

1. I should be able to create a new order. Order should contain following fields
 a. Table number
 b. Coffee type (create a predefined list of coffees)
 c. Count
 d. Special note
 e. Status (initial status should be `CREATED`)
 
2. If order is not `DONE` then I should be able to modify order status, count and special note
3. Should be able to sort by status
4. initial page should show list of all orders

Order status:
````typescript
CREATED
IN_PROGRESS
DONE
````
 

---

## Resources:


* To read:
    - [Middleware](https://redux.js.org/understanding/history-and-design/middleware)
    - [Redux Fundamentals, Part 6: Async Logic and Data Fetching](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
    - [Redux Fundamentals, Part 3: State, Actions, and Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers)
    - [Connect](https://react-redux.js.org/api/connect#connect-parameters)

