import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todos } from 'src/app/Models/todo.model';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todos[] =[];
  newtodo:Todos ={
    id:'',
    description:'',
    createDate: new Date,
    isCompleted: false,
    completedDate:new Date
  }
  constructor(private service:TodoService) { }

  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(){
    this.service.getAllTodos().subscribe({
      next:(todo)=>{
        this.todos = todo
      },
      error:(res)=>{
        console.log(res);
        
      }
    })
  }
  addTodo(){
    this.service.addNewTodo(this.newtodo).subscribe(
      {
        next:(todo)=>{
          this.getTodo();
        }
      }
    )
  }
  onCompletedChange(id:string,todo:Todos){
    debugger
    todo.isCompleted = !todo.isCompleted;
    this.service.UpdateTodo(id,todo).subscribe({
      next:(res)=>{
        this.getTodo();
      }
    })
  }
}
