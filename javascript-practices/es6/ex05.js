/**
 * Arrow Function
 * 
 */

const power01 = function(x){
    y = x * x;
    return y;
}

const f1 = () => {};
const f2 = function(){};

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power01(n)}\t`);
});

// ex1
console.log("\n----------------------------------\n");
const power02 = (x) => x * x;

numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power02(n)}\t`);
})

// ex2
console.log("\n----------------------------------\n");
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${((x) => x * x)(n)} \t`);
})

// ex3
console.log("\n----------------------------------\n");
numbers.forEach(n => process.stdout.write(`${n}: ${((x) => x * x)(n)} \t`));

// ex4: 어휘적 this 바인딩 가능
console.log("\n----------------------------------\n");
const o = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        // this.friends.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this))

        this.friends.forEach((f)=> console.log(`${this.name}의 친구 ${f}`));
    }
};

o.printFriends();