// import { Maybelist } from '../../src';

describe('Maybelist Class', () => {
  it('should implement specs & tests for our Maybelist Class', () => {
    expect(true);
  });
});

export default null;

// describe('Name of the group', () => {
//   // #region =======-| Iterator |-==============================================≈
//   // #region =======-| IterationMethods |-======================================≈
//   // #region =======-| AccessorsMethods |-======================================≈
//   // #region =======-| unMutatingMethods |-=====================================≈
//   // #region =======-| QueuesAndStacks |-=======================================≈
//   // #region =======-| HeadsAndTails |-=========================================≈

//   // Les méthodes
//   //+ Les mutateurs ― The Mutators
//   // Ces méthodes modifient le tableau :
//   //
//   // Array.prototype.copyWithin()
//   /* Cette méthode copie une série d'éléments de tableau dans le tableau. */
//   // Array.prototype.fill()
//   /* Cette méthode remplie tous les éléments d'un tableau avec une même valeur, éventuellement entre un indice de début et un indice de fin. */
//   // Array.prototype.pop()
//   /* Cette méthode supprime le dernier élément d'un tableau et retourne cet élément. */
//   // Array.prototype.push()
//   /* Cette méthode ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau. */
//   // Array.prototype.reverse()
//   /* Cette méthode renverse l'ordre des éléments d'un tableau - le premier élément devient le dernier, et le dernier devient le premier. Le tableau est modifié par cette méthode. */
//   // Array.prototype.shift()
//   /* Cette méthode supprime le premier élément d'un tableau et retourne cet élément. */
//   // Array.prototype.sort()
//   /* Cette méthode trie en place les éléments d'un tableau et retourne le tableau. */
//   // Array.prototype.splice()
//   /* Cette méthode permet d'ajouter ou de retirer des éléments d'un tableau. */
//   // Array.prototype.unshift()
//   /* Cette méthode permet d'ajouter un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau. */
//   //+ Les accesseurs ― The Accessors
//   // Ces méthodes ne modifient pas l'état du tableau et en retournent une représentation.

//   // Array.prototype.concat()
//   /* Cette méthode renvoie un nouveau tableau constitué de ce tableau concaténé avec un ou plusieurs autre(s) tableau(x) et/ou valeur(s). */
//   // Array.prototype.includes()
//   /* Cette méthode détermine si le tableau contient ou non un certain élément. Elle renvoie true ou false selon le cas de figure. */
//   // Array.prototype.indexOf()
//   /* Cette méthode retourne le premier (plus petit) index d'un élément égal à la valeur passée en paramètre à l'intérieur du tableau, ou -1 si aucun n'a été trouvé. */
//   // Array.prototype.join()
//   /* Cette méthode concatène tous les éléments d'un tableau en une chaîne de caractères. */
//   // Array.prototype.lastIndexOf()
//   /* Cette méthode retourne le dernier (plus grand) index d'un élément égal à la valeur passée en paramètre à l'intérieur du tableau, ou -1 si aucun n'a été trouvé. */
//   // Array.prototype.slice()
//   /* Cette méthode extrait une portion d'un tableau pour retourner un nouveau tableau constitué de ces éléments. */
//   // Array.prototype.toSource()
//   /* Cette méthode renvoie la représentation littérale du tableau spécifié ; vous pouvez utiliser cette valeur pour créer un nouveau tableau. Elle redéfinit la méthode Object.prototype.toSource(). */
//   // Array.prototype.toString()
//   /* Cette méthode renvoie une chaîne de caractères représentant le tableau et ses éléments. Elle redéfinit la méthode Object.prototype.toString(). */
//   // Array.prototype.toLocaleString()
//   /* Cette méthode retourne une chaîne de caractères représentant le tableau et ses éléments en tenant compte de la locale. Elle redéfinit la méthode Object.prototype.toLocaleString(). */

//   //+ Les méthodes d'itération ― The iteration methods
//   // Plusieurs méthodes utilisent des fonctions comme argument. Ces fonctions sont utilisées afin de traiter, d'une façon ou d'une autre, chaque élément du tableau. Lorsque ces méthodes sont invoquées, on évalue la longueur du tableau et on traite chacun des éléments dont l'indice est inférieur à la longueur (les éléments ajoutés en cours de route ne seront pas traités). Les autres modifications apportées au tableau (affecter une valeur ou supprimer un élément) peuvent avoir un impact sur les traitements des éléments suivants. Bien que ce comportement soit bien défini pour les différentes méthodes, afin de ne pas complexifier le code outre-mesure, lorsqu'on modifiera un tableau, on en créera une copie avant d'invoquer une telle méthode.
//   //+ Les méthodes d'itération ― The iteration methods
//   // Array.prototype.entries()
//   /* Cette méthode renvoie un nouvel objet Array Iterator qui contient les paires clef/valeur pour chaque index du tableau. */
//   // Array.prototype.every()
//   /* Cette méthode renvoie true si chaque élément du tableau satisfait la fonction de test passée en paramètre. */
//   // Array.prototype.filter()
//   /* Cette méthode crée un nouveau tableau contenant tous les éléments du tableau pour lesquels la fonction de filtrage passée en argument retourne true. */
//   // Array.prototype.find()
//   /* Cette méthode renvoie la valeur d'un élément trouvé dans le tableau et qui satisfait la fonction de test passée en paramètre, undefined sinon. */
//   // Array.prototype.findIndex()
//   /* Cette méthode renvoie l'index d'un élément trouvé dans le tableau qui satisfait la fonction de test passée en paramètre ou -1 si aucun ne la satisfait. */
//   // Array.prototype.forEach()
//   /* Cette méthode appelle une fonction sur chacun des éléments du tableau. */
//   // Array.prototype.keys()
//   /* Cette méthode retourne un nouvel Array Iterator qui contient les indices pour chaque élément dans le tableau. */
//   // Array.prototype.map()
//   /* Cette méthode crée un nouveau tableau contenant les images de chaque élément du tableau de départ par la fonction passée en paramètre. */
//   // Array.prototype.reduce()
//   /* Cette méthode applique une fonction sur un accumulateur et sur chaque valeur du tableau (de gauche à droite) de façon à obtenir une unique valeur à la fin. */
//   // Array.prototype.reduceRight()
//   /* Cette méthode applique une fonction sur un accumulateur et sur chaque valeur du tableau (de droite à gauche) de façon à obtenir une unique valeur à la fin. */
//   // Array.prototype.some()
//   /* Cette méthode renvoie true si au moins un élément du le tableau satisfait la fonction de test passée en paramètre. */
//   // Array.prototype.values()
//   /* Cette méthode renvoie un nouvel objet Array Iterator qui contient les valeurs de chaque indice du tableau. */
//   // Array.prototype[@@iterator]()
//   /* Cette méthode renvoie un nouvel objet Array Iterator qui contient les valeurs de chaque indice du tableau. */

//   /* Instance methods */
//   //? Array.prototype.concat()
//   /* Returns a new array that is this array joined with other array(s) and/or value(s). */
//   //? Array.prototype.copyWithin()
//   /* Copies a sequence of array elements within the array. */
//   //? Array.prototype.entries()
//   /* Returns a new Array Iterator object that contains the key/value pairs for each index in the array. */
//   //? Array.prototype.every()
//   /* Returns true if every element in this array satisfies the testing function. */
//   //? Array.prototype.fill()
//   /* Fills all the elements of an array from a start index to an end index with a static value. */
//   //? Array.prototype.filter()
//   /* Returns a new array containing all elements of the calling array for which the provided filtering function returns true. */
//   //? Array.prototype.find()
//   /* Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. */
//   //? Array.prototype.findIndex()
//   /* Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found. */
//   //? Array.prototype.forEach()
//   /* Calls a function for each element in the array. */
//   //? Array.prototype.includes()
//   /* Determines whether the array contains a value, returning true or false as appropriate. */
//   //? Array.prototype.indexOf()
//   /* Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. */
//   //? Array.prototype.join()
//   /* Joins all elements of an array into a string. */
//   //? Array.prototype.keys()
//   /* Returns a new Array Iterator that contains the keys for each index in the array. */
//   //? Array.prototype.lastIndexOf()
//   /* Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. */
//   //? Array.prototype.map()
//   /* Returns a new array containing the results of calling a function on every element in this array. */
//   //? Array.prototype.pop()
//   /* Removes the last element from an array and returns that element. */
//   //? Array.prototype.push()
//   /* Adds one or more elements to the end of an array, and returns the new length of the array. */
//   //? Array.prototype.reduce()
//   /* Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. */
//   //? Array.prototype.reduceRight()
//   /* Apply a function against an accumulator> and each value of the array (from right-to-left) as to reduce it to a single value. */
//   //? Array.prototype.reverse()
//   /* Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.) */
//   //? Array.prototype.shift()
//   /* Removes the first element from an array and returns that element. */
//   //? Array.prototype.slice()
//   /* Extracts a section of the calling array and returns a new array. */
//   //? Array.prototype.some()
//   /* Returns true if at least one element in this array satisfies the provided testing function. */
//   //? Array.prototype.sort()
//   /* Sorts the elements of an array in place and returns the array. */
//   //? Array.prototype.splice()
//   /* Adds and/or removes elements from an array. */
//   //? Array.prototype.toLocaleString()
//   /* Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method. */
//   //? Array.prototype.toString()
//   /* Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method. */
//   //? Array.prototype.unshift()
//   /* Adds one or more elements to the front of an array, and returns the new length of the array. */
//   //? Array.prototype.values()
//   /* Returns a new Array Iterator object that contains the values for each index in the array. */
//   // Array.prototype[@@iterator]()
//   // Returns a new Array Iterator object that contains the values for each index in the array.

//   //? Array.prototype.length
//   /* Reflects the number of elements in an array. */

//   // - get Array[@@species]
//   /*The constructor function is used to create derived objects. */
//   // - Array.prototype[@@unscopables]
//   /* A symbol containing property names to exclude from a with binding scope. */
//   // - Array.from()
//   /*Creates a new Array instance from an array-like or iterable object.*/
//   // - Array.isArray()
//   /* Returns true if the argument is an array, or false otherwise.*/
//   // - Array.of()
//   /*Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.*/

//   //&  Les méthodes d'itération ― The iteration methods
//   // Array.prototype.entries()
//   // Array.prototype.every()
//   // Array.prototype.filter()
//   // Array.prototype.find()
//   // Array.prototype.findIndex()
//   // Array.prototype.forEach()
//   // Array.prototype.keys()
//   // Array.prototype.map()
//   // Array.prototype.reduce()
//   // Array.prototype.reduceRight()
//   // Array.prototype.some()
//   // Array.prototype.values()

//   describe('Method entries', () => {
//     it.todo('entries');
//   });
//   describe('Method keys', () => {
//     it.todo('keys');
//   });
//   describe('Method values', () => {
//     it.todo('values');
//   });
//   describe('Method every', () => {
//     it.todo('every');
//   });
//   describe('Method filter', () => {
//     it.todo('filter');
//   });
//   describe('Method find', () => {
//     it.todo('find');
//   });
//   describe('Method forEach', () => {
//     it.todo('forEach');
//   });
//   describe('Method reduce', () => {
//     it.todo('reduce');
//   });
//   describe('Method reduceRight', () => {
//     it.todo('reduceRight');
//   });
//   describe('Method some', () => {
//     it.todo('some');
//   });
//   describe('Method concat', () => {
//     it.todo('concat');
//   });
//   describe('Method includes', () => {
//     it.todo('includes');
//   });
//   describe('Method indexOf', () => {
//     it.todo('indexOf');
//   });
//   describe('Method join', () => {
//     it.todo('join');
//   });
//   describe('Method lastIndexOf', () => {
//     it.todo('lastIndexOf');
//   });
//   describe('Method slice', () => {
//     it.todo('slice');
//   });
//   describe('Method toString', () => {
//     it.todo('toString');
//   });
//   describe('Method toLocaleString', () => {
//     it.todo('toLocaleString');
//   });
//   describe('Method copyWithin', () => {
//     it.todo('copyWithin');
//   });
//   describe('Method fill', () => {
//     it.todo('fill');
//   });
//   describe('Method reverse', () => {
//     it.todo('reverse');
//   });
//   describe('Method sort', () => {
//     it.todo('sort');
//   });
//   describe('Method splice', () => {
//     it.todo('splice');
//   });
//   describe('Method pop', () => {
//     it.todo('pop');
//   });
//   describe('Method push', () => {
//     it.todo('push');
//   });
//   describe('Method shift', () => {
//     it.todo('shift');
//   });
//   describe('Method unshift', () => {
//     it.todo('unshift');
//   });
//   describe('Method rpush', () => {
//     it.todo('rpush');
//   });
//   describe('Method rpop', () => {
//     it.todo('rpop');
//   });
//   describe('Method rpoped', () => {
//     it.todo('rpoped');
//   });
//   describe('Method lpush', () => {
//     it.todo('lpush');
//   });
//   describe('Method lpop', () => {
//     it.todo('lpop');
//   });
//   describe('Method lpoped', () => {
//     it.todo('lpoped');
//   });
//   describe('Method poped', () => {
//     it.todo('poped');
//   });
//   describe('Method shifted', () => {
//     it.todo('shifted');
//   });
//   describe('Method ap', () => {
//     it.todo('ap');
//   });
//   describe('Method fAp', () => {
//     it.todo('fAp');
//   });
//   describe('Method flatAp', () => {
//     it.todo('flatAp');
//   });
//   describe('Method chain', () => {
//     it.todo('chain');
//   });
//   describe('Method fChain', () => {
//     it.todo('fChain');
//   });
//   describe('Method flatChain', () => {
//     it.todo('flatChain');
//   });
//   describe('Method flatMap', () => {
//     it.todo('flatMap');
//   });
//   describe('Method fMap', () => {
//     it.todo('fMap');
//   });
//   describe('Method map', () => {
//     it.todo('map');
//   });
//   describe('Method async', () => {
//     it.todo('async');
//   });
//   describe('Method async', () => {
//     it.todo('async');
//   });
//   describe('Method thenMap', () => {
//     it.todo('thenMap');
//   });
//   describe('Method thenFMap', () => {
//     it.todo('thenFMap');
//   });

//   describe('Property fork', () => {
//     it.todo('fork');
//   });
//   describe('Property clone', () => {
//     it.todo('clone');
//   });
//   describe('Property forkSafe', () => {
//     it.todo('forkSafe');
//   });
//   describe('Property hasNull', () => {
//     it.todo('hasNull');
//   });
//   describe('Property hasUndefined', () => {
//     it.todo('hasUndefined');
//   });
//   describe('Property hasNullOrUndefined', () => {
//     it.todo('hasNullOrUndefined');
//   });
//   describe('Property flags', () => {
//     it.todo('flags');
//   });
//   describe('Property getFlags', () => {
//     it.todo('getFlags');
//   });
//   describe('Property first', () => {
//     it.todo('first');
//   });
//   describe('Property last', () => {
//     it.todo('last');
//   });
//   describe('Property getTheOnlyOne', () => {
//     it.todo('getTheOnlyOne');
//   });
//   describe('Property lhead', () => {
//     it.todo('lhead');
//   });
//   describe('Property rtail', () => {
//     it.todo('rtail');
//   });
//   describe('Property rhead', () => {
//     it.todo('rhead');
//   });
//   describe('Property ltail', () => {
//     it.todo('ltail');
//   });
//   describe('Property head', () => {
//     it.todo('head');
//   });
//   describe('Property tail', () => {
//     it.todo('tail');
//   });
//   describe('Property getHeadOrTail', () => {
//     it.todo('getHeadOrTail');
//   });
//   describe('Property forkHeadOrTail', () => {
//     it.todo('forkHeadOrTail');
//   });
//   describe('Property forkHeadOrGetTail', () => {
//     it.todo('forkHeadOrGetTail');
//   });
//   describe('Property getHeadAndTail', () => {
//     it.todo('getHeadAndTail');
//   });
//   describe('Property forkHeadAndGetTail', () => {
//     it.todo('forkHeadAndGetTail');
//   });
//   describe('Property forkHeadAndTail', () => {
//     it.todo('forkHeadAndTail');
//   });
//   describe('Property getClone', () => {
//     it.todo('getClone');
//   });
//   describe('Property promiseOf', () => {
//     it.todo('promiseOf');
//   });
// });
// export default null;
