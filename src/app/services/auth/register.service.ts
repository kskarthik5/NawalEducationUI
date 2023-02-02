import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { nanoid } from 'nanoid';
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor() { }
    register(user: Object) {
        fetch(`${environment.api_url}/signup`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...user,nano_id:nanoid(9)})
        })
            .then(async (response) => await response.json())
            .then((data) => {
                if (data.status=='ok') {
                    alert("Registration complete. Please login using your credentials")
                    window.location.href="/login"
                }
            })
    }
}
