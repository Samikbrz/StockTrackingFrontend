import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  constructor(private userService:UserService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data;
      this.toastrService.success(response.message,"Başarılı");
    })
  }

  deleteUser(user:User){
    if(window.confirm("Emin misiniz?")){
      this.userService.delete(user).subscribe(response=>{
        this.toastrService.success(response.message,"Deleted")
        window.location.reload();
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });
    }
  }

}
