const faker = require("@faker-js/faker");
const { Rol } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const roles = [];
  roles.push(
    {
      code: 100,
      name: "Lector",
      description:
        "Es el rol por defecto que tiene un usuario al registrarse al blog. Puede hacer comentarios en cualquier artículo",
    },
    {
      code: 200,
      name: "Escritor",
      description:
        "Mismos permisos que el lector, pero además puede hacer CRUD (de sus propios artículos).",
    },
    {
      code: 300,
      name: "Editor",
      description:
        "Mismos permisos que el escritor, y además editar artículos de cualquier escritor. No puede borrar artículos que no sean de su autoría. Además puede editar y/o borrar comentarios de cualquier artículo",
    },
    {
      code: 400,
      name: "Administrador",
      description:
        "Puede hacer CRUD de cualquier entidad; incluyendo, por ejemplo, eliminar usuarios.",
    }
  );

  await Rol.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
