import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	users: Users;

	private apiURL = 'http://jsonplaceholder.typicode.com/users';

	httpOptions = {
  		headers: new HttpHeaders({
	    "Content-type": "application/json; charset=UTF-8"
  		})
	};

	constructor(private http: HttpClient) {
	}

	getAllUsers (): Observable<Users[]> {
	  	return this.http
	  	.get<Users[]>(this.apiURL).pipe(catchError(this.handleError));
	}

	addUser (user: Users): Observable<Users> {
	
		let body = JSON.stringify(user);
		console.log('request',body);
		let res = this.http.post<Users>(this.apiURL, body, this.httpOptions)
				.pipe(catchError(this.handleError));
		console.log('Details submitted successfully', res)
		return res;
		
	}

	private handleError (errorResponse: HttpErrorResponse){
		if (errorResponse.error instanceof ErrorEvent){
			console.log("Client side error: ", errorResponse.error.message)
		}
		else{
			console.log("Server side error:", errorResponse)
		}

		return throwError("Problem occured");
	}

}



  
