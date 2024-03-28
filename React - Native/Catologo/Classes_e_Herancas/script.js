
//<!------------------<<< CLASSES - 2022>>>>--------------------------!>
class List{
    constructor(){
        this.data = [];

    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ListaTarefas extends List{
   
};

const minhasTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function(){
    minhasTarefas.add("Minha Tarefa");
}