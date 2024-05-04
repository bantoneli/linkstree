function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("lightMode")

  //  if (html.classList.contains("lightMode")) {
  //    html.classList.remove("lightMode")
  //  } else {
  //    html.classList.add("lightMode")
  //  }

  // pega a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("lightMode")) {
    // se tiver light mode, adicionar avatar-light.png
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, de óculos e barba com fundo amarelo."
    )
  } else {
    // se não, adicionar avatar.png
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito de óculos escuros com fundo roxo e azul."
    )
  }
}
