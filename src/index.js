module.exports = function check(str, bracketsConfig) {
  let open_brackets = [];
  let close_brackets = [];
  let br_array = str.split('');

  for(let i = 0, len = bracketsConfig.length; i < len; i++) {
    open_brackets.push(bracketsConfig[i][0]);
    close_brackets.push(bracketsConfig[i][1]);
  }
  
  let first = br_array.shift();

  while(open_brackets.indexOf(first) == -1) {
    if(close_brackets.indexOf(first) != -1) {
      return false;
    }
  }

  let control_stack = [];
  control_stack.push(first);

  for(let i = 0, len = br_array.length; i < len; i++){
    if(open_brackets.indexOf(br_array[i]) != -1) {
      control_stack.push(br_array[i]);
    }
    else {
      while((close_brackets.indexOf(br_array[i]) == -1) && (open_brackets.indexOf(br_array[i]) == -1)){
        i++;
      }
      if(close_brackets.indexOf(br_array[i]) != open_brackets.indexOf(control_stack.pop())){
        return false;
      }
    }
  }
  if(control_stack.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
