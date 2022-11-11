let user1 = {
    id: 1,
    uname: "Amin",
    walk: function () {
        setTimeout(function () {
            console.log(this);
            console.log(this.uname + "   Is Walked...")
        }, 1000);
    }
}


let user2 = {
    id: 2,
    uname: "Reza",
}

user1.walk()


