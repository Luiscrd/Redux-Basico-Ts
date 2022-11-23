import { Reducer } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';

class Store<I> {

    constructor(

        private reducer: Reducer<I>,

        private state: I

    ) {}

    getState() {

        return this.state;

    }

}

const store = new Store(contadorReducer, 10);

console.log(store.getState());
