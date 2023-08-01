package com.assistcontrolapp.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class EmpleadoCargoTipoContrato {

    @Id
    @Column(name="id_empleado")
    private Long id;

    @Column(name="nombre_empleado")
    private String nombre;

    @Column(name="apellido_empleado")
    private String apellido;

    @Column(name="correo_empleado")
    private String correo;

    @Column(name="nombre_cargo")
    private String cargo;

    @Column(name="nombre_contrato")
    private String tipoContrato;


}
