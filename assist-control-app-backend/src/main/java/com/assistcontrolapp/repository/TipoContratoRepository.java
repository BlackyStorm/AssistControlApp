package com.assistcontrolapp.repository;

import com.assistcontrolapp.model.TipoContrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoContratoRepository extends JpaRepository<TipoContrato, Long> {
}
