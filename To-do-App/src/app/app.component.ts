import { Component, OnInit } from '@angular/core';
import { ToDo } from './model/To-do.model';
import { TodoService } from './service/todo.service';
import { finalize, subscribeOn } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    private todoService: TodoService,
    private toast : ToastrService){}

  title = 'To-do-App';
  taskArr: ToDo[] = [];
  addTask: string = ' ';
  editTaskValue : string|any = '';
  isLoggedIn: boolean = false;
  loginBtnSpinner: boolean = false;

  _todoModel: ToDo = {};
  requestPayload: ToDo = {};


  ngOnInit(): void {
    this.addTask = ' ';
    this.editTaskValue = ' ';
    this.getList() ;
  }

  createTask(todo : ToDo) {
     this.todoService.createTodo(todo).pipe(finalize(()=>(this.loginBtnSpinner = false))).subscribe(data  => {
      this.ngOnInit()

    }, err => {
      alert('error!')
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
      // alert('Task inserted successfully')

    }, err => {
      alert('Unable to get list')
    })
  }

  editTask(){
    this._todoModel.work = this.editTaskValue;
    // this._todoModel.date = this.editTaskValue;
    // this._todoModel.status = this.editTaskValue;
    this.todoService.updateTask( this._todoModel).subscribe(res => {
      this.ngOnInit();
    },err=>{
      alert("Failed to edit")
    })
  }

  call(todo : ToDo){
    this._todoModel = todo;
    this.editTaskValue = todo.work ;
    // this.editTaskValue = todo.date ;
    // this.editTaskValue = todo.status ;
    console.log('call');
  }

  deleteTask(todo : ToDo){
    this.todoService.deleteTask(todo).subscribe(res => {
      this.ngOnInit();
      alert('delete data successfully')
    },err=>{
      alert("Unable to delete")

    })
  }

  public get todo_list_model(): ToDo {
    return this._todoModel
  }

  public set todo_list_model(value: ToDo) {
    this._todoModel = value;
  }

}
