package com.assistcontrolapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="tipo_contrato")
public class TipoContrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_tipo_contrato")
    private long id;

    @Column(name="nombre_tipo_contrato")
    private String nombreTipo;

    @Column(name="caracteristica_tipo_contrato")
    private String caracteristica;

}
