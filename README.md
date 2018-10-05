### INSTALL GO
	mkdir solidityLab
	cd solidityLab
	sudo apt install -y curl
	sudo apt install -y build-essential
	sudo apt install -y screen
	curl -O https://dl.google.com/go/go1.9.1.linux-amd64.tar.gz
	sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
	export PATH=$PATH:/usr/local/go/bin 

### CHECK GO VERSION	
	go version 
	// if it's installed properly
	>go version go1.10.1 linux/amd64
	rm go1.9.linux-amd64.tar.gz 

### BUILD ETHEREUM
	git clone https://github.com/ethereum/go-ethereum.git
	cd go-ethereum
	git checkout v1.8.3
	make geth
	sudo cp build/bin/geth /usr/local/bin/geth
	make swarm
	sudo cp build/bin/swarm /usr/local/bin/swarm



### CONNECT TO PRIVATE NETWORK

	geth --datadir "./iotChain" account new
	// Copy genesis.json and staticnodes.json into bether
	cd iotChain
	geth --datadir "." init genesis.json
	geth --rpc --rpcport "8000" --rpccorsdomain "*" --datadir "." --port "30303" --nodiscover --rpcapi "db,eth,net,web3,personal" --identity "one" --networkid 666 console
	// console will be opened
	net
	// you must see peerCount as "1"

### CONNECT TO SWARM
	export BZZKEY=cc7b75f40efdeb554c20de9c8adc3339aabea0cd
	swarm --bzzaccount $BZZKEY --datadir "." --ens-api "./geth.ipc" --bzznetworkid 666

### Web3 
	sudo npm install --save web3 --unsafe-perm=true --allow-root
	
	Install web3.js library Add to the main settings.js file under the functionGlobalContext property:

	functionGlobalContext: {
	//  osModule:require('os'),
	    web3:require('web3')
	}

	go to ~/.node-red
	npm i web3


	"dependencies": {
    "web3": "0.19.0"
}

	npm install web3@0.19
	


	npm init
	npm	install	–save	body-parser
	npm	install	–save	ethereum.js
	npm	install	–save	express
	npm	install	–save	web3


### Browserify
	npm install -g browserify


### Swarm
	curl -s -L http://localhost:8500/bzz:/14ae03ce158150f6cbfe0d392ea18f3c664942c7c3fea7894cd7dc44dfcd9bda
	swarm --bzzaccount $BZZKEY --datadir "."  --keystore "./keystore" --ens-api "./geth.ipc"

	BZZKEY = Addres


	get coinbase address
	export address as BZZKEY
	export BZZKEY=cc7b75f40efdeb554c20de9c8adc3339aabea0cd
	echo -ne '\n' | swarm --bzzaccount $BZZKEY --datadir "." --ens-api "./geth.ipc" --bzznetworkid 666 &



