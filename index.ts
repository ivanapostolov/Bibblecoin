import Wallet from './Wallet';
import Chain from './Chain';

const annie = new Wallet();
const veselink = new Wallet();
const chris = new Wallet();

annie.sendMoney(50, veselink.publicKey);
veselink.sendMoney(23, chris.publicKey);
chris.sendMoney(5, veselink.publicKey);

console.log(Chain.instance)