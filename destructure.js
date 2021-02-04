const person={name:"jack", age:17, job:"facebooker", gfName:"ema watson",address:"kochu khet", phone:"01776655223",friends:["tom hacks","jack son","tom chuse"]};
// const gfName=person.gfName;
// const phone=person.phone;
const {phone,gfName,job}=person;
const complexObject={
    name:"abc",
    info:{
        address:"kola bagan",
        leader: "tiger"
    }
}
const {leader}=complexObject.info;
console.log(leader);


// console.log(gfName,phone,job);
// console.log(gfName,phone);
// console.log(gfName,phone);
// console.log(gfName,phone);

const friends=["amir khan", "slman khan", "sakib khan", "jobbar khan"];
const [ chotoFriend, nextFriend,...restFriends ]=friends;
console.log(chotoFriend, restFriends);