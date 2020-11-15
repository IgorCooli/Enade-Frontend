import { extendObservable } from 'mobx';


class UserStore{
    constructor(){
        extendObservable(this,{
            loading: true,
            isLoggedIn:false,
            id: 0,
            nome: '',
            email: '',
            senha: '',
            tipo:''
        })
    }
}

export default new UserStore();