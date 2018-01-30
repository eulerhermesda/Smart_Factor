# Smart TCI

Smart TCI is the second experimentation on the ethereum blockchain lead by EHDA. This project have a use case that could reinvent trade credit insurance on the blockchain. See more [here]().

### Prerequisites

Before set up the project on your computer, you have to install those software:

* **NodeJS**: [https://nodejs.org/en/](https://nodejs.org/en/)

* **Geth**: [https://github.com/ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)

* **Xampp**: [https://www.apachefriends.org/](https://www.apachefriends.org/fr/download.html)

* **Truffle**: 
```
npm install -G truffle
```

### Installing

Once you have all the dependencies installed and set up, you can just pursue by cloning this project git clone https://github.com/eulerhermesda/SmartTCI then typing

```
sudo lampp start
```

Then type compile and migrate our contracts to your test environement

```
cd SmartTCI
truffle compile
truffle migrate
```

To display the interface, just open your browser and go to your [localhost](http://localhost/SmartTCI/TCI_truffle/reactjs_app/).


### Technical description

The project was designed as follow:

* **Central Contract** that manage all the interactions between contracts and store invoices created through the interface.

* **Invoice Contract** which includes all the standards of an real invoice. It follows and register the events happening to the invoice and is able to hold several contracts like a TCI.

* **TCI contract** which stored the insurance informations and directly linked to Euler Hermes services.

We tried to propose an eficient solution of the invoice management and model the Euler Hermes business process in order to see how would look like a real Trade Financing process.

### About Metamask

This branch isn't using Metamask due to the several bugs that occured (pricing, pendding transactions...). Therefore we build a new system that allow us to send and receive rpc transactions and also manage the changinbg accounts.
You will find it in the repertory named as **rpc_Tools**.

### More on Smart TCI 

* **Article:** [https://www.ehda.co/insights/](https://www.ehda.co/insights/)

* **Demo video:** [https://youtu.be/SMtTDci6Efk](https://youtu.be/SMtTDci6Efk)
