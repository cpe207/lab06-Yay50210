// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */

  try{

    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const results = await axios.get(`https://jsonplaceholder.typicode.com//users/${result.data.userId}`);

      return {

          owner: results.data.name,
          title: result.data.title,
          completed: result.data.completed
      }

  }catch(err){

    setTimeout(()=>{
      console.log( "INVALID TODO ID");
    },2000)
    

  }


};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
