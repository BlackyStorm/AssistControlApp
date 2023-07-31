package com.assistcontrolapp.repository;

import com.assistcontrolapp.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface EmpleadoRepository extends JpaRepository <Empleado, Long>{

    @Query(value="select * from empleado where concat (nombre_empleado, '  ',apellido_empleado ) like %:name%", nativeQuery = true)
    List<Empleado>findByName(String name);

    @Query(value="select * from empleado where contrato_id_contrato = :id ", nativeQuery = true)
    List<Empleado>findByTypeOfContractId(long id);

    @Query(value="select * from empleado where cargo_id_cargo = :id ", nativeQuery = true)
    List<Empleado>findBypositionId(long id);


    @Query(value="select * from empleado as e natural join tipo_contrato as tc where e.contrato_id_contrato=tc.id_tipo_contrato and tc.nombre_tipo_contrato=:name", nativeQuery = true)
    List<Empleado>findByTypeOfContractName(String name);

    @Query(value="select * from empleado as e natural join cargo as c where e.cargo_id_cargo=c.id_cargo and c.nombre_cargo=:name", nativeQuery = true)
    List<Empleado>findBypositionName(String name);

}
