const dulces = [
  {
    id: 1,
    name: "Panditas",
    category: "Gomitas",
    precio: 35,
    bajoEnAzucar: "no",
  },
  {
    id: 2,
    name: "Mango Enchilado",
    category: "Enchilados",
    precio: 32,
    bajoEnAzucar: "si",
  },
  {
    id: 3,
    name: "Gusanos de Gomita",
    category: "Gomitas",
    precio: 20,
    bajoEnAzucar: "si",
  },
  {
    id: 4,
    name: "Pasitas de Chocolate",
    category: "Chocolates",
    precio: 45,
    bajoEnAzucar: "si",
  },
  {
    id: 5,
    name: "Ferrero",
    category: "Chocolates",
    precio: 45,
    bajoEnAzucar: "no",
  },
  {
    id: 6,
    name: "Toblerone",
    category: "Chocolates",
    precio: 55,
    bajoEnAzucar: "no",
  },
  {
    id: 7,
    name: "Skwinkles",
    category: "Enchilados",
    precio: 15,
    bajoEnAzucar: "no",
  },
];

let category = prompt(
  "Ingresa el tipo de Dulce que desea, ej: Gomitas, Enchilados, Chocolates"
);

let Azucar = prompt("Desea buscar dulces Bajos en Azucar? si, no");

let dulcesFiltrados = dulces.filter(
  (item) => item.category === category && item.bajoEnAzucar === Azucar
);

let mensaje = "";
dulcesFiltrados.forEach((item) => {
  mensaje += `
    Id: ${item.id}
    Dulce: ${item.name}
    Categoría: ${item.category}
    Precio: $${item.precio}
    Bajo en Azúcar: ${item.bajoEnAzucar}
    `;
});

alert(mensaje);
