package com.assistcontrolapp.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="contrato")
public class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_contrato")
    private long id;

    @Column(name="fecha_contrato")
    private String fecha;

    @Column(name="sueldo_contrato")
    private long sueldo;

    @Column(name="tipo_contrato_id_tipo_contrato")
    private long idTipoContrato;

}
