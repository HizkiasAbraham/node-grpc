#### Node grpc calculator app
This is a mini proof of concept app I developed while learning integrating grpc with nodejs
- It has a service called `calculator` that computes inputs
- It exposes two methods `add` and `multiply` that perform adding and multiplication of any number of inputs passed to them 😃

##### How to reproduce 😉
```bash
    git clone https://github.com/HizkiasAbraham/node-grpc-calculator.git
    cd node-grpc-calculator
    npm install
```
##### Demo

- Start server
![Start server](assets/start_server.png)

- Invalid command
![Invalid command](assets/invalid_command.png)

- Addition command
![Addition command](assets/addition_command.png)

- multiplication input
![Multiplication command](assets/multiplication_command.png)