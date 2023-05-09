function repeatFunction(callback, times, interval) {
  let count = 0;
  const intervalId = setInterval(() => {
    callback();
    count++;
    if (count === times) {
      clearInterval(intervalId);
    }
  }, interval);
}

// Example
function myFunction() {
  document.querySelector("#app > div > span:nth-child(3) > div > div > div:nth-child(2) > div > div._2gZs6 > div._2eIcs > div > div:nth-child(6) > div").click();
  document.querySelector("#app > div > span:nth-child(3) > div > div > div:nth-child(2) > div > div._2gZs6 > div._2eIcs > div > div._3OtEr._2Qn52 > span > div > ul > li:nth-child(2) > div").click();
  document.querySelector("#app > div > span:nth-child(3) > div > div > div:nth-child(2) > div > div._1OVaT > div._14SLK > div > div").click();
}

repeatFunction(myFunction, 40, 1000);
