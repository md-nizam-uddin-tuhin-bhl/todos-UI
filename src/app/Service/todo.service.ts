import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from '../Models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
baseApiUrl = "http://localhost:5259/api"
  constructor(private http:HttpClient) { }
  getAllTodos():Observable<Todos[]>{
   return this.http.get<Todos[]>(this.baseApiUrl+ '/Todos')
  }
  addNewTodo(newtodo:Todos):Observable<Todos>{
    newtodo.id = "00000000-0000-0000-0000-000000000000"
    return this.http.post<Todos>(this.baseApiUrl+ '/Todos',newtodo)
  }
  UpdateTodo(id:string,todo:Todos):Observable<Todos>{
    return this.http.put<Todos>(this.baseApiUrl+ '/Todos/'+id,todo)
  }
}
