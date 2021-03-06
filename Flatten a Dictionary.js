// input:  dict = {
//             Key1 : 1,
//             Key2 : {
//                 a : 2,
//                 b : 3,
//                 c : {
//                     d : 3,
//                     e : 1
//                 }
//             }
//         }
//
// output: {
//             Key1: 1,
//             Key2.a: 2,
//             Key2.b : 3,
//             Key2.c.d : 3,
//             Key2.c.e : 1
//         }
//
//         Flatten a Dictionary
//
//         A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it's known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested).
//
//         Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .
//
//         If you're using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.


function flat(hash) {
  var result = {};
  helper(hash, [], result);
  return result;
}

function helper(hash,path,result) {
  for (var i in hash) { // i is key
     //console.log(i);
     if (typeof hash[i] === 'number') { //value is number
        path.push(i);
        // console.log(i, path);
        result[path.join(".")] = hash[i];
        path.pop();
     }
     else { // value not number
        path.push(i);
        helper(hash[i],path,result);
     }
  }
}


var dict = {
            Key1 : 1,
            Key2 : {
                a : 2,
                b : 3,
                c : {
                    d : 3,
                    e : 1
                }
            }
        };

console.log(dict);
console.log(flat(dict));
