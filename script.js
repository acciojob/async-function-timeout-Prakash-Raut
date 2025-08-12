function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value.trim();
  const delay = Number(document.getElementById("delay").value);

  if (!text) {
    alert("Please enter some text.");
    return;
  }
	
  if (!delay || delay < 0) {
    alert("Please enter a valid delay in milliseconds.");
    return;
  }

  document.getElementById("output").textContent = "";

  await wait(delay);

  document.getElementById("output").textContent = text;
});