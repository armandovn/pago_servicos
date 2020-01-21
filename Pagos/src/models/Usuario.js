/*import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Usuario = sequelize.define('usuario',{
    usuarioid:{

    },
    nombre:{

    },
    appaterno:{

    },
    apmaterno:{

    },
    correoelectronico:{

    },
    constrania:{

    },
    

});


/**
 
CREATE TABLE usuario(
	usuarioId 			integer 		default nextval ('seqUsuario'),
	nombre 				varchar(40) 	NOT NULL,
	apPaterno 			varchar(40) 	NOT NULL,
	apMaterno 			varchar(40)		NULL,
	correoElectronico 	varchar(40)		NOT NULL,
	contrasenia 		varchar(20)		NOT NULL,
	telefono 			varchar(10)		NOT NULL,
	rfc 				varchar(13)		NOT NULL,
	fechaRegistro 		date 			NOT NULL,
	fechaNacimiento 	date 			NOT NULL,
	sexo 				varchar(10)		NOT NULL,
	tipoUsuarioId 		integer			NOT NULL,
	perfilUsuarioId 	integer 		NOT NULL,

	CONSTRAINT PKU PRIMARY KEY (usuarioId),
	CONSTRAINT USUARIO_SEXO_CHK check (sexo in ('Masculino', 'Femenino')),
	CONSTRAINT PERFIL_USUARIO_ID_FK FOREIGN KEY (perfilUsuarioId) REFERENCES perfilUsuario (perfilUsuarioId),
    CONSTRAINT TIPO_USUARIO_ID_FK FOREIGN KEY (tipoUsuarioId) REFERENCES tipoUsuario (tipoUsuarioId)
);
 */