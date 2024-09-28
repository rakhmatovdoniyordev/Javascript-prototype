{
    //41-masala
    const books = [
{
title: "Halqa",
author: "Akrom Malik",
read: false
},
{
title: "Dunyoning ishlari",
author: "O’tkir Hoshimov",
read: true
},
{
title: "Iymon",
author: "Shayx Muhammad Sodiq Muhammad Yusuf",
read: true
},
]
    books.forEach(read => {
        if(read.read == true){
            console.log(`${read.author} ning ${read.title} kitobi o'qilgan`);
        }else{
            console.log(`${read.author} ning ${read.title} kitobi o'qilmagan`);
        }
    })
}

{
    //42-masala
    let arr = ["text", "world", "laptop", "Uzbekistan"]
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i].length
    }
    console.log(obj);
}

{
    //43-masala
    const n = 4
    let obj = {a: 2, b: 3, c: 4}
    let result = {}
    for(let index in obj){
        result[index] = obj[index] * n
    }
    console.log(result);
}

{
    //44-masala
    function getLevel(n){
        let arr = []
        for(let i = 1; i <= n; i++){
            arr.push(Math.pow(2, i))
        }
        return arr
    }
    console.log(getLevel(4));
}

{
    //45-masala
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    let obj = {}
    for(let i = 0; i < animals.length; i++){
        if(obj[animals[i]]){
            obj[animals[i]] += 1
        }else{
            obj[animals[i]] = 1
        }
    }
    console.log(obj);
}

{
    //46-masala
    let arr = [1, 2, 3, 4, 5]
    let result = arr.map(index=> Math.pow(index, 2))
    console.log(result);
}

{
    //47-masala
    let arr = [ 1, -4, 12, 0, -3, 29, -150]
    let resault = arr.filter(item => item > 0).reduce((a, b) => a + b, 0)
    console.log(resault);
}

{
    //48-masala
    let str = 'George Raymond Richard Martin'
    let resault = str.split(" ").map(item => item[0]).join("")
    console.log(resault);
}

{
    //49-masala
    let arr =[
        {name: 'John', age: 13},
        {name: 'Mark', age: 56},
        {name: 'Rachel', age: 45},
        {name: 'Nate', age: 67},
        {name: 'Jeniffer', age: 65}
        ];
    let sort = arr.sort((a, b) => a.age - b.age)
    let first = sort.shift()
    let second = sort.pop()
    let result = second.age - first.age
    console.log(result);
}

{
    //50-masala
    let singleNumber = function(nums) {
        let result = []
        for(let i = 0; i < nums.length; i++){
            if(typeof nums[i] == "number"){
                if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
                    result.push(nums[i])
                }
            }
        }
        console.log(result);
    };
    singleNumber( [4,1,2,1,2,9, true] )
}

{
    //52-masala
    let products = [
        {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
        {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
        {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
        {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
        ];
    let result = products.filter(index => index.id != 4)
    console.log(result);

}

{
    //53-masala
    let str = `Men 23 yoshdaman`
    let arr = str.split(" ")
    let result = `String faqat harflardan iborat: ${str}`
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            result = `Stringda harflardan tashqari sonlar ham bor`
        }
    }
    console.log(result);
}

{
    //55-masala
    let str = "Hello world"
    let result = str.split(" ").map(index => index.length)
    console.log(result);
}

{
    //56-masala
    let str = "salom dunyo"
    let result = str.split("").some(item => item == ' ')
    if(result){
        console.log(`Kiritilgan stringda bo'sh joy(space) bor`);
    }else{
        console.log(`Kiritilgan stringda bo'sh joy(space) yo'q`);
    }
}

{
    //57-masala
    let obj = {a: 2, b: 5, c: 7}
    let arr = Object.entries(obj).map(item => item.join(""))
    console.log(arr);
}

{
    //58-masala
    const pupils = [
        {name: "Elbek", protcent: 95,},
        {name: "Zafar", protcent: 78,},
        {name: "Aziz", protcent: 83,},
        {name: "Jasur", protcent: 88,},
        {name: "Bobur", protcent: 66,},
        {name: "Kamron", protcent: 75,},
        ];
    let count = 0
    let countTwo = 0
    let result = pupils.reduce((acc, item) => {
        if(item.protcent >= 80){
            acc.passed++
        }else{
            acc.failed++
        }
        return acc
    }, {passed: 0, failed: 0})
    console.log(`${result.passed} Kishi imtihondan o'tdi, ${result.failed} kishi imtihondan o'ta olmadi`);
}

{
    //59-masala
    let findMedianSortedArrays = function(nums1, nums2) {
        let arr = [...nums1, ...nums2].sort((a, b)=> a-b)
        let index = arr.length / 2
        if(arr.length % 2 === 0){
            let result = (arr[index] + arr[index -1]) / 2
            return result
        }else{
            let result = arr[Math.floor(index)]
            return result
        }
    }
    console.log(findMedianSortedArrays([1, 2], [3, 4]));
}

{
    //63-masala
    let str = "Men 20 yoshdaman"
    let result = str.split(" ").pop().length
    console.log(result);
}


{
    //64-masala va 75-masala
    let p = [1, 2, 1]
    let q = [1, 1, 2]
    let result = null
    for(let i = 0; i < p.length; i++){
        if(p[i] !== q[i] || p.length != q.length){
            result = false
            break
        }else{
            result = true
        }
    }
    console.log(result);
}

{
    //69-masala
    Array.prototype.sumArr = function(){
        let sum = 0
        for(let i = 0; i < this.length; i++){
            if(typeof this[i] === "number"){
                sum += this[i]
            }
        }
        return sum
    }

    let arr = ["hello", 14, "You", 23, undefined]
    console.log(arr.sumArr());
}

{
    //70-masala
    String.prototype.vowelLetters = function(){
        let arr = this.split("")
        let vowels = "aoueiAOUEI"
        let count = 0
        for(let i = 0; i < arr.length; i++){
            if(vowels.includes(arr[i])){
                count++
            }
        }
        return count
    }

    let str = "Hello My name is ..."
    console.log(str.vowelLetters());
}

{
    //71-masala
    String.prototype.getLength = function() {
        if (this.length === 0 && typeof this != "string") {
            return `String bo'sh!`;
        }
        return `String uzunligi: ${this.length}`;
    };

    let str = "Hello World"
    console.log(str.getLength());
}

{
    //72-masala
    function foo(board){
        let a = board.flat(1)
        let word = "ABCCED"
        for(let i = 0; i < a.length; i++){
            if(word.includes(a[i])){
                return true
            }
            else{
                return false
            }
        }
    }
    console.log(foo([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]));
}

{
    //73-masala
    let arr = [6, 6, 6, 6]
    let val = 6
    let result = arr.filter(item => item !== val)
    console.log(result);
}