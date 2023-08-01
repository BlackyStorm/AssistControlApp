package com.assistcontrolapp.repository;

import com.assistcontrolapp.model.EmpleadoCargoTipoContrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmpleadoCargoTipoContratoRepository extends JpaRepository<EmpleadoCargoTipoContrato, Long> {

    @Query(value="select e.id_empleado as id_empleado, e.nombre_empleado as nombre_empleado, e.apellido_empleado as apellido_empleado, e.correo_empleado as correo_empleado, c.nombre_cargo as nombre_cargo, tc.nombre_tipo_contrato as nombre_contrato from empleado as e inner join cargo as c on e.cargo_id_cargo= c.id_cargo inner join contrato as ct on e.contrato_id_contrato=ct.id_contrato inner join tipo_contrato as tc on ct.tipo_contrato_id_tipo_contrato=tc.id_tipo_contrato", nativeQuery = true)
    List<EmpleadoCargoTipoContrato> findAllWithPositionAndContract();

}
