function solution(my_string, indices) {
  indices.sort((a, b) => b - a);
  
  for (let idx of indices) {
    my_string = my_string.slice(0, idx) + my_string.slice(idx + 1);
  }
  
  return my_string;
}