//演習1
console.log("山本優");

//演習2
var lastName = "山本";
var firstName = "優";
console.log(lastName);
console.log(firstName);

//演習3
console.log("・演習3");
let age = 25;
console.log("※age変数に代入した値は" + age + "です");

if(age < 20){
    console.log("未成年です");

//演習4
console.log("・演習4");

}else{
    console.log("成人です");
}

//演習4-2
console.log("・演習4-2");
console.log("※age変数に代入した値は" + age + "です");

if(age >= 0 && age <= 4){
    console.log("幼年期");
}else if(age >= 5 && age <= 14){
    console.log("少年期");
}else if(age >= 15 && age <= 24){
    console.log("青年期");
}else if(age >= 25 && age <= 44){
    console.log("壮年期");
}else if(age >= 45 && age <= 64){
    console.log("中年期");
}else if(age >= 65){
    console.log("高年期");
}else{
    console.log("変数の値が不正です");
}

//演習5
console.log("・演習5")
let answer = 0;
for(let i = 0; i <= 10; i++){
    answer += i;
    }
    console.log(answer);


//演習5-2(!未完成)
console.log("・演習5-2")


for(let j = 1; j <= 9; j++){
    for(let k = 1; k <= 9; k++){
        let multi = j*k; 
        console.log(multi);
    }
}


 //演習6
 console.log("・演習6")
 let numsSum = 0;
 let nums = [1,2,3,4,5,6,7,8,9,10];
 for(let l = 0; l < nums.length; l++){
     numsSum +=  nums[l];
 }
 console.log(numsSum);

 //演習6 for-of文

 console.log("・演習6 for-of文");
 let nums2 = [1,2,3,4,5,6,7,8,9,10];
 let forOfSum = 0;

for(let num of nums2){
    forOfSum += num;
}
console.log(forOfSum);

//演習7
console.log("・演習7");
let capitals = {
    "日本":"東京",
    "スリランカ": "スリジャワワルだナプラコッテ",
    "タイ": "クルンテープ"

};
console.log(capitals["日本"]);
console.log(capitals["タイ"]);
capitals["タイ"] = "バンコク";

//演習8

console.log("・演習8");

function printName(name){
    return name;
};

console.log(printName("山本優"));











