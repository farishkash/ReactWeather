// function getTempCallBack(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philly', function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Philly').then(function (temp){
//   console.log('promise success', temp);
//
// }, function(err){
//   console.log('promise error', err);
//
// });


// Challenge Area

function addPromise(a,b){
  return new Promise(function(resolve, reject){
  if(typeof a ==='number' && typeof b ==='number' ){
  resolve(a + b);
}
  else{
    reject('Both must be a number');
  }
});
}

addPromise(3,5).then(function(numbers){
  console.log('promise success', numbers);

  }, function(err){
     console.log('promise error', err);

});

addPromise(10,'Hello').then(function(numbers){
  console.log('promise success', numbers);

  }, function(err){
     console.log('promise error', err);

});

addPromise('Jello','Hello').then(function(numbers){
  console.log('promise success', numbers);

  }, function(err){
     console.log('promise error', err);

});
