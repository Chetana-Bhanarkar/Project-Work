import { Component, OnInit } from '@angular/core';
import { ToDo } from './model/To-do.model';
import { TodoService } from './service/todo.service';
import { finalize, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private todoService: TodoService) { }

  title = 'To-do-App';
  taskArr: ToDo[] = [];
  addTask: string = ' ';
  isLoggedIn: boolean = false;
  loginBtnSpinner: boolean = false;

  _todoModel: ToDo = {};
  requestPayload: ToDo = {};


  ngOnInit(): void {
    this.getList() ;
  }

  createTask(todo : ToDo) {
     this.todoService.createTodo(todo).pipe(finalize(()=>(this.loginBtnSpinner = false))).subscribe(data  => {
      this.ngOnInit()

    }, err => {
      alert(err)
    })
  }

add(){
  this.requestPayload = this.todo_list_model;
  // this.requestPayload.status = "todo"
  this.createTask(this.requestPayload);

}


  getList() {
    this.todoService.getList().subscribe((response:any) => {
      console.log(response);
      this.taskArr = response ;

    }, err => {
      alert('Unable to get list...');
    })
  }


  public get todo_list_model(): ToDo {
    return this._todoModel
  }

  public set todo_list_model(value: ToDo) {
    this._todoModel = value;
  }

}
