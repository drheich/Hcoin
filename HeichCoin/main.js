const SHA256 =require('crypto-js/sha256');
class Block{
    contructor(index,timestamp,data,previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
    }

    calculateHash(){

        return SHA256(this.index + this.previousHash +this.timestamp +JSON.stringify(this.data)).toString();

    }
}

class Blockchain{
    constructor(){
        this.chain =[this.createFirstBlock()];
    
    }
    createFirstBlock(){
        return new  Block(0,2/2/22,"this is the first block","0")
    }

    getLatestBlock(){
        return this.chain[this.chain. length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash =  this.getLatestBlock().hash;
        newBlock.Hash = newBlock.calculateHash();
        this.chain.push(newBlock);


    }

}
let heichCoin =new Blockchain();
heichCoin.addBlock(new Block(1,2/2/22,{amount: 3}));
heichCoin.addBlock(new Block(2,3/2/22,{amount: 4}));

console.log(JSON.stringify(heichCoin,null, 4));