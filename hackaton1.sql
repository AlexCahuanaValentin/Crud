use master
go
drop database if exists db_Digital
create database db_Digital
go

use db_Digital
go

------------CREACION DE TABLAS MAESTRAS-------------

-- CREACION DE LA TABLA BIEN
CREATE TABLE good (
    id int IDENTITY(1,1),
	amount int  NOT NULL,
    code varchar(10)  NOT NULL,
    details_good varchar(120)  NOT NULL,
    price_book decimal(8,2)  NOT NULL,
    date_int date  NOT NULL,
    date_dep date  NOT NULL,
    state char(4)  NOT NULL,
    depreciation_id int  NOT NULL,
    area_id int  NOT NULL,
    CONSTRAINT good_pk PRIMARY KEY  (id)
);

---- CREACION DE LA TABLA AREA
CREATE TABLE area (
    id int IDENTITY(1,1),
    name_area varchar(90),
    last_name varchar(90),
    name varchar(60),
    CONSTRAINT area_pk PRIMARY KEY  (id)
);

-- CREACION DE LA TABLAS DEPRECIACION
CREATE TABLE depreciation (
    id int IDENTITY(1,1),
    descriptions varchar(120)  NOT NULL,
    porcentage_anual int  NOT NULL,
    CONSTRAINT depreciation_pk PRIMARY KEY  (id)
);

-------TABLA TANSACCIONAL----

--creaciacion de tabla registro inventario
CREATE TABLE record (
    id int  NOT NULL  IDENTITY (1,1),
    good_id int  NOT NULL,
    date_time datetime  NOT NULL,
    state char(4)  NOT NULL,
    CONSTRAINT record_pk PRIMARY KEY  (id)
);


-- foreign keys

-- 1. Un bien puede estar en uno o varias veces en el inventario
ALTER TABLE record ADD CONSTRAINT record_good
    FOREIGN KEY (good_id)
    REFERENCES good (id);

-- 2. Un area puede estar una o muchas bienes
ALTER TABLE good ADD CONSTRAINT good_area
    FOREIGN KEY (area_id)
    REFERENCES area (id);

-- 3. Una depreciacion puede estar una o muchos bienes
ALTER TABLE good ADD CONSTRAINT good_depreciation
    FOREIGN KEY (depreciation_id)
    REFERENCES depreciation (id);


----------<> Restricciones para la Tabla MAESTRA GOOD (bienes)

-- Restricción para estados  válidos (ALTA o BAJA)
ALTER TABLE good
    ADD CONSTRAINT chk_state_good CHECK(state ='ALTA' OR state ='BAJA');

-- Restriccion para asegurar que el campo amount sera un valor positivo
ALTER TABLE good
    ADD CONSTRAINT chk_amount_good CHECK(amount > 0);
-- Restricción para asignar por defecto la fecha del 31 de diciembre del año en curso a la columna date_depreciation
ALTER TABLE good
    ADD CONSTRAINT df_date_dep_good DEFAULT DATEFROMPARTS(YEAR(GETDATE()), 12, 31) FOR date_dep;


----------<> Restricciones para la Tabla inventory (Registro Inventario)

-- Restricción para asignar un valor por defecto la fecha y hora actual a la columna date_time
ALTER TABLE record
    ADD CONSTRAINT df_date_time_record DEFAULT GETDATE() FOR date_time;

-- Restricción para estados  válidos (ALTA o BAJA)
ALTER TABLE record
    ADD CONSTRAINT chk_state_record CHECK(state ='ALTA' OR state ='BAJA');
