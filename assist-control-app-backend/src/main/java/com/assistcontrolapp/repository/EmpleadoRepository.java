package com.assistcontrolapp.repository;

import com.assistcontrolapp.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface EmpleadoRepository extends JpaRepository <Empleado, Long>{

    //@Query("select p from Persona p where concat(p.nombre_empleado,' ', p.apellido_empleado) like %?1%")//busqueda por un solo campo
    //Optional<Empleado> findByName(String nombre);
}
