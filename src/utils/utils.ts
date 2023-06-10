function debounce(func: () => void, time: number) {
  let debTime = time || 100; // 100 by default if no param
  let timer: number;

  return function(event: UIEvent){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func, debTime, event);
  };
}

export {
  debounce
}