import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor() { }
    register(user: Object) {
        fetch(`${environment.api_url}/saveUser`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user)
        })
            .then(async (response) => await response.json())
            .then((data) => {
                if (data) {
                    alert(data.status)
                }
            })
    }
}
