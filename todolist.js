// let input = prompt('what would you like to do?');
// const todos = ['ayam goreng', 'ikan goreng'];
// while (input !== 'quit' && input !== 'q'){
//     if(input === 'list'){
//         console.log('***********')
//         for(let i=0; i < todos.length; i++){
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('***********')
//     } else if (input === 'new'){
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`)
//     } else if (input === 'delete') {
//         const index = prompt('Oh, enter an index to delete');
//         const deleted = todos.splice(index,1);
//         console.log(`Ok, deleted ${deleted[0]}`);
//     } else {
//         console.log("ohh ohhhhh")
//     }
//     input = prompt('what would you like to do?')
// }
// console.log('Ok...Goodbye')

// add 'new' todo
// 'list' all todo
// 'delete' todo
// 'quit' todo

// Project commitment = 2;
input = prompt('What do you want do sir');
const todos = ['study', 'Sleep'];
while (input !== 'quit' && input !=='q'){
    input = prompt('What do you want do sir');
    if (input === 'list'){
        for(let i=0; i <= todos.length; i++ ){
            console.log(`${i}: ${todos[i]}`);
            break;
        }
    } else if (input === 'new'){
        const newTodo = prompt('What do you want to add sir ?');
        todos.push(newTodo);
        console.log(`Successfully added ${newTodo} to the list`)
    } else if (input === 'delete'){
        const index = prompt('What do you want delete sir ? [Enter an index number]');
        const deleted = todos.splice(deleted,1);
        console.log(`You have successfully deleted ${index}`)
    } else {
        console.log('Ooooppppsss')
    }
}
console.log('OK....GoodBye')