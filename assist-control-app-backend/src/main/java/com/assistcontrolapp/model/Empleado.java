package com.assistcontrolapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="empleado")
public class Empleado {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name="id_empleado")
    private long id;

    @Column(name="nombre_empleado")
    private String nombre;

    @Column(name="apellido_empleado")
    private String apellido;

    @Column(name="correo_empleado")
    private String correo;

    @Column(name="contrato_id_contrato")
    private long idContrato;

    @Column(name="cargo_id_cargo")
    private long idCargo;


}
