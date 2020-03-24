/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Gustavo Huerta
 * Created: 22-03-2020
*/ 

INSERT INTO usuario(id,email, password,rol,username) SELECT * FROM (SELECT 1,"pmrappserviciotecnico@gmail.com","$2y$12$LHy8uRprHarLB5t0pWaOIe4GWdSqsE/chNjsygLliPAk7jb4/YvOO",0,"19.478.971-8") AS tmp
WHERE NOT EXISTS (
SELECT username FROM usuario WHERE username = '19.478.971-8'
) LIMIT 1;
--INSERT INTO administrador (id,apellidos, nombres, run, usuario_id) VALUES (1,"Huerta Cayun", "Gustavo Abraham","19.478.971-8",1);
select next_val as id_val from usuario_sequence for update;
update usuario_sequence set next_val= 2 where  next_val=1;
select next_val as id_val from administrador_sequence for update;
update administrador_sequence set next_val= 2 where next_val=1;
