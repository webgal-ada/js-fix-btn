const btn = document.getElementById("btn");


function fix() {
  const greeting = document.getElementById("greeting").style.fontFamily = "Cursive";
  document.querySelector("span").innerText = "🎅 Merry Christmassy!";
}
btn.addEventListener("click", fix);


function chg() {


}
btn.addEventListener("click", chg);
//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.

