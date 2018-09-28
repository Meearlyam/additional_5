module.exports = function check(str, bracketsConfig) {
  let open_brackets = [];
  let close_brackets = [];
  let br_array = str.split('');

  for(let i = 0, len = bracketsConfig.length; i < len; i++) {
    open_brackets.push(bracketsConfig[i][0]);
    close_brackets.push(bracketsConfig[i][1]);
  }
  
  let first = br_array.shift();
  if((close_brackets.indexOf(first) != -1) && (open_brackets.indexOf(first) == -1)) {
    return false;
  } 

  let control_stack = [];
  control_stack.push(first);
  let current, last_added;
  
  while(br_array.length != 0) {
    current = br_array.shift();
    last_added = control_stack.pop();
    if (open_brackets.indexOf(current) != -1) {                                      //is open bracket
      if(close_brackets.indexOf(current) == -1) {                                    //is not close bracket
        control_stack.push(last_added);                                  
        control_stack.push(current);
      }
      else {                                                                         //is close bracket
        if (open_brackets.indexOf(last_added) != close_brackets.indexOf(current)) {  //are they twins with last added?
          control_stack.push(last_added);
          control_stack.push(current);
        }
      }
    }
    else {                                                                           //is close bracket
      if(open_brackets.indexOf(last_added) != close_brackets.indexOf(current)) {
        return false;
      }
    }
  }
  return true;
}
