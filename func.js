var H = [{
    id: 1,
    value: 24
}, {
    id: 2,
    value: 36
}, {
    id: 3,
    value: 100
}, {
    id: 4,
    value: 200
}];

var IDS = [];
for (var n = 0; n < H.length; n++) {
    IDS.push(H[n].id);
}
//1,26 (2,36) (3,150) (4,200) (6,300)
//(1,28) (2,36) (3,150) (4,200) (5,150) (6,300)
var newArray = [{
    id: 1,
    value: 26
}, {
    id: 2,
    value: 22
}, {
    id: 3,
    value: 150
}, {
    id: 6,
    value: 300
}];
//1,3,6
var newArray1 = [{
    id: 1,
    value: 28
}, {
    id: 2,
    value: 35
}, {
    id: 5,
    value: 150
}, {
    id: 6,
    value: 25
}];
//1,5

function SelectBetter(C) {
    for (var i = 0; i < C.length; i++) {
        var member = C[i];
        if (IDS.indexOf(member.id) < 0) {
            //join right now, no need to fight
            IDS.push(member.id);
            H.push(member);
        } else {
            for (var j = 0; j < H.length; j++) {
                var Older = H[j];
                if (member.id == Older.id) {
                    //fight
                    if (member.value > Older.value) {
                        H.splice(j, 1, member);
                        //should update record in kendo grid
                        break;
                    } else {
                        C.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
    }

    for(var k=0;k<C.length;k++){
        // should insertInto grid
        // Insert(0,C[i]);
    }
}


function removeDuplicate(C){
    var ids = [];
    var members = [];
    for(var i=0;i<C.length;i++){
        var key = ids.indexOf(C[i].id);
        if(key < 0){
            ids.push(C[i].id);
            members.push(C[i]);
        }
        else{
            if(members[key].value < C[i].value){
                //fight win, update
                members[key].value = C[i].value;
            }
        }
    }
    return members;
}
SelectBetter(newArray);
SelectBetter(newArray1);

var C = [{
    id:1,
    value:25
},{
    id:1,
    value:26
},{
    id:2,
    value:25
},{
    id:2,
    value:26
},{
    id:2,
    value:27
},{
    id:1,
    value:28
},{
    id:3,
    value:25
},{
    id:3,
    value:26
}]