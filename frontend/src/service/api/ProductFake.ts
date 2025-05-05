export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    return response.json();
  } catch (erro) {
    console.error("Erro com API", erro);
  }
}
