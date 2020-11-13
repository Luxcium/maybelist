import { Functor } from '.';

/*
export interface IFunctor<A = unknown>
  extends IFMap<A>, //--!!&
    IFork<A>,  //--!!&
    FunctorType<A> {  //--!!&
  map<B>(fn: (val: A) => B): FunctorType<B>;  //--!!
  toString(): string;  //--!!
  toValue(): A;  //--!!
  !readonly fork: A; //--!!
}*/
const functor = Functor.of('Spec')
console.log(functor)

const maped = functor.map(A => A.length)
console.log(maped)


const tostring = maped.toString()
console.log(typeof tostring === 'string')

const toval = maped.toValue()
console.log(typeof toval === 'number')



console.log([functor, maped, tostring, toval])
// export const functor = Functor.of('Spec');
