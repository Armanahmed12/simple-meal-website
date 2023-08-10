const setDataToLocalStorage = (name)=> {
  
     let mealsName = {};
     const isExisted = JSON.parse(localStorage.getItem('meals-name'));
     if(isExisted){

          let ourDesiredProper = isExisted[name];
          if(ourDesiredProper){
               
               isExisted[name] = isExisted[name] + 1;

          }
          else{

              isExisted[name] = 1;
          };
         mealsName = {...isExisted};
     }
     else{
  
          mealsName[name] = 1;
          
     }
     
     localStorage.setItem('meals-name',JSON.stringify(mealsName));

};

export {setDataToLocalStorage};