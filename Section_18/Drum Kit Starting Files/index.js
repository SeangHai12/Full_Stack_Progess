for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);

  function handleclick() {
    alert("I've been click");
  }
}
