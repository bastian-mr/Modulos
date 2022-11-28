# Proyecto sucursales

## Requisitos
### Desarrollo
- Node
- NestJS
- Docker o Postgres 9.x

## Instalacion
### Sin docker
importar sql en base de datos
```
cd ..
npm i
npm run start:dev
```
### Con docker
colocar dll de base de datos carpeta/proyecto/docker/dump
```
cd /carpeta/proyecto
cd docker
docker-compose up -d
cd ..
npm i
npm run start:dev
```

## En progreso
Se agrega constraint nextvalue() a la tabla suc_actividad en el campo act_cod
Se agrega constraint nextvalue() a la tabla suc_empresa en el campo emp_cod 
Se agrega constraint nextvalue() a la tabla suc_estado_age en el campo est_id 
Se agrega constraint nextvalue() a la tabla suc_tipo_suc en el campo tipo_suc 


### Servicios:

- [ ] Dashboard: GET
- [x] Festivos: CRUD
- [x] Creacion de campos: CRUD
- [ ] sucursal-fisica: CRUD
- [x] region-comuna: GET
- [x] Horario: CRUD
- [x] actividad-sucursal: CRUD
- [x] estado-sucursal: CRUD
- [x] empresa-sucursal: CRUD
- [x] tipo-sucursal: CRUD
- [x] log-sucursal: CRUD
- [x] usuario: CRUD

### Otras caracteristicas

- [ ] Guardar token mientras este activo en storage, si no volver a perdir uno nuevo
- [ ] Crear Entidad de bases de datos de cada tabla:
  - [ ] suc_actividad
  - [x] suc_camp_anexo
  - [ ] suc_dia
  - [ ] suc_dias_feriados
  - [ ] suc_empresa
  - [ ] suc_estado_age
  - [ ] suc_hor_laboral
  - [ ] suc_log_sucursal
  - [ ] suc_sucursal
  - [ ] suc_tipo_suc
  - [ ] suc_usuario
