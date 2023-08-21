create table tproducto (
id_producto int primary key,
id_tipo int, /*Escritorio, limpieza, carnes, frutas, etc*/
descripcion varchar(35),
precio_compra double,
precio_venta double,
cantidad int,
activo bit
);

insert into tproducto(id_producto, id_tipo, descripcion, precio_compra, precio_venta, cantidad, activo)
values(1,01,'Simple',450.00,500.00,2,0);
insert into tproducto(id_producto, id_tipo, descripcion, precio_compra, precio_venta, cantidad, activo)
values(2,02,'Actual',200.00,300.00,5,0);
insert into tproducto(id_producto, id_tipo, descripcion, precio_compra, precio_venta, cantidad, activo)
values(3,03,'Serial',500.00,800.00,7,0);

select * from tproducto